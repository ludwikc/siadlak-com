import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Star,
  Users,
  Compass,
  GitMerge,
  Book,
  Crown,
  Shield,
  AlertCircle,
  ArrowRight,
} from "@/lib/icons";

export default function TrainTheTrainer() {
  return (
    <Layout>
      {/* Qualification Bar */}
      <div className="bg-gradient-to-r from-deep-space/5 via-gold/5 to-deep-space/5 border-b-2 border-gold/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-gold" />
              <span className="text-deep-charcoal/80 font-medium">
                Wymaga kwalifikacji
              </span>
            </div>
            <div className="w-1 h-4 bg-gold/30"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-deep-charcoal/80 font-medium">
                8 miejsc rocznie
              </span>
            </div>
            <div className="w-1 h-4 bg-gold/30"></div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-gold" />
              <span className="text-deep-charcoal/80 font-medium">
                Inwestycja premium
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-transformation-light overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-transformation-grid opacity-20"></div>
        {/* Premium static background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-neural-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-growth-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge className="bg-black text-gold border-2 border-gold px-6 py-3 text-base font-bold animate-pulse">
                  8 MIEJSC | 2 POZOSTAŁY
                </Badge>
                <Badge className="border-2 border-white/40 text-white bg-white/10 backdrop-blur-sm px-6 py-3 text-base font-semibold">
                  8-tygodniowa transformacja
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-deep-charcoal">
                You've Mastered Your Craft.
                <br />
                <span className="bg-gradient-to-r from-neural-blue to-growth-gold bg-clip-text text-transparent">
                  Now Master Your Impact.
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-6 text-deep-charcoal/80 leading-relaxed">
                Your expertise changes systems.{" "}
                <strong className="text-neural-blue">
                  Your teaching changes lives.
                </strong>
              </p>

              <p className="text-lg mb-8 text-deep-charcoal/70 leading-relaxed">
                Learn to lead transformation, not just deliver training. 8 weeks
                to become the mentor who shapes minds, inspires change, and
                leaves a lasting legacy in every room you enter.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://link.siadlak.com/discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative inline-block group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-neural-blue via-twilight-indigo to-neural-blue rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <a href="/discovery">
                      <button className="relative bg-gradient-to-r from-neural-blue to-twilight-indigo hover:from-twilight-indigo hover:to-neural-blue text-white px-10 py-5 rounded-xl text-lg font-bold shadow-2xl border border-white/20 flex items-center gap-3 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(124,115,230,0.6)]">
                        Umów Sesję Discovery
                        <ArrowRight size={20} />
                      </button>
                    </a>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-growth-gold rounded-full"></div>
                  <span className="text-deep-charcoal/70">Tylko 8 miejsc</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neural-blue rounded-full"></div>
                  <span className="text-deep-charcoal/70">
                    8 tygodni intensywnej pracy
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/2b4bb1bb-6c2c-4c52-be4b-83bc755ec926.png"
                  alt="Professional training presentation"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="mt-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-neural-blue/20 shadow-lg">
                <div className="text-growth-gold font-semibold mb-2">
                  US Department of Defense
                </div>
                <div className="text-deep-charcoal/90 italic">
                  "Exceptional training methodology that transformed our
                  technical capabilities"
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-deep-charcoal/70">
                  <span className="text-growth-gold text-lg">🏆</span>
                  <span>19 lat doświadczenia</span>
                </div>
                <div className="flex items-center gap-2 text-deep-charcoal/70">
                  <span className="text-growth-gold text-lg">🌍</span>
                  <span>50+ krajów</span>
                </div>
                <div className="flex items-center gap-2 text-deep-charcoal/70">
                  <span className="text-growth-gold text-lg">⭐</span>
                  <span>10,000+ absolwentów</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Criteria Section */}
      <section className="relative py-20 bg-muted/30 overflow-hidden">
        {/* Clean section - let content breathe */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 px-6 py-3 bg-neural-blue/10 text-neural-blue border-2 border-neural-blue/30 font-semibold">
                Kryteria Kwalifikacyjne
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-deep-charcoal">
                Kwalifikujesz się,{" "}
                <span className="text-neural-blue">jeśli...</span>
              </h2>
              <div className="w-24 h-1.5 bg-neural-blue rounded-full mx-auto mb-4"></div>
              <p className="text-lg text-deep-charcoal/70 max-w-2xl mx-auto">
                Ten program jest dla ekspertów gotowych na transformację w
                globalnych trenerów premium
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  text: "Masz minimum 5 lat doświadczenia w branży IT i specjalizujesz się w konkretnej dziedzinie technicznej",
                  icon: Crown,
                },
                {
                  text: "Prowadzisz lub prowadziłeś projekty o wartości minimum $100K i rozumiesz kontekst biznesowy technologii",
                  icon: Shield,
                },
                {
                  text: "Chcesz dzielić się wiedzą na międzynarodowych scenach i zarabiać $5K-15K za dzień szkolenia",
                  icon: Star,
                },
                {
                  text: "Jesteś gotowy na 8 tygodni intensywnej pracy nad sobą i swoimi umiejętnościami prezenterskimi",
                  icon: Crown,
                },
                {
                  text: "Szukasz mentora, który sam prowadzi szkolenia dla Fortune 500, rządów i armii od 19 lat",
                  icon: Shield,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 border-2 border-neural-blue/20 hover:border-neural-blue/50 shadow-lg hover:shadow-2xl hover:shadow-neural-blue/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-white rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-2xl ring-2 ring-neural-blue/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <item.icon className="w-7 h-7 text-neural-blue drop-shadow-lg" />
                      </div>
                    </div>
                    <p className="text-lg text-deep-charcoal leading-relaxed flex-1 pt-2">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium CTA */}
            <div className="mt-12 text-center">
              <div className="inline-block bg-neural-blue/5 rounded-2xl p-8 border-2 border-neural-blue/30">
                <p className="text-lg text-deep-charcoal/80 mb-4">
                  Spełniasz te kryteria?
                </p>
                <p className="text-2xl font-bold text-neural-blue mb-6">
                  Rozpocznij proces aplikacyjny
                </p>
                <a
                  href="https://link.siadlak.com/discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative inline-block group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-neural-blue via-twilight-indigo to-neural-blue rounded-xl blur-md opacity-50 group-hover:opacity-100 transition duration-300"></div>
                    <button className="relative bg-gradient-to-r from-neural-blue to-twilight-indigo text-white px-10 py-4 rounded-xl text-lg font-bold shadow-xl flex items-center gap-3 transition-all hover:scale-105">
                      Umów Sesję Discovery
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentoring Program Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
        {/* Grid pattern for structure */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neural-blue/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-growth-gold/6 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-neural-blue to-twilight-indigo text-white border-0 rounded-full text-sm font-semibold">
                Program Mentoringowy
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-deep-charcoal">
                Train The Trainer: Elite{" "}
                <span className="text-neural-blue">Academy</span>
              </h2>
              <div className="w-24 h-1.5 bg-neural-blue rounded-full mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-neural-blue font-semibold mb-6 max-w-4xl mx-auto">
                From Engineer to Thought Leader: Your 8-Week Journey
              </p>
              <p className="text-lg text-deep-charcoal/70 max-w-4xl mx-auto">
                This is the program I needed 19 years ago. The distilled wisdom
                from training US Army, US Navy, NATO, Norwegian Police, GM, GE,
                ING Bank, and dozens of Fortune 500 organizations—now
                crystallized into 8 transformative weeks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Elite Mindset Shift",
                  icon: Star,
                  gradient: "from-neural-blue to-twilight-indigo",
                  description:
                    "Break free from 'technical mercenary' thinking. Learn to see yourself as a transformation guide, not just a subject matter expert.",
                  value: "$3,000",
                  weeks: "1-2",
                },
                {
                  title: "Emotional Architecture",
                  icon: Users,
                  gradient: "from-neural-blue to-twilight-indigo",
                  description:
                    "Design training that captivates from first to last minute. Replace dry lectures with stories, metaphors, and exercises that spark transformation.",
                  value: "$2,500",
                  weeks: "3-4",
                },
                {
                  title: "Master's Workshop",
                  icon: Book,
                  gradient: "from-twilight-indigo to-neural-blue",
                  description:
                    "Handle difficult participants with grace. Guide groups through complex concepts. Turn challenging moments into breakthrough insights that audiences remember forever.",
                  value: "$2,000",
                  weeks: "5-6",
                },
                {
                  title: "Client Acquisition System",
                  icon: Compass,
                  gradient: "from-neural-blue to-growth-gold",
                  description:
                    "Proven methods to reach corporate and government clients. Build offers they can't refuse. Position yourself as the obvious choice for transformation.",
                  value: "$2,500",
                  weeks: "7",
                },
                {
                  title: "Lifetime Alumni Network",
                  icon: GitMerge,
                  gradient: "from-growth-gold to-neural-blue",
                  description:
                    "Join a closed community of transformation guides—share opportunities, support each other's growth, and build lasting relationships with fellow thought leaders.",
                  value: "$5,000",
                  weeks: "8+",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-10 border-2 border-neural-blue/20 hover:border-neural-blue/50 shadow-lg hover:shadow-2xl hover:shadow-neural-blue/20 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Value Indicator */}
                  <div className="absolute top-6 right-6 bg-neural-blue/10 text-neural-blue px-4 py-2 rounded-full text-xs font-bold border border-neural-blue/30">
                    Wartość: {feature.value}
                  </div>

                  {/* Premium Icon with Glow */}
                  <div className="relative w-20 h-20 mb-8">
                    <div className="absolute inset-0 bg-white rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-full h-full bg-white rounded-3xl flex items-center justify-center shadow-2xl ring-2 ring-neural-blue/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <feature.icon className="w-10 h-10 text-neural-blue drop-shadow-lg" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-deep-charcoal">
                    {feature.title}
                  </h3>
                  <p className="text-base text-deep-charcoal/70 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Completion Timeline */}
                  <div className="flex items-center gap-2 text-sm text-deep-charcoal/60 pt-4 border-t border-neural-blue/10">
                    <AlertCircle className="w-4 h-4 text-neural-blue" />
                    <span>Tydzień {feature.weeks}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Badge className="text-base px-6 py-3 bg-neural-blue/20 text-neural-blue border border-neural-blue/30 rounded-full">
                ⚠️ Ograniczone do 8 miejsc - hard cap. Żadnych wyjątków.
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="relative py-20 bg-muted/30 overflow-hidden">
        {/* Clean section - let content breathe */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 px-6 py-3 bg-neural-blue/10 text-neural-blue border-2 border-neural-blue/30 font-semibold">
                Dla Kogo?
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-deep-charcoal">
                Program dedykowany dla{" "}
                <span className="text-neural-blue">ekspertów IT</span>
              </h2>
              <div className="w-24 h-1.5 bg-neural-blue rounded-full mx-auto mb-4"></div>
              <p className="text-lg text-deep-charcoal/70 max-w-3xl mx-auto">
                Jeśli jesteś doświadczonym profesjonalistą IT i chcesz dzielić
                się swoją wiedzą na globalnej scenie
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  title: "Senior Developer",
                  icon: Book,
                  description:
                    "Specjalizacja w konkretnej technologii, doświadczenie w enterprise projects",
                  gradient: "from-twilight-indigo to-neural-blue",
                },
                {
                  title: "Architekt IT",
                  icon: Crown,
                  description:
                    "Projektowanie systemów, znajomość best practices i design patterns",
                  gradient: "from-deep-space to-neural-blue",
                },
                {
                  title: "IT Manager",
                  icon: Users,
                  description:
                    "Zarządzanie zespołami, budżetami i projektami w środowisku tech",
                  gradient: "from-neural-blue to-twilight-indigo",
                },
                {
                  title: "DevOps / SRE",
                  icon: Shield,
                  description:
                    "Administracja infrastruktury, CI/CD, cloud architecture i monitoring",
                  gradient: "from-neural-blue to-twilight-indigo",
                },
              ].map((persona, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 border-2 border-neural-blue/20 hover:border-neural-blue/50 shadow-lg hover:shadow-2xl hover:shadow-neural-blue/20 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Icon with gradient */}
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="absolute inset-0 bg-white rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-full h-full bg-white rounded-2xl flex items-center justify-center shadow-2xl ring-2 ring-neural-blue/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <persona.icon className="w-8 h-8 text-neural-blue drop-shadow-lg" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-deep-charcoal text-center">
                    {persona.title}
                  </h3>
                  <p className="text-sm text-deep-charcoal/70 text-center leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              ))}
            </div>

            {/* English requirement */}
            <div className="bg-neural-blue/5 rounded-2xl p-6 border-2 border-neural-blue/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-neural-blue rounded-full flex items-center justify-center shadow-lg">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-deep-charcoal mb-2">
                    Wymagana znajomość języka angielskiego
                  </h3>
                  <p className="text-deep-charcoal/80">
                    Materiały szkoleniowe oraz większość klientów premium
                    (Fortune 500, rządy, NATO) wymagają biegłej znajomości
                    języka angielskiego w mowie i piśmie. To niezbędny skill dla
                    międzynarodowych trenerów.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="relative py-20 bg-gradient-to-br from-deep-space via-deep-space to-deep-charcoal overflow-hidden">
        {/* Grid pattern for structure */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neural-blue/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-twilight-indigo/12 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 px-6 py-3 bg-neural-blue/20 backdrop-blur-sm text-white border-2 border-neural-blue/40 font-bold">
                Twój Mentor
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Ludwik C. Siadlak
              </h2>
              <div className="w-24 h-1.5 bg-neural-blue rounded-full mx-auto mb-6"></div>
              <p className="text-2xl text-neural-blue italic font-semibold">
                "From Code to Classroom. From Technician to Travelling Trainer."
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              {/* Left Column - Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative">
                  {/* Glow effect behind image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-3xl blur-2xl opacity-30"></div>
                  <img
                    src="/lovable-uploads/dff62bdb-7bca-402f-ba02-85591cef2f5c.png"
                    alt="Ludwik C. Siadlak - International IT Trainer"
                    className="relative w-full rounded-3xl shadow-2xl border-2 border-neural-blue/30"
                  />
                </div>

                {/* Floating credential badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-2xl p-6 shadow-2xl border-2 border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">19</div>
                    <div className="text-xs text-white/90 font-semibold uppercase tracking-wide">
                      Years
                    </div>
                    <div className="text-xs text-white/90 font-semibold uppercase tracking-wide">
                      Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative bg-gradient-to-br from-deep-space to-deep-space/95 rounded-3xl p-8 border-2 border-neural-blue/30 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Track Record
                  </h3>

                  <div className="space-y-4 mb-8">
                    {[
                      {
                        icon: Star,
                        text: "Międzynarodowy trener technologii z 19-letnim doświadczeniem",
                      },
                      {
                        icon: Shield,
                        text: "Prowadził szkolenia dla US Army, US Navy, NATO i Norwegian Police",
                      },
                      {
                        icon: Users,
                        text: "Wyszkolił ponad 10,000 specjalistów IT w 50+ krajach",
                      },
                      {
                        icon: Book,
                        text: "Autor metodologii Train The Trainer dla branży IT",
                      },
                      {
                        icon: Crown,
                        text: "Współpracował z GM, GE, ING Bank i dziesiątkami organizacji Fortune 500",
                      },
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="relative flex-shrink-0">
                          <div className="w-10 h-10 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <achievement.icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <p className="text-white/95 leading-relaxed pt-1.5">
                          {achievement.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-neural-blue/20 to-twilight-indigo/20 rounded-2xl p-6 border-2 border-neural-blue/50">
                    <p className="text-white italic leading-relaxed">
                      "Ten program to esencja wszystkiego, czego nauczyłem się
                      prowadząc setki szkoleń na całym świecie. Przekazuję Ci
                      dokładnie to, czego sam potrzebowałem 19 lat temu – ale
                      czego nikt mi nie pokazał."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "500+", label: "Międzynarodowych szkoleń" },
                { value: "10K+", label: "Wyszkolonych specjalistów" },
                { value: "50+", label: "Krajów na 5 kontynentach" },
                { value: "50+", label: "Organizacji Fortune 500" },
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-deep-space to-deep-space/90 rounded-2xl p-6 border-2 border-neural-blue/30 text-center group-hover:-translate-y-1 transition-transform duration-300 shadow-xl">
                    <div className="text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/90 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="relative py-20 bg-gradient-to-b from-white via-deep-space/5 to-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute top-10 right-10 w-96 h-96 bg-neural-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-twilight-indigo rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 px-6 py-3 bg-neural-blue/10 text-neural-blue border-2 border-neural-blue/30 font-semibold">
                Inwestycja Premium
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-deep-charcoal">
                Ile kosztuje transformacja{" "}
                <span className="text-neural-blue">
                  od technika do trenera?
                </span>
              </h2>

              <p className="text-xl text-deep-charcoal/70 max-w-3xl mx-auto">
                8 tygodni intensywnej pracy, która zmieni Twoją karierę na
                zawsze
              </p>
            </div>

            {/* Value Stack */}
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-neural-blue/20 overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-deep-space via-neural-blue to-twilight-indigo p-8">
                <h3 className="text-3xl font-bold text-white text-center mb-2">
                  Train The Trainer - Pełny Program
                </h3>
                <p className="text-white/80 text-center">
                  8-tygodniowa transformacja z osobistym mentoringiem
                </p>
              </div>

              <div className="p-8">
                {/* Value breakdown */}
                <div className="space-y-4 mb-8">
                  {[
                    {
                      item: "Mindset Elity - Transformacja myślenia",
                      value: "$3,000",
                    },
                    {
                      item: "Architektura Emocji - Emotional Intelligence Mastery",
                      value: "$2,500",
                    },
                    {
                      item: "Warsztat Mistrza - Technical Training Excellence",
                      value: "$2,000",
                    },
                    {
                      item: "System Pozyskiwania - Client Acquisition Framework",
                      value: "$2,500",
                    },
                    {
                      item: "Bezcenna Sieć - Lifetime Alumni Network",
                      value: "$5,000",
                    },
                    {
                      item: "8 sesji 1-on-1 mentoring (2h każda, $500/h)",
                      value: "$8,000",
                    },
                    {
                      item: "Dostęp do materiałów szkoleniowych (lifetime)",
                      value: "$2,000",
                    },
                    {
                      item: "Certyfikacja International IT Trainer",
                      value: "$3,000",
                    },
                    { item: "3 miesiące follow-up support", value: "$2,000" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-deep-charcoal/10 last:border-0"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-neural-blue" />
                        <span className="text-deep-charcoal/80">
                          {item.item}
                        </span>
                      </div>
                      <span className="text-deep-charcoal/60 font-semibold ml-4">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Total value */}
                <div className="border-t-2 border-neural-blue/30 pt-6 mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg text-deep-charcoal/70">
                      Łączna wartość programu:
                    </span>
                    <span className="text-2xl font-bold text-deep-charcoal/70 line-through">
                      $30,000
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-deep-charcoal">
                      Twoja inwestycja:
                    </span>
                    <div className="text-right">
                      <div className="text-5xl font-bold text-neural-blue">
                        $18,500
                      </div>
                      <div className="text-sm text-deep-charcoal/60 mt-1">
                        Oszczędzasz $11,500
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment options */}
                <div className="bg-neural-blue/5 rounded-2xl p-6 mb-8 border border-neural-blue/20">
                  <h4 className="font-bold text-deep-charcoal mb-4 text-center">
                    Opcje płatności
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-6 border-2 border-neural-blue shadow-lg">
                      <div className="text-center mb-3">
                        <Crown className="w-8 h-8 mx-auto mb-2 text-neural-blue" />
                        <p className="font-bold text-deep-charcoal">
                          Pełna płatność
                        </p>
                      </div>
                      <p className="text-3xl font-bold text-neural-blue text-center mb-2">
                        $18,500
                      </p>
                      <p className="text-xs text-center text-deep-charcoal/60">
                        Jednorazowa płatność
                      </p>
                      <div className="mt-4 pt-4 border-t border-neural-blue/20">
                        <div className="flex items-center gap-2 text-sm text-deep-charcoal/70 mb-2">
                          <CheckCircle className="w-4 h-4 text-neural-blue" />
                          <span>Bonus: dodatkowa sesja mentorska ($500)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-deep-charcoal/70">
                          <CheckCircle className="w-4 h-4 text-neural-blue" />
                          <span>
                            Priorytetowy dostęp do przyszłych programów
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-neural-blue/20">
                      <div className="text-center mb-3">
                        <Shield className="w-8 h-8 mx-auto mb-2 text-deep-charcoal/60" />
                        <p className="font-bold text-deep-charcoal">
                          Plan ratalny
                        </p>
                      </div>
                      <p className="text-3xl font-bold text-deep-charcoal text-center mb-2">
                        $6,500
                      </p>
                      <p className="text-xs text-center text-deep-charcoal/60">
                        × 3 raty miesięczne
                      </p>
                      <div className="mt-4 pt-4 border-t border-deep-charcoal/10">
                        <p className="text-sm text-deep-charcoal/70 mb-2">
                          1. rata: przy zapisie
                        </p>
                        <p className="text-sm text-deep-charcoal/70 mb-2">
                          2. rata: po 30 dniach
                        </p>
                        <p className="text-sm text-deep-charcoal/70">
                          3. rata: po 60 dniach
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="bg-gradient-to-r from-neural-blue/10 via-twilight-indigo/10 to-neural-blue/10 rounded-2xl p-6 border-2 border-neural-blue/30">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-full flex items-center justify-center shadow-lg">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-deep-charcoal mb-3">
                        Gwarancja Premium
                      </h4>
                      <p className="text-deep-charcoal/80 mb-3">
                        Jeśli po pierwszym tygodniu programu uznasz, że to nie
                        dla Ciebie - zwrot 100% wpłaconej kwoty. Zero pytań,
                        zero warunków.
                      </p>
                      <p className="text-sm text-deep-charcoal/70 italic">
                        Dodatkowo: jeśli w ciągu 12 miesięcy od ukończenia
                        programu nie zdobędziesz kontraktu szkoleniowego wartego
                        minimum $10,000, otrzymasz dodatkowe 3 miesiące
                        mentoringu - bezpłatnie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scarcity reminder */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-neural-blue text-white px-8 py-4 rounded-full border-2 border-neural-blue shadow-2xl">
                <AlertCircle className="w-5 h-5" />
                <span className="font-bold">
                  Tylko 2 miejsca pozostały na Q1 2025
                </span>
              </div>
              <p className="text-sm text-deep-charcoal/60 mt-4">
                Następna rekrutacja: Q3 2025 (z możliwością podwyżki ceny)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="relative py-20 bg-gradient-to-br from-deep-space via-neural-blue to-twilight-indigo overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-zenith-gold/10 to-twilight-indigo/10 opacity-50"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-zenith-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-twilight-indigo/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold animate-pulse">
                TYLKO 2 MIEJSCA POZOSTAŁY
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Twoja transformacja zaczyna się{" "}
                <span className="text-white/90">od Sesji Discovery</span>
              </h2>

              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Nie przyjmujemy każdego. To 30-minutowa kwalifikacyjna rozmowa
                strategiczna, podczas której sprawdzimy, czy jesteś odpowiednią
                osobą do tego programu.
              </p>
            </div>

            {/* Application process steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  step: "01",
                  title: "Sesja Discovery",
                  duration: "30 min",
                  description:
                    "Analiza Twojego doświadczenia, celów i readiness do transformacji. Sprawdzamy fit obustronnie.",
                  icon: Compass,
                },
                {
                  step: "02",
                  title: "Decyzja o przyjęciu",
                  duration: "24h",
                  description:
                    "Otrzymujesz decision w ciągu 24h. Jeśli pasujesz - zaproszenie do programu + oferta inwestycyjna.",
                  icon: CheckCircle,
                },
                {
                  step: "03",
                  title: "Onboarding",
                  duration: "7 dni",
                  description:
                    "Po akceptacji: setup materiałów, access do platformy, scheduling pierwszej sesji mentorskiej.",
                  icon: Star,
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-neural-blue/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute -top-4 left-6 w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-deep-space">
                    {step.step}
                  </div>

                  <div className="mt-6 mb-4">
                    <step.icon className="w-8 h-8 text-white mb-3" />
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-white/20">
                      <AlertCircle className="w-3 h-3" />
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  <p className="text-white/90 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Qualification self-check */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Sprawdź, czy się kwalifikujesz{" "}
                <span className="text-white/90">(self-check)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  "5+ lat doświadczenia w IT (development, architecture, DevOps)",
                  "Prowadzisz lub prowadziłeś projekty wartości $100K+",
                  "Chcesz budować personal brand jako trainer/consultant",
                  "Gotowość na 8 tygodni intensywnej pracy (10-15h/tydzień)",
                  "Biegła znajomość angielskiego w mowie i piśmie",
                  "Finansowa readiness: $18,500 inwestycji",
                ].map((criterion, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-white" />
                    <span className="text-white text-sm">{criterion}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/30">
                <div className="flex items-start gap-3">
                  <Crown className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-2">
                      Spełniasz wszystkie kryteria?
                    </p>
                    <p className="text-white/90 text-sm">
                      Excellent. Podczas Sesji Discovery sprawdzimy Twoje
                      portfolio, doświadczenie i cele. Jeśli jesteś fit
                      kulturowy i masz potencjał do transformacji - dostaniesz
                      zaproszenie do programu.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main CTA */}
            <div className="text-center">
              <div className="relative inline-block mb-8">
                <div className="absolute -inset-6 bg-gradient-to-r from-zenith-gold via-twilight-indigo to-zenith-gold rounded-3xl blur-3xl opacity-80"></div>
                <a href="/discovery">
                  <button className="relative bg-gradient-to-r from-zenith-gold to-twilight-indigo hover:from-twilight-indigo hover:to-zenith-gold text-white px-16 py-8 rounded-3xl text-2xl font-bold shadow-2xl border-2 border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_60px_rgba(218,30,174,0.8)] flex items-center gap-4">
                    Umów Sesję Discovery (30 min)
                    <ArrowRight className="w-8 h-8" />
                  </button>
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/90 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>Bez opłat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>Kwalifikacyjna rozmowa online</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>Decyzja w 24h</span>
                </div>
              </div>

              {/* Final urgency note */}
              <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <p className="text-white font-semibold mb-2">
                      Następna rekrutacja: Q3 2025
                    </p>
                    <p className="text-white/90 text-sm">
                      To ostatnie 2 miejsca na Q1 2025. Jeśli przegapisz tę
                      szansę, następna możliwość pojawi się za pół roku -
                      prawdopodobnie z wyższą ceną (historycznie podwyższamy
                      inwestycję o 15-20% rocznie).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
