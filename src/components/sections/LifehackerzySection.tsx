import {
  CheckCircle2,
  Sparkles,
  Video,
  Target,
  MessageSquare,
  PlayCircle,
  Heart,
  Globe,
  Users,
  Zap,
  Shield,
} from "lucide-react";
import lifehackerzyLogo from "@/assets/lifehackerzy-logotyp.png?w=200;400&format=avif;webp;png&as=picture";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function LifehackerzySection() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(165deg, hsl(270, 50%, 8%) 0%, hsl(265, 45%, 12%) 50%, hsl(260, 40%, 16%) 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(139,92,246,0.12),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(167,139,250,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border mb-6"
              style={{
                background: "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(167,139,250,0.3) 100%)",
                borderColor: "rgba(167,139,250,0.4)",
              }}
            >
              <Sparkles className="w-5 h-5 text-violet-300" />
              <span className="font-semibold text-violet-200 text-sm uppercase tracking-wider">Bonus</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(270, 70%, 80%) 50%, hsl(280, 60%, 70%) 100%)",
                }}
              >
                NIE BĘDZIESZ SAM NA TEJ WYPRAWIE
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-violet-100 mb-4">
              Dołączając do programu automatycznie stajesz się <strong className="text-violet-300">LIFEHACKEREM</strong>
            </p>
            <p className="text-lg text-violet-200/80 max-w-3xl mx-auto">
              To nie jest tylko społeczność. To codzienny system wsparcia, którego nie znajdziesz nigdzie indziej.
            </p>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-12">
            <OptimizedImage
              src={lifehackerzyLogo}
              alt="Lifehackerzy"
              width={500}
              height={150}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="h-20 md:h-28 w-auto"
            />
          </div>

          {/* Section: CO DOKŁADNIE DOSTAJESZ */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white">CO DOKŁADNIE DOSTAJESZ:</h3>
          </div>

          {/* Feature 1: 1234 Daily Coaching */}
          <div
            className="rounded-3xl p-8 md:p-10 mb-8 border relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.1) 100%)",
              borderColor: "rgba(167,139,250,0.3)",
            }}
          >
            <div className="flex items-start gap-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, hsl(270, 70%, 50%) 0%, hsl(280, 60%, 45%) 100%)",
                  boxShadow: "0 8px 24px rgba(139, 92, 246, 0.4)",
                }}
              >
                <Video className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  1234 DAILY COACHING – CODZIENNE SPOTKANIA O&nbsp;12:34. BEZ WYJĄTKÓW.
                </h4>
                <p className="text-xl text-violet-200 mb-6">
                  Tak, dobrze czytasz. <strong className="text-white">Każdego. Pojedynczego. Dnia.</strong>
                </p>
                <p className="text-lg text-violet-200/80 mb-6">
                  Codziennie o&nbsp;12:34 spotykamy się na live. To nie nagrania. To nie automaty. To bezpośredni dostęp do mnie i&nbsp;całej społeczności Lifehackerów.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">Live Q&A + Mastermind w&nbsp;jednym</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">Zadajesz pytanie — dostajesz odpowiedź od kogoś, kto przeszedł przez to samo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">Bez teorii. Bez ogólników. Tylko konkretne wsparcie w&nbsp;konkretnych sytuacjach</span>
                  </li>
                </ul>
                <div
                  className="p-4 rounded-xl mb-4"
                  style={{
                    background: "rgba(139, 92, 246, 0.2)",
                    border: "1px solid rgba(167, 139, 250, 0.3)",
                  }}
                >
                  <p className="text-violet-200 italic">
                    To nie istnieje nigdzie indziej w&nbsp;polskim internecie. Żadna polska społeczność nie oferuje codziennego, bezpośredniego dostępu do mentora i&nbsp;grupy. Pytanie z&nbsp;poniedziałku znajduje odpowiedź we wtorek — od kogoś, kto przeszedł przez to samo.
                  </p>
                </div>
                <p className="text-xl font-bold text-violet-300 mt-2">
                  Dostajesz to w&nbsp;cenie kursu. Na zawsze. Bez subskrypcji.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2: DeepWork.pl */}
          <div
            className="rounded-3xl p-8 md:p-10 mb-8 border relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(139,92,246,0.1) 100%)",
              borderColor: "rgba(167,139,250,0.3)",
            }}
          >
            <div className="flex items-start gap-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, hsl(265, 70%, 50%) 0%, hsl(270, 60%, 45%) 100%)",
                  boxShadow: "0 8px 24px rgba(124, 58, 237, 0.4)",
                }}
              >
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  DEEPWORK.PL – TWÓJ CICHY ODDZIAŁ WSPARCIA
                </h4>
                <p className="text-lg text-violet-200/80 mb-6">
                  Znasz to uczucie, kiedy siedzisz sam przed komputerem i&nbsp;zwyczajnie nie możesz się zabrać do roboty?
                </p>
                <p className="text-lg text-violet-200/80 mb-6">
                  Ta niewidzialna ściana między tobą a&nbsp;zadaniem. Lista rzeczy do zrobienia, która tylko rośnie. Telefon, który wygrywa każdą walkę o&nbsp;twoją uwagę.
                </p>
                <p className="text-lg text-violet-100 font-semibold mb-4">
                  DeepWork.pl to bezpłatna przestrzeń na Discordzie, gdzie:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">Wchodzisz, włączasz kamerkę</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">Pracujesz w&nbsp;ciszy z&nbsp;innymi Lifehackerami</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">Zero rozmów. Zero rozpraszania. Czysta, skoncentrowana energia grupy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">Widok innych osób, które właśnie teraz robią swoje — to jak psychologiczny „dopalacz" do działania</span>
                  </li>
                </ul>
                <p className="text-lg text-violet-200/80 mb-4">
                  To nie jest kolejny kurs produktywności. To wirtualny pokój skupienia, gdzie cisza i&nbsp;obecność innych motywuje cię do odhaczania zadań, które odkładałeś od tygodni.
                </p>
                <div className="flex flex-wrap gap-4 text-violet-300 font-semibold">
                  <span>Efekt? <span className="text-white">Skupienie.</span></span>
                  <span><span className="text-white">Momentum.</span></span>
                  <span><span className="text-white">Mierzalne rezultaty.</span></span>
                </div>
                <p className="text-xl font-bold text-violet-300 mt-4">
                  Przestajesz odkładać. Zaczynasz odhaczać.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3: Forum */}
          <div
            className="rounded-3xl p-8 md:p-10 mb-8 border relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.1) 100%)",
              borderColor: "rgba(167,139,250,0.3)",
            }}
          >
            <div className="flex items-start gap-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, hsl(275, 70%, 50%) 0%, hsl(280, 60%, 45%) 100%)",
                  boxShadow: "0 8px 24px rgba(139, 92, 246, 0.4)",
                }}
              >
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  180+ AKTYWNYCH WĄTKÓW NA FORUM
                </h4>
                <p className="text-xl text-violet-200 mb-4">
                  Każdy problem, przez który przechodzisz — ktoś już przez to przeszedł.
                </p>
                <p className="text-lg text-violet-300 font-semibold mb-6">I&nbsp;zostawił mapę.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">Tysiące wartościowych konwersacji</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">Ludzie z&nbsp;8+ krajów</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">Od freelancerów po CEO-sów spółek kapitałowych</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">Od programistów po chirurgów i&nbsp;lekarzy</span>
                  </li>
                </ul>
                <p className="text-lg text-violet-100 font-semibold mb-4">To miejsce, gdzie:</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">Wymieniasz się doświadczeniami z&nbsp;ludźmi, którzy rozumieją twoje wyzwania</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">Uczysz się od tych, którzy są krok przed tobą</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">Pomagasz tym, którzy są krok za tobą</span>
                  </li>
                </ul>
                <p className="text-xl font-bold text-violet-300">
                  Nie jesteś sam. I&nbsp;nie musisz wymyślać koła na nowo.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4: ProTipy */}
          <div
            className="rounded-3xl p-8 md:p-10 mb-8 border relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(139,92,246,0.1) 100%)",
              borderColor: "rgba(167,139,250,0.3)",
            }}
          >
            <div className="flex items-start gap-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, hsl(268, 70%, 50%) 0%, hsl(275, 60%, 45%) 100%)",
                  boxShadow: "0 8px 24px rgba(124, 58, 237, 0.4)",
                }}
              >
                <PlayCircle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  50+ PROTIPÓW (NAGRAŃ NIEDOSTĘPNYCH NIGDZIE INDZIEJ)
                </h4>
                <p className="text-lg text-violet-200/80 mb-6">
                  Krótkie, konkretne nagrania — esencja lat praktyki skondensowana do 10–20 minut.
                </p>
                <p className="text-lg text-violet-100 font-semibold mb-4">O&nbsp;czym?</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">O&nbsp;mindsecie — jak przeprogramować swoje myślenie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">O&nbsp;komunikacji — od podstaw po mistrzostwo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">O&nbsp;spokoju w&nbsp;głowie — kiedy myśli nie chcą ucichnąć</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">O&nbsp;wychodzeniu z&nbsp;„sytuacji bez wyjścia" — kiedy czujesz, że utknąłeś</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">O&nbsp;produktywności — ale nie tej z&nbsp;poradników, tylko tej, która DZIAŁA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">O&nbsp;odporności psychicznej — jak nie poddawać się, gdy jest ciężko</span>
                  </li>
                </ul>
                <p className="text-lg text-violet-300 italic">
                  To nie są godzinne webinary z&nbsp;laniem wody. To skondensowana wiedza, którą wdrożysz w&nbsp;15 minut i&nbsp;użyjesz tego samego dnia.
                </p>
              </div>
            </div>
          </div>

          {/* KTO TO JEST "LIFEHACKER"? */}
          <div
            className="rounded-3xl p-8 md:p-12 mb-8 border relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(167,139,250,0.2) 0%, rgba(139,92,246,0.15) 100%)",
              borderColor: "rgba(167,139,250,0.4)",
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              KTO TO JEST „LIFEHACKER"?
            </h3>
            <p className="text-lg text-violet-200/80 mb-6 text-center">
              Nazwa może zwieść. To nie jest grupa dla „informatyków" ani „technicznych ludzi".
            </p>
            <p className="text-xl text-violet-300 font-semibold mb-8 text-center">
              Hackujemy mindset, silną wolę i&nbsp;odporność psychiczną — nie kod.
            </p>
            <p className="text-lg text-violet-100 font-semibold mb-4 text-center">Lifehacker to ktoś, kto:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5">
                <Heart className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                <span className="text-violet-100">Wziął odpowiedzialność za swoje życie zamiast czekać na „lepszy moment"</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5">
                <Zap className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                <span className="text-violet-100">Łamie ograniczenia — własne i&nbsp;narzucone przez system</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5">
                <Users className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                <span className="text-violet-100">Wspiera innych bez fałszywej motywacji i&nbsp;pustych haseł</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5">
                <Shield className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                <span className="text-violet-100">Dzieli się porażkami równie otwarcie jak sukcesami, bo wie, że w&nbsp;porażkach jest nauka</span>
              </div>
            </div>
            <div
              className="p-6 rounded-xl mb-6"
              style={{
                background: "rgba(139, 92, 246, 0.25)",
                border: "1px solid rgba(167, 139, 250, 0.4)",
              }}
            >
              <p className="text-violet-200 italic text-center text-lg">
                Jim Rohn powiedział kiedyś: „Jesteś wypadkową pięciu osób, z&nbsp;którymi spędzasz najwięcej czasu."
              </p>
            </div>
            <p className="text-lg text-violet-200/80 text-center">
              Jeśli otaczasz się ludźmi narzekającymi, ograniczającymi się, tkwiącymi w&nbsp;starych schematach — twoje „wewnętrzne oprogramowanie" również będzie cię ciągnąć w&nbsp;dół.
            </p>
            <p className="text-xl font-bold text-violet-300 mt-4 text-center">
              Wśród Lifehackerów ta średnia idzie drastycznie w&nbsp;górę.
            </p>
          </div>

          {/* DLACZEGO TO MA ZNACZENIE? */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              DLACZEGO TO MA ZNACZENIE?
            </h3>
            <div className="text-center mb-8">
              <p className="text-xl text-violet-200 mb-4">
                Bo transformacja w&nbsp;samotności to klaskanie jedną ręką.
              </p>
              <p className="text-lg text-violet-300/80">Da się.</p>
              <p className="text-lg text-violet-300/80">Ale… po co?</p>
            </div>
            <p className="text-lg text-violet-200/80 mb-6 text-center max-w-3xl mx-auto">
              Możesz przejść przez program sam. Wykonać wszystkie lekcje. Wszystkie wyzwania. Walczyć ze swoim wewnętrznym krytykiem w&nbsp;pojedynkę.
            </p>
            <p className="text-xl font-bold text-white text-center mb-6">ALE...</p>
            <div className="space-y-4 max-w-3xl mx-auto mb-8">
              <p className="text-lg text-violet-200">
                Kiedy w&nbsp;tygodniu 3 poczujesz, że to za trudne...
              </p>
              <p className="text-lg text-violet-200">
                Kiedy twój umysł zacznie szeptać „to nie dla ciebie, poddaj się"...
              </p>
              <p className="text-lg text-violet-200">
                Kiedy staniesz przed wyborem: kontynuować czy wrócić do autopilota...
              </p>
            </div>
            <div
              className="p-6 md:p-8 rounded-2xl max-w-3xl mx-auto"
              style={{
                background: "linear-gradient(135deg, rgba(139, 92, 246, 0.25) 0%, rgba(167, 139, 250, 0.2) 100%)",
                border: "2px solid rgba(167, 139, 250, 0.4)",
              }}
            >
              <p className="text-lg text-violet-100 text-center">
                Będziesz miał obok siebie ludzi, którzy powiedzą:
              </p>
              <p className="text-xl md:text-2xl font-bold text-white text-center mt-4 italic">
                „Też przez to przechodziłem. Wiem, jak to jest. Trzymaj się. Jestem tu, jeśli potrzebujesz pomocy."
              </p>
              <p className="text-lg text-violet-300 text-center mt-6">
                I&nbsp;każdego dnia o&nbsp;12:34 będziesz miał bezpośredni dostęp do mnie i&nbsp;całej społeczności.
              </p>
              <p className="text-lg text-violet-200/80 text-center mt-2">
                To nie jest teoria. To praktyczne wsparcie w&nbsp;czasie rzeczywistym.
              </p>
            </div>
          </div>

          {/* Statystyki */}
          <div
            className="rounded-3xl p-8 md:p-10 mb-8 border"
            style={{
              background: "linear-gradient(135deg, rgba(220,38,38,0.15) 0%, rgba(185,28,28,0.1) 100%)",
              borderColor: "rgba(248, 113, 113, 0.3)",
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              TO NIE JEST „NICE TO HAVE". TO JEST RÓŻNICA MIĘDZY UKOŃCZENIEM A&nbsp;PORAŻKĄ.
            </h3>
            <p className="text-lg text-red-200/80 mb-4 text-center">Statystyki branży są brutalne:</p>
            <p className="text-2xl md:text-3xl font-bold text-red-300 text-center mb-4">
              większość ludzi, którzy kupują kursy online, nigdy ich nie kończy.
            </p>
            <p className="text-lg text-red-200/80 mb-2 text-center">Walczą sami. Brakuje im wsparcia w&nbsp;kluczowych momentach. Nikt nie trzyma ich na kursie, gdy chcą się poddać.</p>
            <p className="text-lg text-red-200/80 mb-6 text-center">U&nbsp;Lifehackerów to wygląda zupełnie inaczej.</p>
            <p className="text-lg text-red-200/80 mb-4 text-center">Dlaczego?</p>
            <div
              className="p-6 rounded-xl"
              style={{
                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)",
                border: "2px solid rgba(16, 185, 129, 0.4)",
              }}
            >
              <p className="text-xl font-bold text-white text-center mb-4">Bo nie jesteś sam.</p>
              <div className="space-y-3 max-w-3xl mx-auto">
                <p className="text-lg text-emerald-200">
                  Bo kiedy czujesz, że słabniesz — wchodzisz na DeepWork.pl i&nbsp;widzisz innych, którzy właśnie teraz robią swoje.
                </p>
                <p className="text-lg text-emerald-200">
                  Bo kiedy masz pytanie — zadajesz je na Daily Coaching i&nbsp;dostajesz odpowiedź.
                </p>
                <p className="text-lg text-emerald-200">
                  Bo kiedy potrzebujesz przypomnienia, dlaczego zacząłeś — masz forum pełne ludzi na tej samej ścieżce.
                </p>
              </div>
            </div>
          </div>

          {/* PODSUMOWANIE */}
          <div
            className="rounded-3xl p-8 md:p-12 mb-8 border"
            style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(167,139,250,0.15) 100%)",
              borderColor: "rgba(167,139,250,0.5)",
              boxShadow: "0 25px 60px rgba(139, 92, 246, 0.2)",
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              PODSUMOWANIE: CO DOSTAJESZ JAKO LIFEHACKER
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">1234 Daily Coaching</span>
                  <span className="text-violet-200"> — codzienne live Q&A + Mastermind o&nbsp;12:34</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">DeepWork.pl</span>
                  <span className="text-violet-200"> — przestrzeń cichej, skupionej pracy z&nbsp;innymi Lifehackerami</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">50+ Protipów</span>
                  <span className="text-violet-200"> — ekskluzywne nagrania niedostępne nigdzie poza społecznością</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">180+ aktywnych wątków na forum</span>
                  <span className="text-violet-200"> — tysiące praktycznych odpowiedzi na realne problemy</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">Społeczność z&nbsp;8+ krajów</span>
                  <span className="text-violet-200"> — wsparcie od ludzi, którzy rozumieją twoje wyzwania</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">Dostęp dożywotni</span>
                  <span className="text-violet-200"> — nie płacisz subskrypcji miesięcznych, dostajesz to raz na zawsze</span>
                </div>
              </div>
            </div>
            <div className="text-center pt-4">
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                Nie jesteś sam na tej wyprawie.
              </p>
              <p className="text-xl text-violet-200 mb-2">
                Każdy potrzebuje ludzi, na których może polegać.
              </p>
              <p className="text-2xl font-bold text-violet-300 mb-6">
                Lifehackerzy to twoja załoga.
              </p>
              <p className="text-xl text-violet-100 font-semibold">
                Do zobaczenia na pokładzie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
