import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import LandingLayout from "@/components/layout/LandingLayout";
import { EMAIL, PHONE_DE, PHONE_PL, PHONE_PL_TEL, PORTAL_PRIVACY_URL } from "@/config/mct/contact";
import { fill } from "@/config/mct/copy";
import { courseList, tracks } from "@/config/mct/courses";
import { coursePath } from "@/config/mct/locale";
import { MCT_CONTENT_UPDATED, formatUpdatedDate } from "@/config/mct/meta";
import type { Track } from "@/config/mct/types";
import LocaleSwitch from "./LocaleSwitch";
import { useMct } from "./MctContext";

const TRACK_ORDER = Object.keys(tracks) as Track[];

const footerLinkClass = "text-sm text-dim transition-colors hover:text-on-dark";
const footerHeadingClass = "mct-eyebrow mt-0 mb-5 text-on-dark-tertiary";

function MctTopBar() {
  const { t, paths } = useMct();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-mct-navy/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3">
        <Link to="/" className="font-heading text-base font-bold text-on-dark">
          {t.nav.brand}
        </Link>
        <nav aria-label={t.nav.ariaLabel} className="ml-auto flex items-center gap-6">
          <Link
            to={paths.hub}
            className="hidden text-sm text-dim transition-colors hover:text-on-dark md:inline"
          >
            {t.nav.hub}
          </Link>
          <LocaleSwitch />
        </nav>
      </div>
    </header>
  );
}

function MctFooter() {
  const { locale, t, paths } = useMct();
  const year = new Date().getFullYear();
  const formats = [
    { to: `${paths.hub}#pricing`, label: t.tiers.items.public.title },
    { to: paths.briefing, label: t.tiers.items.briefing.title },
    { to: paths.enterprise, label: t.tiers.items.enterprise.title },
  ];

  return (
    <footer className="border-t border-white/10 bg-mct-navy-elevated">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-3">
        <div>
          <h2 className={footerHeadingClass}>{t.footer.catalog}</h2>
          <div className="space-y-6">
            {TRACK_ORDER.map((track) => (
              <div key={track}>
                <h3 className="mt-0 mb-2 text-sm font-semibold text-on-dark">
                  {tracks[track].title[locale]}
                </h3>
                <ul className="space-y-1.5">
                  {courseList
                    .filter((course) => course.track === track)
                    .map((course) => (
                      <li key={course.slug}>
                        <Link to={coursePath(locale, course.slug)} className={footerLinkClass}>
                          {course.title[locale]}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className={footerHeadingClass}>{t.footer.formats}</h2>
          <ul className="space-y-2">
            {formats.map((format) => (
              <li key={format.to}>
                <Link to={format.to} className={footerLinkClass}>
                  {format.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={footerHeadingClass}>{t.footer.contact}</h2>
          <ul className="space-y-2">
            <li>
              <a href={`mailto:${EMAIL}`} className={footerLinkClass}>
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_PL_TEL}`} className={footerLinkClass}>
                {PHONE_PL}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_DE.replace(/\s/g, "")}`} className={footerLinkClass}>
                {PHONE_DE}
              </a>
            </li>
          </ul>
          <p className="mt-4 mb-0 text-sm text-on-dark-tertiary">{t.footer.responseTime}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto mb-0 max-w-6xl px-4 py-6 text-xs text-dim">
          © {year} {t.nav.brand} · {t.footer.since} ·{" "}
          {fill(t.footer.updated, { date: formatUpdatedDate(MCT_CONTENT_UPDATED, locale) })} ·{" "}
          <a
            href={PORTAL_PRIVACY_URL}
            className="underline underline-offset-2 hover:text-on-dark-tertiary"
          >
            {t.footer.privacy}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default function MctShell({ children }: { children: ReactNode }) {
  return (
    <LandingLayout showLegal={false} className="bg-mct-navy text-on-dark min-h-screen">
      <MctTopBar />
      <main>{children}</main>
      <MctFooter />
    </LandingLayout>
  );
}
