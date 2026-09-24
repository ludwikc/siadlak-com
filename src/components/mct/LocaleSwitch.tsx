import { Link, useLocation } from "react-router-dom";
import { altPath, otherLocale } from "@/config/mct/locale";
import { track } from "@/lib/analytics";
import { useMct } from "./MctContext";

export default function LocaleSwitch() {
  const { locale, surface, t } = useMct();
  const { pathname } = useLocation();
  const target = otherLocale(locale);

  return (
    <Link
      to={altPath(locale, pathname)}
      hrefLang={target}
      aria-label={t.nav.localeSwitchLabel}
      onClick={() => track("mct_locale_switch", { from: locale, to: target, page_path: pathname })}
      className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-on-dark hover:border-electric/60 transition-colors"
      data-cta={`${surface}:locale-switch`}
    >
      {target.toUpperCase()}
      <span className="sr-only"> {t.nav.localeSwitch}</span>
    </Link>
  );
}
