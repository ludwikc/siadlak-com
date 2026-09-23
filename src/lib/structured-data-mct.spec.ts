import { describe, expect, it } from "vitest";
import { courses } from "@/config/mct/courses";
import type { ScheduledSession } from "@/config/mct/types";
import { BASE_URL, IDS } from "./structured-data";
import {
  getMctBreadcrumb,
  getMctBriefingService,
  getMctCourseEntity,
  getMctEnterpriseService,
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
      provider: { "@id": IDS.organization },
      inLanguage: ["en", "pl"],
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

  it("uses a single-day workload for a 1-day session", () => {
    const oneDaySession: ScheduledSession = { ...sessionEn, days: 1 };
    const entity = getMctCourseEntity(course, [oneDaySession], "en");
    expect(entity.hasCourseInstance[0].courseWorkload).toBe("PT8H");
  });
});

describe("getMctBriefingService", () => {
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
  it("returns a Service with no offers", () => {
    const service = getMctEnterpriseService("en");
    expect(service["@type"]).toBe("Service");
    expect(service).not.toHaveProperty("offers");
    expect(service.provider).toEqual({ "@id": IDS.person });
  });
});

describe("getMctHubEntities", () => {
  it("returns a WebPage, an ItemList of courses and a breadcrumb", () => {
    const list = [course];
    const [webPage, itemList, breadcrumb] = getMctHubEntities("en", list);

    expect(webPage).toMatchObject({ "@type": "WebPage", "@id": `${BASE_URL}/mct` });

    expect(itemList).toEqual({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, url: `${BASE_URL}/mct/courses/dp-600` },
      ],
    });

    expect(breadcrumb["@type"]).toBe("BreadcrumbList");
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
