import { getCopy } from "@/config/mct/copy";
import { faq } from "@/config/mct/faq";
import { briefingPath, coursePath, enterprisePath, hubPath } from "@/config/mct/locale";
import { MCT_CONTENT_UPDATED } from "@/config/mct/meta";
import { pricing } from "@/config/mct/pricing";
import { seatPrice } from "@/config/mct/pricing-utils";
import { sessionEndsAt } from "@/config/mct/schedule-utils";
import type { Course, CourseLevel, Currency, FaqItem, Locale, ScheduledSession } from "@/config/mct/types";
import {
  BASE_URL,
  IDS,
  getBreadcrumbSchema,
  getFAQSchema,
  getOrganizationEntity,
  getPersonEntity,
  getWebPageEntity,
} from "./structured-data";

type BreadcrumbItem = { name: string; path: string };

const EDUCATIONAL_LEVEL: Record<CourseLevel, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

function buildOffer(price: number, currency: Currency, url: string) {
  return {
    "@type": "Offer",
    price,
    priceCurrency: currency,
    category: "Paid",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price,
      priceCurrency: currency,
      valueAddedTaxIncluded: false,
    },
    url,
  };
}

function orderedCurrencies(locale: Locale): [Currency, Currency] {
  const first = pricing.currencyByLocale[locale];
  const second: Currency = first === "EUR" ? "PLN" : "EUR";
  return [first, second];
}

export function getMctCourseEntity(
  course: Course,
  upcoming: ScheduledSession[],
  locale: Locale,
) {
  const url = `${BASE_URL}${coursePath(locale, course.slug)}`;
  const offers = orderedCurrencies(locale).map((currency) =>
    buildOffer(seatPrice(course.days, currency), currency, url),
  );

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": url,
    name: course.title[locale],
    description: course.summary[locale],
    ...(course.codes.length > 0 ? { courseCode: course.codes.join(", ") } : {}),
    url,
    provider: { "@id": IDS.organization },
    instructor: { "@id": IDS.person },
    inLanguage: ["en", "pl"],
    educationalLevel: EDUCATIONAL_LEVEL[course.level],
    timeRequired: course.days === 1 ? "PT8H" : "PT16H",
    teaches: course.outcomes[locale],
    coursePrerequisites: course.prerequisites[locale],
    audience: { "@type": "Audience", audienceType: course.audience[locale].join(", ") },
    dateModified: MCT_CONTENT_UPDATED,
    offers,
    hasCourseInstance: upcoming.map((session) => ({
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: session.days === 1 ? "PT8H" : "PT16H",
      startDate: session.startsAt,
      endDate: sessionEndsAt(session).toISOString(),
      inLanguage: session.language,
      instructor: { "@id": IDS.person },
      location: { "@type": "VirtualLocation", url },
      offers,
    })),
  };
}

export function getMctBriefingService(locale: Locale) {
  const meta = getCopy(locale).meta.briefing;
  const url = `${BASE_URL}${briefingPath(locale)}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": IDS.serviceMctBriefing,
    url,
    name: meta.title,
    description: meta.description,
    provider: { "@id": IDS.person },
    serviceType: "Executive briefing",
    offers: [
      buildOffer(pricing.briefing.flat.EUR, "EUR", url),
      buildOffer(pricing.briefing.flat.PLN, "PLN", url),
    ],
  };
}

export function getMctEnterpriseService(locale: Locale) {
  const meta = getCopy(locale).meta.enterprise;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": IDS.serviceMctEnterprise,
    url: `${BASE_URL}${enterprisePath(locale)}`,
    name: meta.title,
    description: meta.description,
    provider: { "@id": IDS.person },
    serviceType: "Custom enterprise training",
  };
}

export function getMctBreadcrumb(locale: Locale, items: BreadcrumbItem[]) {
  const home = { name: locale === "pl" ? "Strona główna" : "Home", path: "/" };
  return getBreadcrumbSchema([home, ...items]);
}

export function getMctFaqSchema(locale: Locale, scope: FaqItem["scope"][number]) {
  return getFAQSchema(
    faq
      .filter((item) => item.scope.includes(scope))
      .map((item) => ({ question: item.question[locale], answer: item.answer[locale] })),
  );
}

export function getMctHubEntities(locale: Locale, courseList: Course[]) {
  const meta = getCopy(locale).meta.hub;
  const navHubLabel = getCopy(locale).nav.hub;

  return [
    { ...getWebPageEntity(hubPath(locale), meta.title, meta.description), dateModified: MCT_CONTENT_UPDATED },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: courseList.map((course, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: course.title[locale],
        url: `${BASE_URL}${coursePath(locale, course.slug)}`,
      })),
    },
    getMctBreadcrumb(locale, [{ name: navHubLabel, path: hubPath(locale) }]),
  ];
}

export function getMctEntityGraph() {
  return [getOrganizationEntity(), getPersonEntity()];
}
