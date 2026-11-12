import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BOOKING_PATH, CENTERS } from "@/config/booking/catalog";
import { bookingCopy } from "@/config/booking/copy";
import { CTAButton } from "@/design-system/components/cta-button";

export default function BookingIndex() {
  return (
    <Layout hideHeader hideFooter>
      <SEO title="Booking center" description={bookingCopy.en.intro} url={BOOKING_PATH} noindex />
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-on-light-dim">siadlak.com</p>
          <p className="mt-10 text-sm font-bold uppercase tracking-widest text-electric md:mt-14">Booking center</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {CENTERS.map(({ slug, locale }) => {
              const t = bookingCopy[locale];
              return (
                <article
                  key={slug}
                  lang={locale}
                  className="flex flex-col rounded-[var(--border-radius-md)] border border-border bg-card p-8"
                >
                  <span className="w-fit rounded bg-electric/10 px-2 py-1 font-mono text-sm font-bold uppercase text-electric">
                    {locale}
                  </span>
                  <h1 className="mt-5 text-2xl font-bold md:text-3xl">{t.title}</h1>
                  <p className="mt-4 flex-1 text-lg leading-relaxed text-on-light-dim">{t.intro}</p>
                  <div className="mt-8">
                    <CTAButton to={`${BOOKING_PATH}/${slug}`} variant="primary">
                      {t.open}
                    </CTAButton>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
