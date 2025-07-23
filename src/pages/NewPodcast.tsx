import Layout from '@/components/layout/Layout';
import PodcastCard from '@/components/podcast/PodcastCard';

export default function NewPodcast() {
  return (
    <Layout>
      {/* Hero Section from /program - kept intact */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Twoja ścieżka do transformacji
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Sprawdzone programy, które prowadzą Cię przez kolejne etapy rozwoju – od podstaw po program premium dla wybranych.
            </p>
          </div>
        </div>
      </section>

      {/* Content from /podcast page */}
      <section
        id="podcasts"
        className="py-16 bg-secondary/30 dark:bg-quantum-blue/20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-deep-charcoal dark:text-silver-mist">
              Codzienne dojazdy do pracy, bieganie, czy poranne przygotowania to
              idealny czas na rozwój. Nagrywam te podcasty z myślą o Was -
              zapracowanych profesjonalistach, którzy cenią efektywność i chcą
              wykorzystać każdą minutę na zwiększenie swojego potencjału.
            </p>
            <p className="mt-4 text-lg text-deep-charcoal dark:text-silver-mist">
              Wybierz format, który najlepiej pasuje do Twojego celu: praktyczne
              strategie zwiększania produktywności lub ćwiczenia uważności,
              które wzmocnią Twoją odporność psychiczną.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
            <PodcastCard
              title="Life Hacking Podcast"
              description="Praktyczne scenariusze przejmowania władzy nad światem. Docenisz konkretne, oparte na doświadczeniu strategie zamiast teoretycznych koncepcji."
              imageUrl="/lovable-uploads/208a0c75-6c6d-4324-8241-a7de28c2fa3e.png"
              link="/podcast/life-hacking"
              schedule="Nowe odcinki: Co czwartek"
            />
            <PodcastCard
              title="Uważne Życie"
              description="Odnajdź równowagę w świecie ciągłych wymagań. Praktyczne ćwiczenia uważności, które możesz wykonać podczas porannej kawy, w drodze do pracy, czy wieczorem."
              imageUrl="/lovable-uploads/17bd28c7-cb8f-4096-adcd-c6f6a3b7c266.png"
              link="/podcast/uwazne-zycie"
              schedule="Sesje live: Każdy wtorek o 6:30 rano"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}