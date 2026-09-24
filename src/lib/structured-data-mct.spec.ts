import { describe, expect, it } from "vitest";
import { getCopy } from "@/config/mct/copy";
import { courses } from "@/config/mct/courses";
import { faq } from "@/config/mct/faq";
import { MCT_CONTENT_UPDATED } from "@/config/mct/meta";
import type { ScheduledSession } from "@/config/mct/types";
import { BASE_URL, IDS, getOrganizationEntity, getPersonEntity } from "./structured-data";
import {
  getMctBreadcrumb,
  getMctBriefingService,
  getMctCourseEntity,
  getMctEnterpriseService,
  getMctEntityGraph,
  getMctFaqSchema,
  getMctHubEntities,
} from "./structured-data-mct";

const course = courses["dp-600"];

const sessionEn: ScheduledSession = {
  id: "dp-600-2026-11-16-en",
  courseSlug: "dp-600",
  startsAt: "2026-11-16T09:00:00+01:00",
  days: 2,
  language: "en",
  seatsTotal: 8,
  status: "open",
};

const sessionPl: ScheduledSession = {
  id: "dp-600-2027-01-12-pl",
  courseSlug: "dp-600",
  startsAt: "2027-01-12T09:00:00+01:00",
  days: 2,
  language: "pl",
  seatsTotal: 8,
  status: "filling",
};

describe("getMctCourseEntity", () => {
  it("builds one CourseInstance per upcoming session and puts the locale's currency first", () => {
    const entity = getMctCourseEntity(course, [sessionEn, sessionPl], "en");

    expect(entity).toEqual({
      "@context": "https://schema.org",
      "@type": "Course",
      "@id": `${BASE_URL}/mct/courses/dp-600`,
      name: course.title.en,
      description: course.summary.en,
      courseCode: "DP-600T00",
      url: `${BASE_URL}/mct/courses/dp-600`,
      provider: { "@id": IDS.organization },
      instructor: { "@id": IDS.person },
      inLanguage: ["en", "pl"],
      educationalLevel: "Advanced",
      timeRequired: "PT16H",
      teaches: course.outcomes.en,
      coursePrerequisites: course.prerequisites.en,
      audience: { "@type": "Audience", audienceType: course.audience.en.join(", ") },
      dateModified: MCT_CONTENT_UPDATED,
      offers: [
        {
          "@type": "Offer",
          price: 1090,
          priceCurrency: "EUR",
          category: "Paid",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 1090,
            priceCurrency: "EUR",
            valueAddedTaxIncluded: false,
          },
          url: `${BASE_URL}/mct/courses/dp-600`,
        },
        {
          "@type": "Offer",
          price: 4490,
          priceCurrency: "PLN",
          category: "Paid",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 4490,
            priceCurrency: "PLN",
            valueAddedTaxIncluded: false,
          },
          url: `${BASE_URL}/mct/courses/dp-600`,
        },
      ],
      hasCourseInstance: [
        {
          "@type": "CourseInstance",
          courseMode: "Online",
          courseWorkload: "PT16H",
          startDate: sessionEn.startsAt,
          endDate: "2026-11-17T16:00:00.000Z",
          inLanguage: "en",
          instructor: { "@id": IDS.person },
          location: { "@type": "VirtualLocation", url: `${BASE_URL}/mct/courses/dp-600` },
          offers: entity.offers,
        },
        {
          "@type": "CourseInstance",
          courseMode: "Online",
          courseWorkload: "PT16H",
          startDate: sessionPl.startsAt,
          endDate: "2027-01-13T16:00:00.000Z",
          inLanguage: "pl",
          instructor: { "@id": IDS.person },
          location: { "@type": "VirtualLocation", url: `${BASE_URL}/mct/courses/dp-600` },
          offers: entity.offers,
        },
      ],
    });
  });

  it("puts PLN first for the pl locale", () => {
    const entity = getMctCourseEntity(course, [], "pl");
    expect(entity.offers.map((o) => o.priceCurrency)).toEqual(["PLN", "EUR"]);
  });

  it("returns an empty hasCourseInstance and still has offers when there are no upcoming sessions", () => {
    const entity = getMctCourseEntity(course, [], "en");
    expect(entity.hasCourseInstance).toEqual([]);
    expect(entity.offers).toHaveLength(2);
  });

  it("omits courseCode for a course with no official code", () => {
    const entity = getMctCourseEntity(courses["copilot-studio-agents"], [], "en");
    expect([courses["copilot-studio-agents"].codes, "courseCode" in entity]).toEqual([[], false]);
  });

  it("describes a 1-day beginner course in the requested locale", () => {
    const oneDay = courses["ab-731"];
    const entity = getMctCourseEntity(oneDay, [], "pl");

    expect({
      educationalLevel: entity.educationalLevel,
      timeRequired: entity.timeRequired,
      teaches: entity.teaches,
      coursePrerequisites: entity.coursePrerequisites,
      audience: entity.audience,
      url: entity.url,
    }).toEqual({
      educationalLevel: "Beginner",
      timeRequired: "PT8H",
      teaches: oneDay.outcomes.pl,
      coursePrerequisites: oneDay.prerequisites.pl,
      audience: { "@type": "Audience", audienceType: oneDay.audience.pl.join(", ") },
      url: `${BASE_URL}/szkolenia/kursy/ab-731`,
    });
  });

  it("uses a single-day workload for a 1-day session", () => {
    const oneDaySession: ScheduledSession = { ...sessionEn, days: 1 };
    const entity = getMctCourseEntity(course, [oneDaySession], "en");
    expect(entity.hasCourseInstance[0].courseWorkload).toBe("PT8H");
  });
});

describe("getMctBriefingService", () => {
  it("shares one @id across locales and points url at the locale's page", () => {
    const [en, pl] = [getMctBriefingService("en"), getMctBriefingService("pl")];

    expect([en["@id"], pl["@id"], en.url, pl.url]).toEqual([
      IDS.serviceMctBriefing,
      IDS.serviceMctBriefing,
      `${BASE_URL}/mct/executive-briefing`,
      `${BASE_URL}/szkolenia/briefing-dla-zarzadu`,
    ]);
  });

  it("prices the briefing at 1900 EUR and 7900 PLN", () => {
    const service = getMctBriefingService("en");

    expect(service["@type"]).toBe("Service");
    expect(service.serviceType).toBe("Executive briefing");
    expect(service.provider).toEqual({ "@id": IDS.person });
    expect(service.offers).toEqual([
      {
        "@type": "Offer",
        price: 1900,
        priceCurrency: "EUR",
        category: "Paid",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 1900,
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
        },
        url: `${BASE_URL}/mct/executive-briefing`,
      },
      {
        "@type": "Offer",
        price: 7900,
        priceCurrency: "PLN",
        category: "Paid",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 7900,
          priceCurrency: "PLN",
          valueAddedTaxIncluded: false,
        },
        url: `${BASE_URL}/mct/executive-briefing`,
      },
    ]);
  });
});

describe("getMctEnterpriseService", () => {
  it("returns a Service with no offers under a locale-independent @id", () => {
    expect(getMctEnterpriseService("pl")).toEqual({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": IDS.serviceMctEnterprise,
      url: `${BASE_URL}/szkolenia/enterprise`,
      name: getCopy("pl").meta.enterprise.title,
      description: getCopy("pl").meta.enterprise.description,
      provider: { "@id": IDS.person },
      serviceType: "Custom enterprise training",
    });
    expect(getMctEnterpriseService("en")["@id"]).toEqual(IDS.serviceMctEnterprise);
  });
});

describe("getMctHubEntities", () => {
  it("returns a WebPage, an ItemList of courses and a breadcrumb", () => {
    const list = [course];
    const [webPage, itemList, breadcrumb] = getMctHubEntities("en", list);

    expect(webPage).toMatchObject({
      "@type": "WebPage",
      "@id": `${BASE_URL}/mct`,
      dateModified: MCT_CONTENT_UPDATED,
    });

    expect(itemList).toEqual({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: course.title.en,
          url: `${BASE_URL}/mct/courses/dp-600`,
        },
      ],
    });

    expect(breadcrumb["@type"]).toBe("BreadcrumbList");
  });
});

describe("getMctEntityGraph", () => {
  it("emits the Organization and Person nodes that the MCT entities reference by @id", () => {
    expect(getMctEntityGraph()).toEqual([getOrganizationEntity(), getPersonEntity()]);
  });

  it("lists both MCT services among the Person's offers", () => {
    expect(getPersonEntity().makesOffer.slice(-2)).toEqual([
      { "@id": IDS.serviceMctBriefing },
      { "@id": IDS.serviceMctEnterprise },
    ]);
  });
});

describe("getMctBreadcrumb", () => {
  it("prepends a localized home entry via getBreadcrumbSchema", () => {
    const breadcrumb = getMctBreadcrumb("pl", [{ name: "Training", path: "/szkolenia" }]);
    expect(breadcrumb).toEqual({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Strona główna", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Training", item: `${BASE_URL}/szkolenia` },
      ],
    });
  });
});

describe("getMctFaqSchema", () => {
  it("builds a FAQPage from the scoped items in the given locale", () => {
    const briefingItems = faq.filter((item) => item.scope.includes("briefing"));

    expect(getMctFaqSchema("pl", "briefing")).toEqual({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: briefingItems.map((item) => ({
        "@type": "Question",
        name: item.question.pl,
        acceptedAnswer: { "@type": "Answer", text: item.answer.pl },
      })),
    });
  });

  it("excludes items outside the scope", () => {
    const names = getMctFaqSchema("en", "course").mainEntity.map((q) => q.name);
    const outOfScope = faq.filter((item) => !item.scope.includes("course")).map((item) => item.question.en);

    expect(outOfScope.length).toEqual(3);
    expect(names.filter((name) => outOfScope.includes(name))).toEqual([]);
  });
});
