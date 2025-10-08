import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Zap,
  AlertCircle,
  Brain,
  GitMerge,
  Crown,
  ChevronDown,
  Sparkles,
  Download,
  Users,
  Clock,
  Target,
  Trophy,
  AlertTriangle,
  Calendar,
} from "@/lib/icons";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";

export default function LifeOSSystemUpgrade() {
  const [spotsAvailable, setSpotsAvailable] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [hasShownExitModal, setHasShownExitModal] = useState(false);

  const scrollToDiscovery = () => {
    const discoverySection = document.getElementById("discovery-section");
    if (discoverySection) {
      discoverySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animated counter for available spots
  useEffect(() => {
    let count = 0;
    const targetCount = 2;
    const interval = setInterval(() => {
      if (count < targetCount) {
        count++;
        setSpotsAvailable(count);
      } else {
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Sticky CTA bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("section");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowStickyBar(window.scrollY > heroBottom);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Exit-intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExitModal && window.scrollY > 500) {
        setShowExitModal(true);
        setHasShownExitModal(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShownExitModal]);

  // Testimonials data
  const testimonials = [
    {
      quote:
        "Nie zdawałem sobie sprawy, ile energii szło na walkę z samym sobą. Teraz czuję się jak po przesiadce z małego fiata do porsche.",
      name: "CEO, 8-cyfrowe przychody",
      title: "Life OS Absolwent",
    },
    {
      quote:
        "Wcześniej decyzja o zatrudnieniu kosztowała mnie 3 tygodnie snu. Teraz wiem w 20 minut. I nie mylę się częściej - wręcz przeciwnie.",
      name: "Założycielka tech startup",
      title: "€2M ARR",
    },
    {
      quote:
        "Pierwszy raz od 15 lat spędziłem sobotę z rodziną i nie myślałem o firmie. I firma nie spłonęła.",
      name: "Przedsiębiorca",
      title: "Life OS Absolwent",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "Jak to się różni od terapii?",
      answer:
        "Terapeuta pomoże Ci zrozumieć, skąd się bierze Twój paraliż decyzyjny. Ja pomogę Ci podjąć tę trudną decyzję w poniedziałek o 9 rano - kiedy na szali jest 2M PLN i przyszłość firmy. Terapia = rozumienie przeszłości. Life OS = transformacja teraźniejszości i przyszłości.",
    },
    {
      question: "Czy to coaching?",
      answer:
        'Technicznie tak, ale wolę słowo "transformacja." Coach daje Ci narzędzia. Ja zmieniam system, na którym działasz. To jak różnica między "zainstaluj tę aplikację" vs. "upgrade całego OS z Windows 98 do najnowszego MacOS."',
    },
    {
      question: "Co jeśli mi nie pasuje Twój styl?",
      answer:
        'Nie będziemy pasować. I to jest ok. Ta praca wymaga pełnego zaufania i gotowości na konfrontację (lub delikatne prowadzenie - w zależności od ścieżki). Jeśli na Sesji Discovery poczujesz, że nie pasujemy - po prostu powiemy sobie "dzięki, nie tym razem." Bez urazy. Bez presji.',
    },
    {
      question: "Czy gwarantujesz rezultaty?",
      answer:
        "Nie. Nie dlatego, że nie wierzę w program - wierzę. Ale nie mogę zagwarantować Twojego zaangażowania. Jeśli włożysz 100% - przejdziesz transformację. Jeśli włożysz 50% - dostaniesz 50% rezultatów. Ja gwarantuję pełne zaangażowanie z mojej strony, precyzyjną diagnostykę, bezpieczną przestrzeń i metodologię która zadziałała na dziesiątkach osób. Ty gwarantujesz, że będziesz się stawiał i będziesz uczciwy sam ze sobą.",
    },
    {
      question: "Co jeśli nie mam 8 tygodni?",
      answer:
        "To nie jest dla Ciebie. Jeszcze. Transformacja tożsamości nie działa w 'intensywnym 2-dniowym bootcampie.' Potrzebujesz czasu, by nowe wzorce się zakorzeniły. By stary system faktycznie został zastąpiony nowym. Poczekaj, aż będziesz gotowy.",
    },
    {
      question: "Ile osób bierzesz jednocześnie?",
      answer:
        "Maximum 5. Nie dlatego, że sztuczna rzadkość. Ale żeby zapewnić quality. Ta praca wymaga mojej pełnej obecności. Nie mogę dać jej 15 ludziom jednocześnie.",
    },
  ];

  return (
    <Layout>
      {/* Exit Intent Modal */}
      {showExitModal && (
        <ExitIntentModal
          onClose={() => setShowExitModal(false)}
          onCTA={scrollToDiscovery}
        />
      )}

      {/* Sticky CTA Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-twilight-indigo to-neural-blue shadow-xl transition-transform duration-300 ${
          showStickyBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-white">
            <span className="font-bold text-lg">Life OS: System Upgrade</span>
            <span className="ml-4 text-sm text-white/90">
              {spotsAvailable}/5 miejsc dostępnych
            </span>
          </div>
          <CTAButton
            variant="premium"
            size="lg"
            onClick={scrollToDiscovery}
            showArrow
          >
            Zarezerwuj Sesję
          </CTAButton>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-deep-space via-twilight-indigo to-neural-blue overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zenith-gold rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neural-blue rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-twilight-indigo rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Premium Badge */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-zenith-gold via-twilight-indigo to-neural-blue rounded-full blur opacity-50 animate-pulse"></div>
                <Badge className="relative bg-gradient-to-r from-zenith-gold to-orange-500 text-white border-0 text-base px-6 py-3 shadow-xl">
                  <Crown className="inline h-5 w-5 mr-2" />
                  Premium System Upgrade
                </Badge>
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                Life OS:{" "}
                <span className="bg-gradient-to-r from-zenith-gold via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  System Upgrade
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-white/90 leading-tight">
                8 tygodni transformacji dla liderów, którzy osiągnęli
                wszystko... i właśnie dlatego czują się pusto.
              </h2>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Card className="border border-zenith-gold/30 bg-white/10 backdrop-blur-sm hover:border-zenith-gold/50 transition-colors">
                <CardContent className="px-6 py-3 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-zenith-gold" />
                  <span className="text-sm font-semibold text-white">
                    8 tygodni
                  </span>
                </CardContent>
              </Card>
              <Card className="border border-zenith-gold/30 bg-white/10 backdrop-blur-sm hover:border-zenith-gold/50 transition-colors">
                <CardContent className="px-6 py-3 flex items-center gap-2">
                  <Users className="h-4 w-4 text-zenith-gold" />
                  <span className="text-sm font-semibold text-white">
                    Elite Cohort
                  </span>
                </CardContent>
              </Card>
              <Card className="border border-zenith-gold/30 bg-white/10 backdrop-blur-sm hover:border-zenith-gold/50 transition-colors">
                <CardContent className="px-6 py-3 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-zenith-gold" />
                  <span className="text-sm font-semibold text-white">
                    Life Transformation
                  </span>
                </CardContent>
              </Card>
            </div>

            {/* CTA Button with Glow */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-zenith-gold via-orange-500 to-zenith-gold rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                <CTAButton
                  variant="premium"
                  size="xl"
                  className="relative shadow-2xl hover:shadow-3xl"
                  aria-label="Zarezerwuj Sesję Discovery - przejdź do sekcji rejestracji"
                  showArrow
                  onClick={scrollToDiscovery}
                >
                  Zarezerwuj Sesję Discovery
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Recognition */}
      <section className="relative py-20 bg-transformation-light overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-transformation-grid opacity-20"></div>

        {/* Static gradient orb */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-neural-blue/10 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur opacity-30"></div>
                <Badge className="relative bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 text-sm px-6 py-2 shadow-lg uppercase tracking-wide">
                  <AlertTriangle className="inline h-4 w-4 mr-2" />
                  Prawdziwy problem
                </Badge>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal text-center">
              Rozpoznajesz ten stan?
            </h2>

            {/* Success Description Card */}
            <Card className="mb-8 border-2 border-neural-blue/40 bg-gradient-to-br from-neural-blue/5 to-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-4 text-left">
                    <p className="text-xl text-deep-charcoal/90 leading-relaxed">
                      Osiągnąłeś sukces, którego większość ludzi nie zrozumie.
                    </p>
                    <p className="text-xl text-deep-charcoal/90 leading-relaxed">
                      Twoje cele są zrealizowane. Twoje firmy działają. Twoje
                      życie wygląda perfekcyjnie z zewnątrz.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pustka Alert Card */}
            <Card className="mb-12 border-2 border-red-400/50 bg-gradient-to-br from-red-50 to-orange-50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-2xl font-bold text-deep-charcoal">
                      Ale w środku?{" "}
                      <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        Pustka.
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6 mb-16">
              <p className="text-xl text-deep-charcoal/90 leading-relaxed font-semibold">
                I co gorsza - nikt nie rozumie tego problemu:
              </p>

              {/* Problem Cards - iOS Style */}
              <div className="space-y-4">
                {[
                  {
                    text: "Mówisz o tym znajomym",
                    answer: '"Musisz więcej odpoczywać"',
                  },
                  {
                    text: "Próbujesz z coachingiem",
                    answer: '"Ustaw nowe cele SMART"',
                  },
                  {
                    text: "Idziesz na terapię",
                    answer: '"Opowiedz mi o swoich rodzicach"',
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="border-2 border-gray-300/50 bg-gradient-to-br from-gray-50 to-gray-100/50 hover:border-gray-400/70 transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center shrink-0">
                          <AlertCircle className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-lg text-deep-charcoal/90">
                            <span className="font-semibold">{item.text}</span> →{" "}
                            <span className="italic text-gray-600">
                              {item.answer}
                            </span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Problem Root Cause Card */}
            <Card className="mb-12 border-2 border-red-400/50 bg-gradient-to-r from-red-500/10 to-orange-500/10">
              <CardContent className="p-8 text-center">
                <p className="text-2xl font-bold text-deep-charcoal mb-4">
                  Żadne z tych rozwiązań nie trafia w sedno.
                </p>
                <p className="text-xl text-deep-charcoal/90 mb-6">
                  Bo Twój problem nie leży w strategii, celach ani przeszłości.
                </p>
                <div className="relative inline-block">
                  <div className="absolute -inset-2 bg-gradient-to-r from-zenith-gold to-orange-500 rounded-xl blur opacity-30"></div>
                  <div className="relative bg-gradient-to-r from-zenith-gold/20 to-orange-500/20 px-8 py-4 rounded-xl border-2 border-zenith-gold/50">
                    <p className="text-2xl font-bold text-deep-charcoal">
                      Twój problem jest na poziomie tożsamości.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Upgrade Metaphor Card */}
            <Card className="mb-16 border-2 border-neural-blue/50 bg-gradient-to-br from-neural-blue/5 to-twilight-indigo/5 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-4 text-left">
                    <p className="text-xl text-deep-charcoal/90 leading-relaxed">
                      Jesteś jak komputer z Windows 98, próbujący obsłużyć
                      dzisiejsze oprogramowanie. System jest przestarzały,
                      skonfliktowany, przeciążony.
                    </p>
                    <p className="text-xl text-deep-charcoal/90 leading-relaxed">
                      Nie potrzebujesz więcej aplikacji (kolejnych "tricków").
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-neural-blue/10 to-twilight-indigo/10 rounded-xl p-6 border border-neural-blue/30">
                  <p className="text-2xl font-bold text-twilight-indigo text-center">
                    Potrzebujesz upgrade'u całego Systemu Operacyjnego.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Before/After Slider */}
            <BeforeAfterSlider />
          </div>
        </div>
      </section>

      {/* Why Traditional Solutions Failed */}
      <section className="relative py-20 bg-luminous-white overflow-hidden">
        {/* Static gradient orbs */}
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-twilight-indigo/10 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-neural-blue to-twilight-indigo rounded-full blur opacity-30"></div>
                <Badge className="relative bg-gradient-to-r from-neural-blue to-twilight-indigo text-white border-0 text-sm px-6 py-2 shadow-lg uppercase tracking-wide">
                  <Target className="inline h-4 w-4 mr-2" />
                  Dlaczego inne nie działają
                </Badge>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal text-center">
              Dlaczego to, co próbowałeś, nie zadziałało?
            </h2>

            <div className="space-y-6 mb-12">
              {/* Standard Coaching Card */}
              <Card className="border-2 border-red-300/50 bg-gradient-to-br from-red-50 to-red-100/50 hover:border-red-400/70 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shrink-0">
                      <X className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-700 flex-1">
                      Standard Coaching / Mentoring
                    </h3>
                  </div>
                  <p className="text-deep-charcoal/90 mb-4 pl-14">
                    Daje Ci nowe strategie. Więcej narzędzi. Kolejne frameworki.
                  </p>
                  <div className="bg-white/60 rounded-lg p-4 pl-14 mb-4">
                    <p className="text-deep-charcoal font-bold mb-2">
                      Problem:
                    </p>
                    <p className="text-deep-charcoal/90">
                      Instalujesz nowe aplikacje na starym, skonfliktowanym
                      systemie. Efekt jest chwilowy, a potem wracasz do starych
                      wzorców.
                    </p>
                  </div>
                  <p className="text-deep-charcoal/80 italic pl-14">
                    To jak dokładanie krzeseł na Titanicu.
                  </p>
                </CardContent>
              </Card>

              {/* Therapy Card */}
              <Card className="border-2 border-orange-300/50 bg-gradient-to-br from-orange-50 to-orange-100/50 hover:border-orange-400/70 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shrink-0">
                      <X className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-orange-800 flex-1">
                      Terapia
                    </h3>
                  </div>
                  <p className="text-deep-charcoal/90 mb-4 pl-14">
                    Pomaga zrozumieć przeszłość. Analizować trauma. Rozumieć,
                    skąd się to bierze.
                  </p>
                  <div className="bg-white/60 rounded-lg p-4 pl-14 mb-4">
                    <p className="text-deep-charcoal font-bold mb-2">
                      Problem:
                    </p>
                    <p className="text-deep-charcoal/90">
                      Rozumiesz już SKĄD. Ale nadal nie wiesz JAK podjąć odważną
                      decyzję w poniedziałek o 9 rano, kiedy na szali jest 2M
                      PLN i przyszłość firmy.
                    </p>
                  </div>
                  <p className="text-deep-charcoal/80 italic pl-14">
                    Insight bez transformacji to tylko ciekawa historyjka.
                  </p>
                </CardContent>
              </Card>

              {/* Online Courses Card */}
              <Card className="border-2 border-yellow-300/50 bg-gradient-to-br from-yellow-50 to-yellow-100/50 hover:border-yellow-400/70 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shrink-0">
                      <X className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-800 flex-1">
                      Kursy Online / Książki
                    </h3>
                  </div>
                  <p className="text-deep-charcoal/90 mb-4 pl-14">
                    Dostarczają wiedzę. Ramowe modele. Inspirację.
                  </p>
                  <div className="bg-white/60 rounded-lg p-4 pl-14 mb-4">
                    <p className="text-deep-charcoal font-bold mb-2">
                      Problem:
                    </p>
                    <p className="text-deep-charcoal/90">
                      Prawdziwa transformacja nie zachodzi na poziomie
                      intelektualnym. Możesz przeczytać 100 książek o pływaniu i
                      nadal utoniesz, gdy wrzucą Cię do oceanu.
                    </p>
                  </div>
                  <p className="text-deep-charcoal/80 italic pl-14">
                    Plus: kupujesz kolejny kurs, bo poprzedni "nie zadziałał"
                    (spoiler: problem nie był w kursie).
                  </p>
                </CardContent>
              </Card>

              {/* Spirituality Card */}
              <Card className="border-2 border-purple-300/50 bg-gradient-to-br from-purple-50 to-purple-100/50 hover:border-purple-400/70 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0">
                      <X className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-800 flex-1">
                      Duchowość / Medytacja
                    </h3>
                  </div>
                  <p className="text-deep-charcoal/90 mb-4 pl-14">
                    Daje spokój. Perspektywę. Kontakt z czymś większym.
                  </p>
                  <div className="bg-white/60 rounded-lg p-4 pl-14">
                    <p className="text-deep-charcoal font-bold mb-2">
                      Problem:
                    </p>
                    <p className="text-deep-charcoal/90">
                      Często oderwan od rzeczywistości biznesowej. Medutujesz,
                      czujesz zen... a potem wracasz do biura i znowu jesteś tym
                      samym człowiekiem podejmującym te same decyzje z tego
                      samego strachu.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-deep-charcoal mb-4">
                Prawdziwy problem: Konflikt systemowy
              </h3>
              <p className="text-xl text-deep-charcoal/90 mb-6">
                Nie masz problemu z wiedzą, strategią ani nawet ze zdrowiem
                psychicznym.
              </p>
              <p className="text-2xl font-bold text-zenith-gold mb-6">
                Masz konflikt na poziomie tożsamości.
              </p>
              <div className="space-y-3 text-lg text-deep-charcoal/90 mb-6">
                <p>
                  Część Ciebie chce budować imperium → Część Ciebie chce spokoju
                </p>
                <p>
                  Część Ciebie potrzebuje kontroli → Część Ciebie wie, że
                  kontrola to iluzja
                </p>
                <p>Część Ciebie goni sukces → Część Ciebie pyta "po co?"</p>
              </div>
              <p className="text-xl text-deep-charcoal/90 mb-4">
                Te części walczą ze sobą każdego dnia.
              </p>
              <p className="text-xl text-deep-charcoal/90">
                A Ty stoisz pośrodku tego konfliktu, zużywając gigawaty energii
                na wewnętrzną wojnę.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Life OS System Upgrade */}
      <section className="relative py-20 bg-gradient-to-b from-deep-space via-twilight-indigo to-neural-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="text-center mb-8">
              <span className="inline-block px-6 py-2 bg-zenith-gold/20 rounded-full border-2 border-zenith-gold/40 text-zenith-gold font-semibold text-sm uppercase tracking-wide">
                Metodologia
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
              Life OS: System Upgrade
            </h2>

            <p className="text-2xl text-center mb-4 text-white/90 font-bold">
              Nie coaching. Nie terapia. Transformacja na poziomie tożsamości.
            </p>

            <div className="text-xl text-center mb-12 text-white/90/90 space-y-4">
              <p>To 8 tygodni głębokiej pracy dla liderów, którzy:</p>
              <ul className="space-y-3 text-left max-w-3xl mx-auto">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 text-zenith-gold flex-shrink-0 mt-1" />
                  <span>Osiągnęli sukces, ale czują, że to nie to</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 text-zenith-gold flex-shrink-0 mt-1" />
                  <span>Są gotowi na brutalną szczerość z samym sobą</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 text-zenith-gold flex-shrink-0 mt-1" />
                  <span>
                    Rozumieją, że prawdziwa zmiana wymaga czasu i cierpienia
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 text-zenith-gold flex-shrink-0 mt-1" />
                  <span>Myślą systemowo i filozoficznie</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 text-zenith-gold flex-shrink-0 mt-1" />
                  <span>
                    Nie chcą kolejnych "porad", tylko fundamentalną przebudowę
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-16">
              <p className="text-2xl text-zenith-gold font-bold mb-4 text-center">
                Co to znaczy w praktyce?
              </p>
              <p className="text-lg text-white/90/90 mb-6">
                To nie są przyjemne sesje, gdzie klepię Cię po plecach i mówię,
                jak jesteś świetny.
              </p>
              <p className="text-lg text-white/90/90 mb-4">
                W zależności od tego, czego potrzebujesz:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-900/20 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-zenith-gold mb-3">
                    Albo dostaniesz "terapię szokową":
                  </h4>
                  <ul className="space-y-2 text-white/90/90">
                    <li>
                      • Bezpośrednią konfrontację z historiami, które sobie
                      opowiadasz
                    </li>
                    <li>
                      • Wycięcie skrzydeł, które Cię nie niosą, tylko obciążają
                    </li>
                    <li>• Filozoficzną wojnę z Twoim ego</li>
                    <li>• Kontrolowane cierpienie, które tworzy przełom</li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-zenith-gold mb-3">
                    Albo dostaniesz "przewodnictwo przez transcendencję":
                  </h4>
                  <ul className="space-y-2 text-white/90/90">
                    <li>• Delikatne prowadzenie przez mapy i terytoria</li>
                    <li>• Pozwolenie na ekspansję i rozwój</li>
                    <li>• Wsparcie w odkrywaniu głębszych warstw siebie</li>
                    <li>• Integrację duchowości z realnością biznesową</li>
                  </ul>
                </div>
              </div>
              <p className="text-xl text-zenith-gold font-bold text-center">
                A najczęściej dostaniesz oba.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* Phase 1: Diagnostyka */}
              <div className="group relative transition-all duration-300 hover:-translate-y-2">
                <Card className="relative overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-zenith-gold/50 hover:shadow-2xl hover:shadow-zenith-gold/20 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-zenith-gold/10 rounded-full blur-3xl"></div>
                  <CardContent className="p-8 relative">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-zenith-gold to-orange-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          FAZA 1: DIAGNOSTYKA SYSTEMU
                        </h3>
                        <p className="text-white/90 text-lg font-medium">
                          Tydzień 1-2
                        </p>
                      </div>
                    </div>
                    <div className="text-white/90/90 text-lg leading-relaxed space-y-4">
                      <p>Tutaj zaczyna się prawdziwa praca.</p>
                      <p className="font-bold text-white">
                        Niektórzy ludzie potrzebują, żeby ktoś przeciął ich
                        więzy.
                      </p>
                      <p className="font-bold text-white">
                        Inni potrzebują pozwolenia na rozwinięcie skrzydeł.
                      </p>
                      <p>
                        Pierwsza faza to głęboka diagnostyka: którego rodzaju
                        transformacji potrzebujesz?
                      </p>
                      <ul className="space-y-2 pl-4">
                        <li>
                          •{" "}
                          <span className="font-bold">
                            Ścieżka Katalizatora:
                          </span>{" "}
                          Dla tych, którzy utknęli w ofiarczych narracjach,
                          potrzebują konfrontacji
                        </li>
                        <li>
                          •{" "}
                          <span className="font-bold">
                            Ścieżka Przewodnika:
                          </span>{" "}
                          Dla tych, którzy są gotowi na ekspansję, potrzebują
                          wsparcia w transcendencji
                        </li>
                        <li>
                          •{" "}
                          <span className="font-bold">Ścieżka Integracji:</span>{" "}
                          Dla większości - potrzeba obu, sekwencyjnie lub
                          równolegle
                        </li>
                      </ul>
                      <p className="italic">
                        To nie jest przyjemna rozmowa. To bezlitosna szczerość.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Phase 2: Dekonstrukcja */}
              <div className="group relative transition-all duration-300 hover:-translate-y-2">
                <Card className="relative overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-zenith-gold/50 hover:shadow-2xl hover:shadow-zenith-gold/20 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-twilight-indigo/10 rounded-full blur-3xl"></div>
                  <CardContent className="p-8 relative">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-twilight-indigo to-neural-blue rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          FAZA 2: DEKONSTRUKCJA I WYZWANIE
                        </h3>
                        <p className="text-white/90 text-lg font-medium">
                          Tydzień 3-4
                        </p>
                      </div>
                    </div>
                    <div className="text-white/90/90 text-lg leading-relaxed space-y-4">
                      <p className="font-bold text-white">
                        Tutaj zaczyna się prawdziwa praca.
                      </p>

                      <div className="bg-red-900/30 p-6 rounded-xl">
                        <p className="font-bold text-zenith-gold mb-3">
                          Jeśli jesteś na Ścieżce Katalizatora:
                        </p>
                        <ul className="space-y-2">
                          <li>
                            • Konfrontuję Twoje historie głową w mur
                            (filozoficznie, nie brutalnie)
                          </li>
                          <li>
                            • Używam Junga, Fausta, Mistrza i Małgorzaty jako
                            luster
                          </li>
                          <li>
                            • Podcinam skrzydła, które nie niosą, tylko
                            obciążają
                          </li>
                          <li>• Kontrolowane cierpienie → przełom</li>
                        </ul>
                      </div>

                      <div className="bg-blue-900/30 p-6 rounded-xl">
                        <p className="font-bold text-zenith-gold mb-3">
                          Jeśli jesteś na Ścieżce Przewodnika:
                        </p>
                        <ul className="space-y-2">
                          <li>
                            • Prowadzę Cię delikatnie przez rozszerzanie
                            świadomości
                          </li>
                          <li>
                            • Wprowadzam koncepcje równoległych rzeczywistości i
                            wyboru osi czasu
                          </li>
                          <li>
                            • Daję pozwolenie na transcendencję (którego sam
                            sobie nie dawałeś)
                          </li>
                          <li>• Medytacja, obecność, kontakt z duszą</li>
                        </ul>
                      </div>

                      <p className="font-bold text-white italic">
                        To nie jest przyjemne. Ale jest konieczne.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Phase 3: Integracja */}
              <div className="group relative transition-all duration-300 hover:-translate-y-2">
                <Card className="relative overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-zenith-gold/50 hover:shadow-2xl hover:shadow-zenith-gold/20 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                  <CardContent className="p-8 relative">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-twilight-indigo rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <GitMerge className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          FAZA 3: INTEGRACJA RDZENIA
                        </h3>
                        <p className="text-white/90 text-lg font-medium">
                          Tydzień 5-6
                        </p>
                      </div>
                    </div>
                    <div className="text-white/90/90 text-lg leading-relaxed space-y-4">
                      <p>
                        Teraz uczymy Twoje konfliktowe części współpracować.
                      </p>
                      <p className="font-bold text-zenith-gold text-xl">
                        Bezwzględny CEO + Wrażliwy wizjoner = nie wrogowie,
                        tylko zespół
                      </p>

                      <div className="bg-purple-900/30 p-6 rounded-xl">
                        <p className="font-bold text-white mb-3">
                          Wykorzystujemy framework Równoległych Rzeczywistości:
                        </p>
                        <p className="mb-3">
                          Wszystkie wersje Ciebie istnieją jednocześnie. Ta,
                          która cierpi. Ta, która triumfuje. Ta, która spoczywa
                          na plaży.
                        </p>
                        <p className="italic">
                          Pytanie nie brzmi "jak uciec od cierpienia" - pytanie
                          brzmi "którą rzeczywistość wybierasz jako swoją?"
                        </p>
                        <p className="font-bold text-zenith-gold mt-3">
                          Wolna wola to wybór osi czasu.
                        </p>
                      </div>

                      <p className="font-bold text-white">
                        Konkretne efekty na tym etapie:
                      </p>
                      <ul className="space-y-2 pl-4">
                        <li>• Decyzje przestają być wojną wewnętrzną</li>
                        <li>• Działasz z miejsca spójności (nie dyscypliny)</li>
                        <li>
                          • Wewnętrzny krytyk zostaje zintegrowany (nie
                          uciszony)
                        </li>
                        <li>
                          • Energia, która szła na konflikt, idzie teraz na
                          tworzenie
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Phase 4: Nowy Standard */}
              <Card className="relative overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-zenith-gold/50 hover:shadow-2xl transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        FAZA 4: NOWY STANDARD DZIAŁANIA
                      </h3>
                      <p className="text-white/90">Tydzień 7-8</p>
                    </div>
                  </div>
                  <div className="text-white/90/90 text-lg leading-relaxed space-y-4">
                    <p>Nowy system operacyjny staje się Twoją drugą naturą.</p>

                    <div className="bg-gradient-to-r from-zenith-gold/20 to-twilight-indigo/20 p-6 rounded-xl">
                      <p className="font-bold text-white mb-3">
                        To nie jest "fake it till you make it."
                      </p>
                      <p className="font-bold text-white mb-3">
                        To nie jest "stosuj tę technikę codziennie."
                      </p>
                      <p className="text-zenith-gold text-xl font-bold">
                        To jest fundamentalna zmiana tego, kim jesteś jako lider
                        i człowiek.
                      </p>
                    </div>

                    <p className="font-bold text-white">Działasz teraz z:</p>
                    <ul className="space-y-2 pl-4">
                      <li>
                        • Wewnętrznej spójności (nie wymuszonej dyscypliny)
                      </li>
                      <li>• Autentycznej mocy (nie kompensacyjnej kontroli)</li>
                      <li>
                        • Intuicji zintegrowanej z analizą (nie paraliżu
                        decyzyjnego)
                      </li>
                      <li>• Obecności (nie chronicznego lęku o przyszłość)</li>
                    </ul>

                    <div className="bg-white/10 p-6 rounded-xl mt-4">
                      <p className="font-bold text-zenith-gold mb-3">
                        Co to znaczy w praktyce:
                      </p>
                      <p className="mb-3">
                        Poniedziałek, 9 rano. Decyzja o 2M PLN.
                      </p>
                      <p className="mb-2">
                        <span className="font-bold text-red-400">Przed:</span>{" "}
                        Paraliż. Analiza. Więcej analiz. Lęk. Prokrastynacja.
                        Decyzja z desperacji.
                      </p>
                      <p className="mb-4">
                        <span className="font-bold text-green-400">Po:</span>{" "}
                        Jasność. Połączenie intuicji i danych. Decyzja w 30
                        minut. Spokój niezależnie od wyniku.
                      </p>
                      <p className="text-white font-bold">
                        Bo wiesz, że decyzja nie definiuje Ciebie - Ty
                        definiujesz decyzję.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Phase Timeline Visualization */}
            <div className="mt-20 mb-16">
              <PhaseTimeline />
            </div>

            <div className="text-center mt-16">
              <CTAButton
                variant="premium"
                size="xl"
                className="shadow-2xl hover:shadow-3xl"
                showArrow
                onClick={scrollToDiscovery}
              >
                ZAREZERWUJ SESJĘ DISCOVERY
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Real Effects */}
      <section className="relative py-20 bg-transformation-light overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-transformation-grid opacity-20"></div>

        {/* Static gradient orb */}
        <div className="absolute top-40 left-20 w-96 h-96 bg-neural-blue/10 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="text-center mb-8">
              <span className="transformation-badge-success text-sm uppercase tracking-wide">
                Rezultaty
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal text-center">
              Czego możesz się spodziewać? (Realne efekty)
            </h2>

            <div className="space-y-8 mb-16">
              <Card className="border-l-4 border-twilight-indigo bg-gradient-to-br from-twilight-indigo/5 to-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-twilight-indigo mb-4">
                    1. Koniec z wewnętrzną wojną
                  </h3>
                  <p className="text-deep-charcoal/90 mb-4">
                    Przestajesz zużywać 80% energii na konflikt wewnętrzny.
                    Nagle masz zasób mocy, o którym zapomniałeś.
                  </p>
                  <div className="bg-twilight-indigo/5 p-4 rounded-lg italic text-deep-charcoal/80">
                    Klient: "Nie zdawałem sobie sprawy, ile energii szło na
                    walkę z samym sobą. Teraz czuję się jak po przesiadce z
                    małego fiata do porsche."
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-twilight-indigo bg-gradient-to-br from-twilight-indigo/5 to-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-twilight-indigo mb-4">
                    2. Decyzyjność bez paraliżu
                  </h3>
                  <p className="text-deep-charcoal/90 mb-4">
                    Przestajesz tonąć w analizie. Intuicja + dane = szybkie,
                    pewne decyzje.
                  </p>
                  <div className="bg-twilight-indigo/5 p-4 rounded-lg italic text-deep-charcoal/80">
                    Klientka: "Wcześniej decyzja o zatrudnieniu kosztowała mnie
                    3 tygodnie snu. Teraz wiem w 20 minut. I nie mylę się
                    częściej - wręcz przeciwnie."
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-twilight-indigo bg-gradient-to-br from-twilight-indigo/5 to-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-twilight-indigo mb-4">
                    3. Przywództwo bez wysiłku
                  </h3>
                  <p className="text-deep-charcoal/90">
                    Ludzie podążają za Tobą naturalnie, bo czują Twoją spójność.
                    Nie musisz już udawać pewności - po prostu ją masz.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-twilight-indigo bg-gradient-to-br from-twilight-indigo/5 to-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-twilight-indigo mb-4">
                    4. Prawdziwy spokój (nie tylko przerwa w pracy)
                  </h3>
                  <p className="text-deep-charcoal/90 mb-4">
                    Uczysz się wyłączać tryb "praca". Weekend staje się
                    regeneracją, nie poczuciem winy.
                  </p>
                  <div className="bg-twilight-indigo/5 p-4 rounded-lg italic text-deep-charcoal/80">
                    Klient: "Pierwszy raz od 15 lat spędziłem sobotę z rodziną i
                    nie myślałem o firmie. I firma nie spłonęła."
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-twilight-indigo bg-gradient-to-br from-twilight-indigo/5 to-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-twilight-indigo mb-4">
                    5. Transcendencja ego (ale trzymanie ambicji)
                  </h3>
                  <p className="text-deep-charcoal/90 mb-4">
                    Przestajesz potrzebować sukcesu jako potwierdzenia wartości.
                    Ale nadal go budujesz - tyle że z radości, nie strachu.
                  </p>
                  <p className="text-deep-charcoal font-bold">
                    To nie jest rezygnacja z ambicji. To uwolnienie jej z lęku.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial Carousel */}
            <div className="mt-20">
              <TestimonialCarousel
                testimonials={testimonials}
                title="Co mówią absolwenci programu"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="relative py-20 bg-luminous-white overflow-hidden">
        {/* Static gradient orbs */}
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-zenith-gold/10 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="text-center mb-8">
              <span className="transformation-badge-premium text-sm uppercase tracking-wide">
                Dlaczego Ludwik
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal text-center">
              Dlaczego akurat ja? (Co mam, czego inni nie mają)
            </h2>

            <div className="space-y-8">
              <Card className="border-l-4 border-zenith-gold bg-gradient-to-br from-zenith-gold/5 to-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-zenith-gold">
                    1. Biegłość w obu ścieżkach
                  </h3>
                  <p className="text-deep-charcoal/90 text-lg mb-4">
                    Większość coachów potrafi ALBO konfrontować ALBO wspierać.
                  </p>
                  <p className="text-deep-charcoal font-bold text-xl mb-4">
                    Ja robię oba - i wiem, kiedy którego potrzebujesz.
                  </p>
                  <p className="text-deep-charcoal/80 italic">
                    Anna potrzebowała ostrej konfrontacji. Lucja potrzebowała
                    delikatnego prowadzenia. Obie przeszły transformację. Bo
                    dostały dokładnie to, czego potrzebowały.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-zenith-gold bg-gradient-to-br from-zenith-gold/5 to-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-zenith-gold">
                    2. Filozofia spotyka biznes
                  </h3>
                  <p className="text-deep-charcoal/90 text-lg mb-4">
                    Nie rozdzielam "ducha" od "pieniędzy."
                  </p>
                  <p className="text-deep-charcoal/90 text-lg mb-4">
                    Cytuję Junga podczas rozmowy o ARR. Fausta wplatam w
                    strategię exit-u. Równoległe rzeczywistości stosuję do
                    podejmowania decyzji inwestycyjnych.
                  </p>
                  <p className="text-deep-charcoal font-bold">
                    Bo tak naprawdę działa świat - tylko nikt Ci tego nie mówi.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-zenith-gold bg-gradient-to-br from-zenith-gold/5 to-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-zenith-gold">
                    3. Wschodnia głębia + Zachodnia skuteczność
                  </h3>
                  <p className="text-deep-charcoal/90 text-lg mb-4">
                    Mam coś, czego amerykańscy coachowie nie mają: dostęp do
                    wschodniej tradycji filozoficznej (Jung, Faust, literatura
                    rosyjska to moje DNA).
                  </p>
                  <p className="text-deep-charcoal/90 text-lg mb-4">
                    Ale działam z zachodnią precyzją i fokusem na rezultatach.
                  </p>
                  <p className="text-deep-charcoal font-bold">
                    To połączenie jest rzadkie. I cenne.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-zenith-gold bg-gradient-to-br from-zenith-gold/5 to-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-zenith-gold">
                    4. 25 lat na własnej skórze
                  </h3>
                  <p className="text-deep-charcoal/90 text-lg mb-4">
                    Byłem depresyjnym 16-latkiem uzależnionym od kodeiny,
                    próbującym przeżyć migreny.
                  </p>
                  <p className="text-deep-charcoal/90 text-lg mb-4">
                    Budowałem systemy produktywności jako mechanizm przetrwania.
                  </p>
                  <p className="text-deep-charcoal/90 text-lg mb-4">
                    Osiągnąłem sukces - i czułem pustkę.
                  </p>
                  <p className="text-deep-charcoal/90 text-lg mb-4">
                    Przeszedłem przez to wszystko, zanim zacząłem kogokolwiek
                    prowadzić.
                  </p>
                  <p className="text-deep-charcoal font-bold text-xl">
                    Nie uczę teorii. Opowiadam, co sprawdziło się na własnej
                    skórze.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-zenith-gold bg-gradient-to-br from-zenith-gold/5 to-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-zenith-gold">
                    5. Trojan Horse Method™
                  </h3>
                  <p className="text-deep-charcoal/90 text-lg mb-4">
                    Wchodzę przez "produktywność i skuteczność."
                  </p>
                  <p className="text-deep-charcoal font-bold text-xl mb-4">
                    Dostarczam transformację duszy.
                  </p>
                  <p className="text-deep-charcoal/90 text-lg">
                    Bo gdybym powiedział od razu "zróbmy pracę na tożsamości i
                    transcendencji ego", połowa ludzi, którzy tego potrzebują,
                    uciekłaby.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Commitment */}
      <section className="relative py-20 bg-transformation-light overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-transformation-grid opacity-20"></div>

        {/* Static gradient orb */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-zenith-gold/10 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="text-center mb-8">
              <span className="transformation-badge-premium text-sm uppercase tracking-wide">
                Inwestycja
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal text-center">
              Inwestycja i struktura
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <Card className="bg-gradient-to-br from-twilight-indigo/5 to-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-twilight-indigo">
                    Program:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 text-twilight-indigo flex-shrink-0 mt-1" />
                      <p className="text-deep-charcoal/90">
                        8 tygodni, 8 intensywnych sesji (50 min - 2,5h, w
                        zależności od tego, gdzie jesteśmy w procesie)
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 text-twilight-indigo flex-shrink-0 mt-1" />
                      <p className="text-deep-charcoal/90">
                        Dostęp do mnie między sesjami (Signal/SMS dla nagłych
                        przełomów)
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 text-twilight-indigo flex-shrink-0 mt-1" />
                      <p className="text-deep-charcoal/90">
                        Dożywotni dostęp do społeczności absolwentów (1234 Daily
                        Coaching - codziennie 12:34 na Discordzie Lifehackerów)
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 text-twilight-indigo flex-shrink-0 mt-1" />
                      <p className="text-deep-charcoal/90">
                        Nagrania wszystkich sesji (żebyś mógł wracać do
                        kluczowych momentów)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-twilight-indigo/5 to-zenith-gold/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-twilight-indigo">
                    Inwestycja:
                  </h3>
                  <div className="text-center mb-6">
                    <p className="text-5xl font-bold text-zenith-gold mb-2">
                      16 000 PLN
                    </p>
                    <p className="text-lg text-deep-charcoal/80">
                      (lub 2x 6 500 PLN netto, jeśli masz firmę i wolisz
                      rozłożyć)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-zenith-gold/5 to-twilight-indigo/5">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-deep-charcoal text-center">
                  Dlaczego tyle?
                </h3>

                <p className="text-lg text-deep-charcoal/90 mb-6">
                  Bo to nie jest kurs online. To nie jest godzinna sesja
                  "trzymaj się tam."
                </p>

                <p className="text-xl font-bold text-deep-charcoal mb-4">
                  To jest:
                </p>
                <ul className="space-y-3 text-lg text-deep-charcoal/90 mb-8">
                  <li>
                    •{" "}
                    <span className="font-bold">
                      Moja pełna obecność przez 8 tygodni
                    </span>{" "}
                    (nie "3 pytania email")
                  </li>
                  <li>
                    • <span className="font-bold">Adaptacyjna metodologia</span>{" "}
                    (nie szablon w PDF dla każdego)
                  </li>
                  <li>
                    •{" "}
                    <span className="font-bold">
                      Filozoficzna głębia + biznesowa precyzja
                    </span>{" "}
                    (rzadka kombinacja)
                  </li>
                  <li>
                    •{" "}
                    <span className="font-bold">
                      Bezpieczna przestrzeń do najtrudniejszych konfrontacji
                    </span>{" "}
                    (bezcenne)
                  </li>
                  <li>
                    •{" "}
                    <span className="font-bold">Rzeczywista transformacja</span>{" "}
                    (nie motywacyjny high na 2 tygodnie)
                  </li>
                </ul>

                <div className="bg-white p-6 rounded-xl mb-6">
                  <p className="text-lg text-deep-charcoal/90 mb-4">
                    <span className="font-bold">Plus:</span> Ludzie, którzy
                    płacą więcej, angażują się bardziej. Inwestycja finansowa =
                    inwestycja emocjonalna.
                  </p>
                  <p className="text-lg text-deep-charcoal/90">
                    A transformacja wymaga{" "}
                    <span className="font-bold">full skin in the game</span>.
                  </p>
                </div>

                <div className="bg-twilight-indigo/10 p-6 rounded-xl mb-6">
                  <h4 className="text-xl font-bold mb-4 text-twilight-indigo">
                    Porównanie:
                  </h4>
                  <ul className="space-y-3 text-deep-charcoal/90">
                    <li>
                      • Standardowy coaching: 2-5K PLN/miesiąc = rezultaty
                      tymczasowe
                    </li>
                    <li>
                      • Terapia: 300-500 PLN/sesja × 24 sesje = 7-12K PLN =
                      rozumiesz przeszłość (ale co z przyszłością?)
                    </li>
                    <li>• Kursy online: 2-5K PLN = wiedza bez transformacji</li>
                    <li className="font-bold text-twilight-indigo text-lg">
                      • Life OS: 16K PLN = fundamentalna przemiana tożsamości =
                      bezpośrednie przełożenie na decyzje, leadership, spokój
                    </li>
                  </ul>
                </div>

                <div className="text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 p-8 rounded-2xl">
                  <p className="text-2xl font-bold text-deep-charcoal mb-6">
                    Pytanie nie brzmi "czy to drogie".
                  </p>
                  <p className="text-2xl font-bold text-zenith-gold mb-6">
                    Pytanie brzmi: "ile kosztuje Cię życie bez tej
                    transformacji?"
                  </p>
                  <p className="text-lg text-deep-charcoal/90 mb-4">
                    Ile tracisz rocznie na:
                  </p>
                  <ul className="space-y-2 text-lg text-deep-charcoal/90 mb-6 text-left max-w-2xl mx-auto">
                    <li>• Złe decyzje z paraliżu analitycznego?</li>
                    <li>• Wypalenie i utratę energii?</li>
                    <li>• Niewykorzystany potencjał biznesowy?</li>
                    <li>• Życie w wewnętrznej wojnie?</li>
                  </ul>
                  <p className="text-lg text-deep-charcoal/90 mb-8">
                    Jeśli jesteś liderem z przychodami w firmie 2-10M PLN, koszt
                    braku tej transformacji to setki tysięcy rocznie. Minimum.
                  </p>
                  <p className="text-2xl font-bold text-twilight-indigo">
                    To nie jest wydatek. To inwestycja z najwyższym ROI, jaki
                    kiedykolwiek zrobisz.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Qualification */}
      <section className="relative py-20 bg-luminous-white overflow-hidden">
        {/* Static gradient orbs */}
        <div className="absolute top-40 right-20 w-96 h-96 bg-twilight-indigo/10 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="text-center mb-8">
              <span className="transformation-badge text-sm uppercase tracking-wide">
                Kwalifikacja
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal text-center">
              Czy ten program jest dla Ciebie?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-green-50 border-2 border-green-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-green-700">
                    ✅ TAK, jeśli:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-deep-charcoal font-bold mb-1">
                          Osiągnąłeś sukces, ale czujesz pustkę
                        </p>
                        <p className="text-deep-charcoal/80 text-sm">
                          Realizujesz cele, ale przestały Cię ekscytować. Pytasz
                          "po co?" częściej niż "jak?"
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-deep-charcoal font-bold mb-1">
                          Jesteś gotowy na brutalną szczerość
                        </p>
                        <p className="text-deep-charcoal/80 text-sm">
                          Nie chcesz, żebym klepał Cię po plecach. Chcesz
                          prawdy, nawet jeśli boli.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-deep-charcoal font-bold mb-1">
                          Myślisz systemowo i filozoficznie
                        </p>
                        <p className="text-deep-charcoal/80 text-sm">
                          Interesujesz się Jungiem, lubisz głębokie metafory,
                          widzisz wzorce tam, gdzie inni widzą chaos.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-deep-charcoal font-bold mb-1">
                          Masz poczucie fragmentacji
                        </p>
                        <p className="text-deep-charcoal/80 text-sm">
                          Różne role (lider, partner, wizjoner, rodzic) wydają
                          się wojować ze sobą. Chcesz spójności.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-deep-charcoal font-bold mb-1">
                          Szukasz transformacji, nie technik
                        </p>
                        <p className="text-deep-charcoal/80 text-sm">
                          Masz już 50 narzędzi produktywności. Potrzebujesz
                          czegoś fundamentalnego.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-deep-charcoal font-bold mb-1">
                          Jesteś gotowy na proces (8 tygodni to minimum)
                        </p>
                        <p className="text-deep-charcoal/80 text-sm">
                          To nie jest quick fix. Rozumiesz, że prawdziwa zmiana
                          wymaga czasu.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-deep-charcoal font-bold mb-1">
                          Zarabiasz min. 150K PLN rocznie ("na rękę")
                        </p>
                        <p className="text-deep-charcoal/80 text-sm">
                          Nie z powodu elitaryzmu - ale żebyś mógł sobie
                          pozwolić na inwestycję bez stresu finansowego.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-2 border-red-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-red-700">
                    ❌ NIE, jeśli:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <AlertCircle className="w-6 h-6 mr-3 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-deep-charcoal font-bold mb-1">
                          Szukasz motywacyjnego kopa
                        </p>
                        <p className="text-deep-charcoal/80 text-sm">
                          Nie jestem cheerleaderem. Jeśli chcesz, żebym Ci mówił
                          "jesteś super, dasz radę" - to nie tutaj.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <AlertCircle className="w-6 h-6 mr-3 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-deep-charcoal font-bold mb-1">
                          Potrzebujesz szybkich rozwiązań
                        </p>
                        <p className="text-deep-charcoal/80 text-sm">
                          "5 kroków do sukcesu w 48h" - nie ma czegoś takiego.
                          Jeśli wierzysz, że jest - nie jesteśmy dla siebie.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <AlertCircle className="w-6 h-6 mr-3 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-deep-charcoal font-bold mb-1">
                          Nie jesteś gotowy zakwestionować siebie
                        </p>
                        <p className="text-deep-charcoal/80 text-sm">
                          Jeśli uważasz, że problem jest "tam na zewnątrz"
                          (rynek, ludzie, okoliczności) - nie pomogę Ci. Problem
                          zawsze zaczyna się wewnątrz.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <AlertCircle className="w-6 h-6 mr-3 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-deep-charcoal font-bold mb-1">
                          Przeżywasz ostry kryzys
                        </p>
                        <p className="text-deep-charcoal/80 text-sm">
                          To nie jest terapia kryzysowa. Jeśli jesteś w
                          gwałtownym załamaniu psychicznym - najpierw
                          stabilizacja (psychiatra/terapeuta), potem
                          transformacja (ja).
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <AlertCircle className="w-6 h-6 mr-3 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-deep-charcoal font-bold mb-1">
                          Oczekujesz gotowych rozwiązań
                        </p>
                        <p className="text-deep-charcoal/80 text-sm">
                          Nie dam Ci "3 kroki do szczęścia." Pomogę Ci znaleźć
                          własne odpowiedzi. Jeśli chcesz przepisu - kup kurs
                          online.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <AlertCircle className="w-6 h-6 mr-3 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-deep-charcoal font-bold mb-1">
                          Nie stać Cię na tę inwestycję bez stresu
                        </p>
                        <p className="text-deep-charcoal/80 text-sm">
                          Jeśli 16K PLN to duży wysiłek finansowy - poczekaj.
                          Wolę, żebyś dołączył, gdy będziesz gotowy, niż żebyś
                          się zadłużał i przez to blokował proces.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-transformation-light overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-transformation-grid opacity-20"></div>

        {/* Static gradient orb */}
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neural-blue/10 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="text-center mb-8">
              <span className="transformation-badge text-sm uppercase tracking-wide">
                Najczęstsze pytania
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal text-center">
              FAQ (Prawdziwe pytania, brutalne odpowiedzi)
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Session CTA */}
      <section
        id="discovery-section"
        className="py-20 bg-gradient-to-br from-deep-space via-twilight-indigo to-neural-blue"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
              Następny krok: Sesja Discovery
            </h2>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
              <p className="text-xl text-white/90 mb-6 text-center">
                Zanim zdecydujemy o współpracy, musimy przeprowadzić{" "}
                <span className="text-zenith-gold font-bold">
                  ~30-minutową Sesję Discovery.
                </span>
              </p>

              <p className="text-2xl text-zenith-gold font-bold mb-6 text-center">
                To nie jest rozmowa sprzedażowa.
              </p>

              <p className="text-xl text-white/90 mb-8 text-center">
                To wzajemna ocena, czy mamy ze sobą pracować.
              </p>

              <p className="text-lg text-white/90/90 mb-2 text-center">
                Ja oceniam Ciebie. Ty oceniasz mnie.
              </p>
            </div>

            <Card className="bg-white/5 backdrop-blur-sm border-2 border-white/20 mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-zenith-gold mb-6 text-center">
                  Co się wydarzy w ~30 minut:
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-xl font-bold text-white mb-3">
                      1. Głęboka diagnostyka Twojego systemu
                    </p>
                    <p className="text-white/90/90">
                      Nie będziemy mówić o celach i strategiach. Zejdziemy
                      głębiej: gdzie jest konflikt tożsamości? Jaka narracja Cię
                      blokuje? Która ścieżka transformacji jest Twoja?
                    </p>
                  </div>

                  <div>
                    <p className="text-xl font-bold text-white mb-3">
                      2. Sprawdzenie chemii
                    </p>
                    <p className="text-white/90/90">
                      Ta praca wymaga zaufania. Jeśli nie czujesz, że możesz mi
                      zaufać w najtrudniejszych momentach - nie podejmujemy
                      współpracy. I to ok.
                    </p>
                  </div>

                  <div>
                    <p className="text-xl font-bold text-white mb-3">
                      3. Decyzja obu stron
                    </p>
                    <p className="text-white/90/90">
                      Na końcu sesji oba decydujemy, czy chcemy współpracować.
                      Nie ma presji. Jest uczciwość.
                    </p>
                  </div>
                </div>

                <div className="bg-zenith-gold/20 p-6 rounded-xl mt-8">
                  <p className="text-white font-bold mb-2">Uwaga:</p>
                  <p className="text-white/90/90">
                    Sesja Discovery to nie "darmowa próbka." To rzeczywista
                    praca. Może być intensywna. Wyjdziesz z niej z clarity -
                    niezależnie od tego, czy się zdecydujemy na współpracę.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mb-8">
              <Link to="/discovery">
                <CTAButton
                  variant="premium"
                  size="xl"
                  className="shadow-2xl hover:shadow-3xl mb-6"
                  showArrow
                >
                  Zarezerwuj Sesję Discovery
                </CTAButton>
              </Link>

              <p className="text-white/90/80 italic text-sm mb-2">
                Liczba miejsc w programie jest ściśle ograniczona do 5 osób
                jednocześnie, aby zapewnić maksymalną jakość i moje
                zaangażowanie.
              </p>
              <div className="inline-flex items-center justify-center gap-3 bg-zenith-gold/20 px-6 py-3 rounded-full border-2 border-zenith-gold/40">
                <span className="text-white/90 font-semibold">
                  Obecnie dostępne:
                </span>
                <span className="text-3xl font-bold text-zenith-gold">
                  {spotsAvailable}/5
                </span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <p className="text-lg text-white/90/90 mb-4">
                <span className="font-bold text-zenith-gold">P.S.</span> Jeśli
                dotarłeś aż tutaj i wciąż się wahasz, analizując wszystkie "za"
                i "przeciw" – to jest właśnie jeden ze wzorców, z którym
                będziemy pracować. Twój analityczny umysł próbuje zapewnić sobie
                100% pewności przed podjęciem decyzji. Sesja Discovery to
                bezpieczny sposób, by zbadać tę niepewność bez pełnego
                zobowiązania.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-deep-charcoal text-center">
              Ostatnie słowo
            </h2>

            <div className="space-y-6 text-lg text-deep-charcoal/90 mb-12">
              <p>
                Jeśli dotarłeś do tego miejsca i wciąż się wahasz - to dobrze.
              </p>
              <p>
                Twój analityczny umysł robi to, co potrafi najlepiej: analizuje
                ryzyko, waży opcje, szuka pewności.
              </p>
              <p className="text-2xl font-bold text-twilight-indigo text-center my-8">
                Ale pewności nie ma.
              </p>
              <p>
                Możesz przeanalizować ten program przez kolejne 3 miesiące.
                <br />
                Możesz poczytać więcej o transformacji tożsamości.
                <br />
                Możesz poczekać na "lepszy moment."
              </p>
              <p className="text-2xl font-bold text-zenith-gold text-center my-8">
                Albo możesz po prostu wejść.
              </p>
              <p>Bo tak naprawdę wiesz już odpowiedź.</p>
              <p>
                Wiesz, że coś musi się zmienić.
                <br />
                Wiesz, że dotychczasowe próby nie działają.
                <br />
                Wiesz, że problem jest głębszy niż "brak motywacji" czy "zła
                strategia."
              </p>
            </div>

            <Card className="bg-gradient-to-r from-twilight-indigo/10 to-zenith-gold/10 border-2 border-twilight-indigo mb-12">
              <CardContent className="p-8">
                <p className="text-2xl font-bold text-deep-charcoal mb-6 text-center">
                  Pytanie brzmi: czy jesteś gotowy na prawdę?
                </p>
                <p className="text-xl text-deep-charcoal/90 mb-4 text-center">
                  Nie na przyjemną prawdę.
                  <br />
                  Nie na wygodną prawdę.
                </p>
                <p className="text-2xl font-bold text-twilight-indigo text-center">
                  Na prawdę, która boli - ale wyzwala.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6 text-lg text-deep-charcoal/90 mb-12">
              <p>
                Jeśli tak - to kliknij poniżej i zarezerwuj Sesję Discovery.
              </p>
              <p>
                Zobaczymy, czy pasujemy.
                <br />
                Zobaczymy, czy jesteś gotowy.
                <br />
                Zobaczymy, co możemy razem zbudować.
              </p>
              <p>A jeśli nie teraz - to ok. Wrócisz, kiedy będziesz gotowy.</p>
              <p className="text-center italic text-deep-charcoal/80">
                System będzie tu czekał.
              </p>
            </div>

            <div className="text-center mb-12">
              <p className="text-2xl font-bold text-deep-charcoal mb-8">
                —Ludwik
              </p>
              <CTAButton
                variant="premium"
                size="xl"
                className="shadow-2xl hover:shadow-3xl"
                showArrow
                onClick={scrollToDiscovery}
              >
                Zarezerwuj Sesję Discovery
              </CTAButton>
            </div>

            <div className="space-y-6 text-lg text-deep-charcoal/90">
              <p>
                <span className="font-bold">P.S.</span> Nie muszę Cię
                przekonywać. Jeśli to jest Twoje, wiesz. Jeśli nie wiesz - nie
                jest (jeszcze). Ufam Twojej intuicji. Zaufaj jej też.
              </p>
              <p>
                <span className="font-bold">P.P.S.</span> Życie jest za krótkie,
                żeby żyć w wewnętrznej wojnie. Nawet jeśli nie wybierzesz Life
                OS - znajdź kogoś/coś, co pomoże Ci to rozwiązać. Bo sukces bez
                spokoju to nie jest sukces. To wysokopłatne więzienie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// FAQ Accordion Item Component
const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition-all duration-300"
      onClick={() => setIsOpen(!isOpen)}
    >
      <CardContent className="p-8">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-deep-charcoal pr-8">
            {question}
          </h3>
          <ChevronDown
            className={`w-6 h-6 text-twilight-indigo flex-shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {isOpen && (
          <div className="mt-4 pt-4 border-t border-twilight-indigo/20 animate-fade-in">
            <p className="text-deep-charcoal/90 leading-relaxed">{answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Phase Timeline Component
const PhaseTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      number: 1,
      title: "DIAGNOSTYKA",
      subtitle: "Tydzień 1-2",
      color: "zenith-gold",
      icon: Brain,
    },
    {
      number: 2,
      title: "DEKONSTRUKCJA",
      subtitle: "Tydzień 3-4",
      color: "twilight-indigo",
      icon: Zap,
    },
    {
      number: 3,
      title: "INTEGRACJA",
      subtitle: "Tydzień 5-6",
      color: "twilight-indigo",
      icon: GitMerge,
    },
    {
      number: 4,
      title: "NOWY STANDARD",
      subtitle: "Tydzień 7-8",
      color: "neural-blue",
      icon: Crown,
    },
  ];

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-0 right-0 top-16 h-1 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-zenith-gold via-twilight-indigo to-neural-blue transition-all duration-1000"
          style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
        />
      </div>

      {/* Phase Nodes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          const isActive = index === activePhase;
          const isPast = index < activePhase;

          return (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => setActivePhase(index)}
              onMouseEnter={() => setActivePhase(index)}
            >
              {/* Node Circle */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                  isActive
                    ? "bg-zenith-gold scale-125 shadow-2xl ring-4 ring-white/30"
                    : isPast
                      ? "bg-twilight-indigo/70"
                      : "bg-white/10"
                }`}
              >
                <Icon
                  className={`w-8 h-8 transition-all duration-300 ${
                    isActive || isPast ? "text-white" : "text-white/50"
                  }`}
                />
              </div>

              {/* Phase Info */}
              <div className="text-center">
                <div
                  className={`text-xs font-semibold mb-1 transition-all duration-300 ${
                    isActive ? "text-zenith-gold" : "text-white/90/70"
                  }`}
                >
                  {phase.subtitle}
                </div>
                <div
                  className={`text-sm font-bold transition-all duration-300 ${
                    isActive ? "text-white text-base" : "text-white/90"
                  }`}
                >
                  {phase.number}. {phase.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Indicator */}
      <div className="text-center mt-8">
        <div className="inline-flex gap-2">
          {phases.map((_, index) => (
            <button
              key={index}
              onClick={() => setActivePhase(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activePhase
                  ? "bg-zenith-gold w-8"
                  : index < activePhase
                    ? "bg-white/50"
                    : "bg-white/20"
              }`}
              aria-label={`Go to phase ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Metaphorical Transformation Slider Component
const MetaphoricalTransformationSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleEnd);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-deep-charcoal mb-4">
          Wewnętrzna Transformacja
        </h3>
        <p className="text-lg text-deep-charcoal/70">
          Przesuń suwak, aby zobaczyć różnicę
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none ring-2 ring-twilight-indigo/40"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        {/* Before State (Fragmented System) */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-gray-900 flex items-center justify-center p-8">
          <div className="text-center space-y-6">
            <div className="text-6xl mb-4">💔</div>
            <h4 className="text-3xl font-bold text-white mb-4">
              System Skonfliktowany
            </h4>
            <div className="space-y-3 text-left max-w-md mx-auto">
              <div className="flex items-start gap-3 text-red-300">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Paraliż decyzyjny</span>
              </div>
              <div className="flex items-start gap-3 text-red-300">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Wewnętrzna wojna</span>
              </div>
              <div className="flex items-start gap-3 text-red-300">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Chroniczne zmęczenie</span>
              </div>
              <div className="flex items-start gap-3 text-red-300">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Pustka mimo sukcesu</span>
              </div>
            </div>
          </div>
        </div>

        {/* After State (Integrated System) */}
        <div
          className="absolute inset-0 transition-all duration-150 ease-out bg-gradient-to-br from-neural-blue to-twilight-indigo flex items-center justify-center p-8"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <div className="text-center space-y-6">
            <div className="text-6xl mb-4">✨</div>
            <h4 className="text-3xl font-bold text-white mb-4">
              System Zintegrowany
            </h4>
            <div className="space-y-3 text-left max-w-md mx-auto">
              <div className="flex items-start gap-3 text-zenith-gold">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-white">Jasność i pewność</span>
              </div>
              <div className="flex items-start gap-3 text-zenith-gold">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-white">Wewnętrzna spójność</span>
              </div>
              <div className="flex items-start gap-3 text-zenith-gold">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-white">Naturalny przepływ energii</span>
              </div>
              <div className="flex items-start gap-3 text-zenith-gold">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-white">Sukces z sensem</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-zenith-gold transition-all duration-150 ease-out"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-zenith-gold shadow-2xl ring-4 ring-white/80 hover:scale-110 transition-transform duration-200">
              <div className="flex gap-1">
                <div className="w-0.5 h-6 bg-white"></div>
                <div className="w-0.5 h-6 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-4 text-sm font-semibold">
        <span className="text-red-600">Przed: Windows 98</span>
        <span className="text-twilight-indigo">Po: Life OS</span>
      </div>
    </div>
  );
};

// Exit Intent Modal Component
const ExitIntentModal = ({
  onClose,
  onCTA,
}: {
  onClose: () => void;
  onCTA: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative max-w-2xl mx-4 bg-gradient-to-br from-deep-space via-twilight-indigo to-neural-blue rounded-2xl shadow-2xl p-8 md:p-12 animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/90 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="text-6xl mb-6">⚠️</div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Poczekaj - jeszcze jedno
          </h3>
          <p className="text-xl text-white/90 mb-6">
            Rozumiem wahanie. To normalne przy tak głębokiej transformacji.
          </p>
          <p className="text-lg text-white/90/90 mb-8">
            Ale zanim wyjdziesz:{" "}
            <strong className="text-zenith-gold">
              czy to jest analiza, czy ucieczka?
            </strong>
          </p>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8 text-left">
            <p className="text-white font-bold mb-3">
              3 pytania, które warto sobie zadać:
            </p>
            <ul className="space-y-3 text-white/90">
              <li>
                1. Czy odkładanie tej decyzji zmieni cokolwiek w Twojej
                sytuacji?
              </li>
              <li>
                2. Ile razy już "poczekałeś na lepszy moment" z ważnymi
                decyzjami?
              </li>
              <li>
                3. Czy za rok będziesz zadowolony, że dziś nic nie zrobiłeś?
              </li>
            </ul>
          </div>

          <p className="text-lg text-white/90 mb-8">
            Sesja Discovery to{" "}
            <span className="text-zenith-gold font-bold">
              zero zobowiązania
            </span>
            . To po prostu rozmowa. Sprawdzamy, czy pasujemy.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              variant="premium"
              size="lg"
              onClick={() => {
                onCTA();
                onClose();
              }}
              showArrow
            >
              Ok, zarezerwuję Sesję
            </CTAButton>
            <button
              onClick={onClose}
              className="px-6 py-3 text-white/90 hover:text-white border border-white/30 rounded-lg transition-colors"
            >
              Może innym razem
            </button>
          </div>

          <p className="text-sm text-white/90/70 mt-6 italic">
            "Najlepszy moment to teraz. Drugi najlepszy - jutro. Najgorszy -
            nigdy."
          </p>
        </div>
      </div>
    </div>
  );
};
