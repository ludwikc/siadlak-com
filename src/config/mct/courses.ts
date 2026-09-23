import { COURSE_SLUGS } from "./slugs.mjs";
import type { AgendaDay, Course, CourseSlug, Localized, Track } from "./types";

const LEARN = "https://learn.microsoft.com/training/courses";

export const tracks: Record<Track, { title: Localized; blurb: Localized }> = {
  copilot: {
    title: { en: "Copilot & AI", pl: "Copilot i AI" },
    blurb: {
      en: "AI strategy and agents on Microsoft's stack, from the boardroom to a published agent.",
      pl: "Strategia AI i agenci na platformie Microsoft, od sali zarządu do opublikowanego agenta.",
    },
  },
  fabric: {
    title: { en: "Microsoft Fabric", pl: "Microsoft Fabric" },
    blurb: {
      en: "Analytics and data engineering on Microsoft Fabric and Power BI.",
      pl: "Analityka i inżynieria danych w Microsoft Fabric i Power BI.",
    },
  },
  sql: {
    title: { en: "SQL & Azure SQL", pl: "SQL i Azure SQL" },
    blurb: {
      en: "Transact-SQL and Azure SQL, from the first query to production tuning.",
      pl: "Transact-SQL i Azure SQL, od pierwszego zapytania do strojenia na produkcji.",
    },
  },
};

const copilotStudioDay: AgendaDay = {
  title: { en: "Build, publish and govern an agent", pl: "Budowa, publikacja i ład agenta" },
  modules: {
    en: [
      "Topics, entities and variables",
      "Generative answers on your knowledge",
      "Actions and connectors",
      "Publishing to Teams and Microsoft 365 Copilot",
      "Analytics and iteration",
    ],
    pl: [
      "Tematy, encje i zmienne",
      "Odpowiedzi generatywne na Twojej wiedzy",
      "Akcje i konektory",
      "Publikacja w Teams i Microsoft 365 Copilot",
      "Analityka i kolejne iteracje",
    ],
  },
  addOn: {
    en: "Governance checklist: DLP, environments, who can publish what.",
    pl: "Lista kontrolna ładu: DLP, środowiska, kto co może publikować.",
  },
};

export const courses: Record<CourseSlug, Course> = {
  "ab-731": {
    slug: "ab-731",
    track: "copilot",
    codes: ["AB-731T00"],
    official: true,
    condensed: false,
    days: 1,
    level: "beginner",
    title: { en: "Drive AI transformation in your organization", pl: "Transformacja AI w organizacji" },
    tagline: {
      en: "From AI hype to a plan your board can sign off.",
      pl: "Od szumu wokół AI do planu, który zarząd może podpisać.",
    },
    summary: {
      en: "Built on Microsoft's official AB-731 course for business leaders. You see where generative AI creates value in your organization, where it creates risk, and which Microsoft tool fits which job. You leave with scored use cases and a one-page plan, not a slide deck of possibilities.",
      pl: "Oparte na oficjalnym kursie Microsoft AB-731 dla liderów biznesu. Zobaczysz, gdzie generatywna AI daje Twojej organizacji realną wartość, gdzie tworzy ryzyko i które narzędzie Microsoft pasuje do którego zadania. Wychodzisz z ocenionymi przypadkami użycia i planem na jedną stronę, a nie z prezentacją pełną możliwości.",
    },
    audience: {
      en: ["Executives and directors", "Transformation and innovation leads", "IT and business decision-makers"],
      pl: ["Członkowie zarządu i dyrektorzy", "Liderzy transformacji i innowacji", "Decydenci IT i biznesu"],
    },
    notFor: {
      en: "Not for builders who want to configure agents all day — MS-4014 or PL-7008 fit better.",
      pl: "Nie dla osób, które chcą cały dzień konfigurować agentów — lepiej pasuje MS-4014 albo PL-7008.",
    },
    outcomes: {
      en: [
        "Explain where generative AI adds business value and where it does not",
        "Score candidate use cases on value and risk with one shared method",
        "Choose between Microsoft 365 Copilot, Copilot Studio and Microsoft Foundry for a given problem",
        "Set a responsible-AI and governance baseline before the first rollout",
        "Tie AI investment to named business goals and owners",
        "Present a one-page adoption and scaling plan to the board",
      ],
      pl: [
        "Wyjaśnić, gdzie generatywna AI daje wartość biznesową, a gdzie nie",
        "Ocenić kandydatów na przypadki użycia pod kątem wartości i ryzyka jedną wspólną metodą",
        "Dobrać Microsoft 365 Copilot, Copilot Studio albo Microsoft Foundry do konkretnego problemu",
        "Ustalić podstawy odpowiedzialnej AI i ładu (governance) przed pierwszym wdrożeniem",
        "Powiązać wydatki na AI z konkretnymi celami biznesowymi i ich właścicielami",
        "Przedstawić zarządowi plan wdrożenia i skalowania na jednej stronie",
      ],
    },
    agenda: [
      {
        title: { en: "AI strategy for leaders", pl: "Strategia AI dla liderów" },
        modules: {
          en: [
            "Business value of generative AI",
            "Identifying high-impact use cases",
            "Copilot, Copilot Studio and Foundry, positioned honestly",
            "Responsible AI and governance posture",
            "Aligning AI investment to business goals",
            "Adoption and scaling plan",
          ],
          pl: [
            "Wartość biznesowa generatywnej AI",
            "Jak znaleźć przypadki użycia o największym wpływie",
            "Copilot, Copilot Studio i Foundry — uczciwie, bez marketingu",
            "Odpowiedzialna AI i ład (governance)",
            "Inwestycje w AI a cele biznesowe",
            "Plan wdrożenia i skalowania",
          ],
        },
        addOn: {
          en: "Your three use cases scored on a value/risk grid; leave with a one-page plan.",
          pl: "Twoje trzy przypadki użycia ocenione na siatce wartość/ryzyko. Wychodzisz z planem na jedną stronę.",
        },
      },
    ],
    prerequisites: {
      en: [
        "No technical background required",
        "Basic familiarity with Microsoft 365",
        "Three candidate AI use cases from your own organization",
      ],
      pl: [
        "Bez wymagań technicznych",
        "Podstawowa znajomość Microsoft 365",
        "Trzy pomysły na użycie AI z Twojej organizacji",
      ],
    },
    tags: ["ai", "copilot", "strategy", "governance", "leadership"],
    msLearnUrl: `${LEARN}/ab-731t00`,
    examCode: "AB-731",
  },
  "ms-4014": {
    slug: "ms-4014",
    track: "copilot",
    codes: ["MS-4014"],
    official: true,
    condensed: false,
    days: 1,
    level: "beginner",
    title: { en: "Introduction to building AI agents", pl: "Wprowadzenie do budowy agentów AI" },
    tagline: {
      en: "What agents really are, which Microsoft tool to build them with, and one that works by the end of the day.",
      pl: "Czym naprawdę są agenci, w czym ich budować i jeden działający agent pod koniec dnia.",
    },
    summary: {
      en: "Built on Microsoft's official MS-4014 course. We cut through the agent hype: what an agent can and cannot do, how Copilot Studio, Microsoft Foundry and the Microsoft 365 Agents Toolkit differ, and how to plan an agent before anyone builds it. Then you build one on your own content.",
      pl: "Oparte na oficjalnym kursie Microsoft MS-4014. Odcinamy szum wokół agentów: co agent potrafi, a czego nie, czym różnią się Copilot Studio, Microsoft Foundry i Microsoft 365 Agents Toolkit oraz jak zaplanować agenta, zanim ktokolwiek zacznie go budować. Potem budujesz własnego, na swoich treściach.",
    },
    audience: {
      en: ["Business analysts", "IT pros and M365 admins", "Citizen developers"],
      pl: ["Analitycy biznesowi", "Specjaliści IT i administratorzy M365", "Citizen developerzy"],
    },
    notFor: {
      en: "Not for developers who already ship agents in code — the day stays at platform and planning level.",
      pl: "Nie dla programistów, którzy już wdrażają agentów w kodzie — ten dzień zostaje na poziomie platformy i planowania.",
    },
    outcomes: {
      en: [
        "Tell an agent apart from a chatbot, a workflow and a plain Copilot prompt",
        "Pick Copilot Studio, Microsoft Foundry or the M365 Agents Toolkit for a given scenario",
        "Plan an agent: outcomes, data sources, channels, identity and governance",
        "Ground an agent on SharePoint content and test its answers",
        "Spot the requests an agent should refuse or hand over to a human",
      ],
      pl: [
        "Odróżnić agenta od chatbota, przepływu automatyzacji i zwykłego promptu w Copilocie",
        "Wybrać Copilot Studio, Microsoft Foundry albo M365 Agents Toolkit do konkretnego scenariusza",
        "Zaplanować agenta: cele, źródła danych, kanały, tożsamość i ład",
        "Oprzeć agenta na treściach z SharePointa i przetestować jego odpowiedzi",
        "Rozpoznać prośby, które agent powinien odrzucić albo przekazać człowiekowi",
      ],
    },
    agenda: [
      {
        title: { en: "Agents from idea to first build", pl: "Agent od pomysłu do pierwszej wersji" },
        modules: {
          en: [
            "What an AI agent is and is not",
            "Microsoft's agent platform: Copilot Studio, Microsoft Foundry, M365 Agents Toolkit",
            "Choosing the right tool for the job",
            "Planning an agent: outcomes, data sources, channels",
            "Identity and governance from day one",
          ],
          pl: [
            "Czym agent AI jest, a czym nie jest",
            "Platforma agentów Microsoft: Copilot Studio, Microsoft Foundry, M365 Agents Toolkit",
            "Jak dobrać narzędzie do zadania",
            "Planowanie agenta: cele, źródła danych, kanały",
            "Tożsamość i ład od pierwszego dnia",
          ],
        },
        addOn: {
          en: "Build one working Copilot Studio agent grounded on your SharePoint site before 17:00.",
          pl: "Do 17:00 budujesz działającego agenta Copilot Studio opartego na Twojej witrynie SharePoint.",
        },
      },
    ],
    prerequisites: {
      en: [
        "Everyday Microsoft 365 user",
        "Access to a SharePoint site with content you are allowed to use",
        "Copilot Studio trial or licence (I help you set it up)",
      ],
      pl: [
        "Codzienna praca w Microsoft 365",
        "Dostęp do witryny SharePoint z treściami, których możesz użyć",
        "Wersja próbna lub licencja Copilot Studio (pomogę ją uruchomić)",
      ],
    },
    tags: ["ai", "agents", "copilot-studio", "foundry"],
    msLearnUrl: `${LEARN}/ms-4014`,
  },
  "pl-7008": {
    slug: "pl-7008",
    track: "copilot",
    codes: ["PL-7008"],
    official: true,
    condensed: false,
    days: 1,
    level: "intermediate",
    title: { en: "Create agents in Microsoft Copilot Studio", pl: "Agenci w Microsoft Copilot Studio" },
    tagline: {
      en: "Hands-on Copilot Studio: from topics to an agent published in Teams.",
      pl: "Copilot Studio w praktyce: od tematów do agenta opublikowanego w Teams.",
    },
    summary: {
      en: "Built on Microsoft's official PL-7008 course. A full day in Copilot Studio: conversation design, generative answers on your knowledge, actions that call real systems, and publishing to Teams and Microsoft 365 Copilot. You also get the governance side, so what you build can actually go live.",
      pl: "Oparte na oficjalnym kursie Microsoft PL-7008. Cały dzień w Copilot Studio: projektowanie rozmowy, odpowiedzi generatywne na Twojej wiedzy, akcje wywołujące prawdziwe systemy i publikacja w Teams oraz Microsoft 365 Copilot. Dostajesz też stronę ładu i bezpieczeństwa, żeby to, co zbudujesz, mogło naprawdę trafić na produkcję.",
    },
    audience: {
      en: ["Power Platform makers", "M365 and Power Platform admins", "Business analysts"],
      pl: ["Twórcy Power Platform", "Administratorzy M365 i Power Platform", "Analitycy biznesowi"],
    },
    notFor: {
      en: "Not for complete beginners to AI agents — start with MS-4014.",
      pl: "Nie dla osób, które dopiero zaczynają przygodę z agentami AI — zacznij od MS-4014.",
    },
    outcomes: {
      en: [
        "Design topics with entities and variables that handle real conversations",
        "Configure generative answers over your own knowledge sources",
        "Connect actions and connectors to business systems",
        "Publish an agent to Teams and Microsoft 365 Copilot",
        "Read agent analytics and decide what to fix next",
        "Apply DLP policies and environment rules before publishing",
      ],
      pl: [
        "Projektować tematy z encjami i zmiennymi, które radzą sobie z prawdziwymi rozmowami",
        "Skonfigurować odpowiedzi generatywne na własnych źródłach wiedzy",
        "Podłączyć akcje i konektory do systemów biznesowych",
        "Opublikować agenta w Teams i Microsoft 365 Copilot",
        "Czytać analitykę agenta i decydować, co poprawić w następnej kolejności",
        "Zastosować zasady DLP i reguły środowisk przed publikacją",
      ],
    },
    agenda: [copilotStudioDay],
    prerequisites: {
      en: [
        "Comfortable with Microsoft 365 and Teams",
        "Basic Power Platform experience helps",
        "Copilot Studio trial or licence",
      ],
      pl: [
        "Swobodna praca w Microsoft 365 i Teams",
        "Podstawowe doświadczenie z Power Platform będzie pomocne",
        "Wersja próbna lub licencja Copilot Studio",
      ],
    },
    tags: ["copilot-studio", "agents", "power-platform", "teams"],
    msLearnUrl: `${LEARN}/pl-7008`,
  },
  "copilot-studio-agents": {
    slug: "copilot-studio-agents",
    track: "copilot",
    codes: [],
    official: false,
    condensed: false,
    days: 2,
    level: "intermediate",
    title: { en: "Copilot Studio agents for your data", pl: "Agenci Copilot Studio na Twoich danych" },
    tagline: {
      en: "One agent on your own systems, built and ready for a security review.",
      pl: "Jeden agent na Twoich systemach, zbudowany i gotowy na przegląd bezpieczeństwa.",
    },
    summary: {
      en: "A custom programme, not an official Microsoft course. Day one covers the PL-7008 ground. Day two is your environment: connectors to your systems, API actions, testing, a security review and a handover runbook. The agent you build stays with you and keeps running.",
      pl: "Autorski program, nie oficjalny kurs Microsoft. Pierwszy dzień obejmuje materiał PL-7008. Drugi dzień to Twoje środowisko: konektory do Twoich systemów, akcje API, testy, przegląd bezpieczeństwa i runbook przekazania. Agent, którego zbudujesz, zostaje u Ciebie i działa dalej.",
    },
    audience: {
      en: ["Power Platform makers", "Solution architects", "IT security and platform owners"],
      pl: ["Twórcy Power Platform", "Architekci rozwiązań", "Właściciele platform i bezpieczeństwa IT"],
    },
    notFor: {
      en: "Not for teams without access to a real environment and data — day two depends on it.",
      pl: "Nie dla zespołów bez dostępu do prawdziwego środowiska i danych — drugi dzień na tym stoi.",
    },
    outcomes: {
      en: [
        "Design and publish a Copilot Studio agent end to end",
        "Connect the agent to your own systems through connectors and API actions",
        "Write test cases that cover happy paths, edge cases and refusals",
        "Take the agent through a security review with evidence, not promises",
        "Hand the agent over with a runbook your operations team can follow",
      ],
      pl: [
        "Zaprojektować i opublikować agenta Copilot Studio od początku do końca",
        "Podłączyć agenta do własnych systemów przez konektory i akcje API",
        "Napisać przypadki testowe dla ścieżek typowych, brzegowych i odmów",
        "Przeprowadzić agenta przez przegląd bezpieczeństwa z dowodami, a nie obietnicami",
        "Przekazać agenta z runbookiem, według którego zespół utrzymania da sobie radę",
      ],
    },
    agenda: [
      copilotStudioDay,
      {
        title: { en: "Your systems, your data", pl: "Twoje systemy, Twoje dane" },
        modules: {
          en: ["Connectors to your systems", "API actions", "Testing the agent", "Security review", "Handover runbook"],
          pl: ["Konektory do Twoich systemów", "Akcje API", "Testowanie agenta", "Przegląd bezpieczeństwa", "Runbook przekazania"],
        },
        addOn: {
          en: "Your agent, your data, reviewed by someone who has to defend it in a security review.",
          pl: "Twój agent i Twoje dane, sprawdzone przez kogoś, kto sam musi ich bronić na przeglądach bezpieczeństwa.",
        },
      },
    ],
    prerequisites: {
      en: [
        "Copilot Studio experience or PL-7008 level knowledge",
        "An environment and test data you are allowed to use",
        "Someone who can approve connector and API access",
        "A short brief of the agent you want, sent before class",
      ],
      pl: [
        "Doświadczenie z Copilot Studio lub wiedza na poziomie PL-7008",
        "Środowisko i dane testowe, których możesz używać",
        "Osoba, która może zatwierdzić dostęp do konektorów i API",
        "Krótki opis agenta, którego potrzebujesz, wysłany przed szkoleniem",
      ],
    },
    tags: ["copilot-studio", "agents", "integration", "security", "custom"],
  },
  "dp-600": {
    slug: "dp-600",
    track: "fabric",
    codes: ["DP-600T00"],
    official: true,
    condensed: true,
    days: 2,
    level: "advanced",
    title: {
      en: "DP-600 Essentials: Implement analytics solutions using Microsoft Fabric",
      pl: "DP-600 Essentials: rozwiązania analityczne w Microsoft Fabric",
    },
    tagline: {
      en: "The exam-relevant core of DP-600, for people who will run Fabric in production.",
      pl: "Sedno DP-600 dla osób, które będą utrzymywać Fabric na produkcji.",
    },
    summary: {
      en: "Condensed from the official 4-day outline into 2 intensive days. We cover the exam-relevant core of DP-600: lakehouses, warehouses, semantic models, DAX at scale, security and lifecycle. Expect a fast pace and labs, not a tour of every menu.",
      pl: "Wersja skrócona: oficjalny 4-dniowy program skondensowany do 2 intensywnych dni. Przerabiamy to, co z DP-600 liczy się na egzaminie i w pracy: lakehouse, warehouse, modele semantyczne, DAX w skali, bezpieczeństwo i cykl życia. Szybkie tempo i laboratoria, a nie wycieczka po każdym menu.",
    },
    audience: {
      en: ["Analytics engineers", "BI developers", "Data architects"],
      pl: ["Inżynierowie analityki", "Programiści BI", "Architekci danych"],
    },
    notFor: {
      en: "Not for people new to data modelling or Power BI — start with DP-605.",
      pl: "Nie dla osób, które dopiero zaczynają z modelowaniem danych lub Power BI — zacznij od DP-605.",
    },
    outcomes: {
      en: [
        "Design a Fabric solution end to end, with OneLake shortcuts instead of copies",
        "Choose between lakehouse, warehouse and eventhouse, and defend the choice",
        "Build dimensional models with slowly changing dimensions",
        "Transform data with Dataflows Gen2, notebooks and T-SQL",
        "Tune semantic models and DAX with Performance Analyzer and aggregations",
        "Secure workspaces, items and data with RLS, OLS and OneLake security",
        "Ship changes through Git and deployment pipelines",
      ],
      pl: [
        "Zaprojektować rozwiązanie w Fabric od początku do końca, ze skrótami OneLake zamiast kopii",
        "Wybrać między lakehouse, warehouse i eventhouse, a potem obronić ten wybór",
        "Zbudować modele wymiarowe z wolnozmiennymi wymiarami (SCD)",
        "Przekształcać dane w Dataflows Gen2, notatnikach i T-SQL",
        "Stroić modele semantyczne i DAX przy pomocy Performance Analyzer i agregacji",
        "Zabezpieczyć obszary robocze, elementy i dane przez RLS, OLS i zabezpieczenia OneLake",
        "Wdrażać zmiany przez Git i potoki wdrożeniowe",
      ],
    },
    agenda: [
      {
        title: { en: "Build the analytics foundation", pl: "Fundament analityczny" },
        modules: {
          en: [
            "Fabric end to end and OneLake shortcuts",
            "Lakehouse vs warehouse vs eventhouse",
            "Dimensional modelling and SCDs",
            "Dataflows Gen2",
            "Notebooks with PySpark and Spark SQL",
            "T-SQL transforms",
          ],
          pl: [
            "Fabric od A do Z i skróty OneLake",
            "Lakehouse, warehouse czy eventhouse",
            "Modelowanie wymiarowe i SCD",
            "Dataflows Gen2",
            "Notatniki: PySpark i Spark SQL",
            "Transformacje w T-SQL",
          ],
        },
        addOn: {
          en: "The lakehouse-or-warehouse decision made on your own workload, not a textbook one.",
          pl: "Decyzja lakehouse czy warehouse podjęta na Twoim obciążeniu, a nie na przykładzie z podręcznika.",
        },
      },
      {
        title: { en: "Model, secure and ship", pl: "Model, bezpieczeństwo, wdrożenie" },
        modules: {
          en: [
            "Semantic models and DAX at scale: storage modes, star schema",
            "Performance: Performance Analyzer, aggregations",
            "Row-level and object-level security",
            "Lifecycle: Git, XMLA, deployment pipelines",
            "Workspace, item and OneLake security",
            "Preparing models for Copilot",
          ],
          pl: [
            "Modele semantyczne i DAX w skali: tryby przechowywania, schemat gwiazdy",
            "Wydajność: Performance Analyzer, agregacje",
            "Zabezpieczenia na poziomie wierszy i obiektów (RLS/OLS)",
            "Cykl życia: Git, XMLA, potoki wdrożeniowe",
            "Bezpieczeństwo obszarów roboczych, elementów i OneLake",
            "Przygotowanie modeli pod Copilota",
          ],
        },
        addOn: { en: "Your gold layer on the whiteboard.", pl: "Twoja warstwa gold rozrysowana na tablicy." },
      },
    ],
    prerequisites: {
      en: [
        "Solid Power BI and DAX experience",
        "Working knowledge of SQL",
        "Some exposure to Python or Spark helps",
        "A Fabric trial or capacity for labs",
      ],
      pl: [
        "Solidne doświadczenie z Power BI i DAX",
        "Praktyczna znajomość SQL",
        "Kontakt z Pythonem lub Sparkiem będzie pomocny",
        "Wersja próbna lub pojemność Fabric na laboratoria",
      ],
    },
    tags: ["fabric", "power-bi", "dax", "lakehouse", "exam-prep", "essentials"],
    msLearnUrl: `${LEARN}/dp-600t00`,
    examCode: "DP-600",
  },
  "dp-605": {
    slug: "dp-605",
    track: "fabric",
    codes: ["DP-605T00"],
    official: true,
    condensed: false,
    days: 1,
    level: "beginner",
    title: {
      en: "Prepare and visualize data with Microsoft Power BI",
      pl: "Przygotowanie i wizualizacja danych w Power BI",
    },
    tagline: {
      en: "From a raw export to a report people actually use.",
      pl: "Od surowego eksportu do raportu, z którego ludzie naprawdę korzystają.",
    },
    summary: {
      en: "Built on Microsoft's official DP-605 course. You go through the whole Power BI path in a day: get data, clean it, model it, and design reports that answer a real question. We finish with Copilot in Power BI and where Power BI sits inside Microsoft Fabric.",
      pl: "Oparte na oficjalnym kursie Microsoft DP-605. W jeden dzień przechodzisz całą ścieżkę Power BI: pobranie danych, czyszczenie, model i raporty, które odpowiadają na konkretne pytanie. Kończymy na Copilocie w Power BI i miejscu Power BI w Microsoft Fabric.",
    },
    audience: {
      en: ["Business analysts", "Finance and operations teams", "Excel power users"],
      pl: ["Analitycy biznesowi", "Zespoły finansów i operacji", "Zaawansowani użytkownicy Excela"],
    },
    notFor: {
      en: "Not for experienced Power BI developers — DP-600 Essentials is the next step.",
      pl: "Nie dla doświadczonych twórców Power BI — dla nich kolejnym krokiem jest DP-600 Essentials.",
    },
    outcomes: {
      en: [
        "Connect Power BI to files, databases and cloud sources",
        "Clean and reshape data in Power Query without manual fixes",
        "Configure a semantic model with relationships and basic measures",
        "Design a report page that answers one business question clearly",
        "Use Copilot in Power BI and check what it produces",
      ],
      pl: [
        "Podłączyć Power BI do plików, baz danych i źródeł w chmurze",
        "Czyścić i przekształcać dane w Power Query bez ręcznych poprawek",
        "Skonfigurować model semantyczny z relacjami i podstawowymi miarami",
        "Zaprojektować stronę raportu, która jasno odpowiada na jedno pytanie biznesowe",
        "Korzystać z Copilota w Power BI i weryfikować to, co wygeneruje",
      ],
    },
    agenda: [
      {
        title: { en: "From data to report", pl: "Od danych do raportu" },
        modules: {
          en: [
            "Get data",
            "Clean, transform and load",
            "Configure a semantic model",
            "Design reports",
            "Copilot in Power BI",
            "Power BI in the Fabric context",
          ],
          pl: [
            "Pobieranie danych",
            "Czyszczenie, przekształcanie i ładowanie",
            "Konfiguracja modelu semantycznego",
            "Projektowanie raportów",
            "Copilot w Power BI",
            "Power BI w kontekście Fabric",
          ],
        },
        addOn: {
          en: "One of your own datasets, cleaned live.",
          pl: "Jeden z Twoich własnych zbiorów danych, wyczyszczony na żywo.",
        },
      },
    ],
    prerequisites: {
      en: [
        "Comfortable with Excel",
        "No Power BI experience required",
        "Power BI Desktop installed on a Windows machine",
      ],
      pl: [
        "Swobodna praca w Excelu",
        "Doświadczenie z Power BI nie jest wymagane",
        "Power BI Desktop zainstalowany na komputerze z Windows",
      ],
    },
    tags: ["power-bi", "fabric", "reporting", "copilot"],
    msLearnUrl: `${LEARN}/dp-605t00`,
  },
  "dp-700": {
    slug: "dp-700",
    track: "fabric",
    codes: ["DP-700T00"],
    official: true,
    condensed: true,
    days: 2,
    level: "intermediate",
    title: {
      en: "DP-700 Essentials: Implement data engineering solutions using Microsoft Fabric",
      pl: "DP-700 Essentials: inżynieria danych w Microsoft Fabric",
    },
    tagline: {
      en: "Fabric data engineering that survives production, not just the demo.",
      pl: "Inżynieria danych w Fabric, która przetrwa produkcję, a nie tylko demo.",
    },
    summary: {
      en: "Condensed from the official 4-day outline into 2 intensive days. We cover the exam-relevant core of DP-700: ingestion, medallion lakehouses, warehouse loading, Real-Time Intelligence, CI/CD and monitoring. The focus is on pipelines that keep running when nobody is watching.",
      pl: "Wersja skrócona: oficjalny 4-dniowy program skondensowany do 2 intensywnych dni. Przerabiamy to, co z DP-700 liczy się na egzaminie i w pracy: ingestię, lakehouse w architekturze medalionowej, ładowanie hurtowni, Real-Time Intelligence, CI/CD i monitoring. Nacisk na potoki, które działają, kiedy nikt na nie nie patrzy.",
    },
    audience: {
      en: ["Data engineers", "ETL and integration developers", "Data platform owners"],
      pl: ["Inżynierowie danych", "Programiści ETL i integracji", "Właściciele platform danych"],
    },
    notFor: {
      en: "Not for report builders who never touch pipelines — DP-605 or DP-600 Essentials fit better.",
      pl: "Nie dla osób, które budują raporty i nie dotykają potoków — lepiej pasuje DP-605 albo DP-600 Essentials.",
    },
    outcomes: {
      en: [
        "Ingest data with Dataflows Gen2, pipelines and Spark, and know when to use which",
        "Structure a lakehouse into bronze, silver and gold Delta tables",
        "Load a warehouse with repeatable T-SQL patterns",
        "Stream events with Eventstream, query them in KQL and act on them with Activator",
        "Promote changes through Git and deployment pipelines",
        "Monitor runs in the monitoring hub and secure data in OneLake",
      ],
      pl: [
        "Pobierać dane przez Dataflows Gen2, potoki i Sparka oraz wiedzieć, kiedy którego użyć",
        "Ułożyć lakehouse w tabele Delta w warstwach bronze, silver i gold",
        "Ładować hurtownię powtarzalnymi wzorcami T-SQL",
        "Przesyłać zdarzenia przez Eventstream, odpytywać je w KQL i reagować na nie w Activatorze",
        "Promować zmiany przez Git i potoki wdrożeniowe",
        "Monitorować przebiegi w centrum monitorowania i zabezpieczać dane w OneLake",
      ],
    },
    agenda: [
      {
        title: { en: "Ingest and shape", pl: "Ingestia i przygotowanie danych" },
        modules: {
          en: [
            "Ingestion with Dataflows Gen2, pipelines and Spark",
            "Lakehouse Delta tables",
            "Medallion architecture",
            "Notebooks in practice",
          ],
          pl: [
            "Ingestia przez Dataflows Gen2, potoki i Sparka",
            "Tabele Delta w lakehouse",
            "Architektura medalionowa",
            "Notatniki w praktyce",
          ],
        },
        addOn: {
          en: "Your current ingestion mapped to bronze, silver and gold.",
          pl: "Twoja obecna ingestia rozpisana na bronze, silver i gold.",
        },
      },
      {
        title: { en: "Load, stream and operate", pl: "Ładowanie, strumienie i utrzymanie" },
        modules: {
          en: [
            "Warehouse loading patterns and T-SQL",
            "Real-Time Intelligence: Eventstream, KQL, Activator",
            "CI/CD with Git and deployment pipelines",
            "Monitoring hub",
            "OneLake security",
          ],
          pl: [
            "Wzorce ładowania hurtowni i T-SQL",
            "Real-Time Intelligence: Eventstream, KQL, Activator",
            "CI/CD: Git i potoki wdrożeniowe",
            "Centrum monitorowania",
            "Bezpieczeństwo OneLake",
          ],
        },
        addOn: {
          en: "Failure-mode lab: what breaks at 3 a.m. and who gets paged.",
          pl: "Laboratorium awarii: co pada o 3 w nocy i do kogo wtedy dzwoni telefon.",
        },
      },
    ],
    prerequisites: {
      en: [
        "Working knowledge of SQL",
        "Basic Python or PySpark",
        "Familiarity with data warehouse concepts",
        "A Fabric trial or capacity for labs",
      ],
      pl: [
        "Praktyczna znajomość SQL",
        "Podstawy Pythona lub PySparka",
        "Znajomość pojęć z obszaru hurtowni danych",
        "Wersja próbna lub pojemność Fabric na laboratoria",
      ],
    },
    tags: ["fabric", "data-engineering", "spark", "real-time", "exam-prep", "essentials"],
    msLearnUrl: `${LEARN}/dp-700t00`,
    examCode: "DP-700",
  },
  "dp-300": {
    slug: "dp-300",
    track: "sql",
    codes: ["DP-300T00"],
    official: true,
    condensed: true,
    days: 2,
    level: "intermediate",
    title: {
      en: "DP-300 Essentials: Implement scalable database solutions using Azure SQL",
      pl: "DP-300 Essentials: bazy danych w Azure SQL",
    },
    tagline: {
      en: "Deploy, secure, tune and recover Azure SQL, without the filler.",
      pl: "Wdrożenie, bezpieczeństwo, strojenie i odtwarzanie Azure SQL, bez waty.",
    },
    summary: {
      en: "Condensed from the official 4-day outline into 2 intensive days. We cover the exam-relevant core of DP-300: choosing and deploying the right Azure SQL option, securing it, keeping it fast, automating the routine and planning for failure. Built for the people who will be on call for it.",
      pl: "Wersja skrócona: oficjalny 4-dniowy program skondensowany do 2 intensywnych dni. Przerabiamy to, co z DP-300 liczy się na egzaminie i w pracy: wybór i wdrożenie właściwej opcji Azure SQL, zabezpieczenie, wydajność, automatyzację rutyny i plan na awarię. Dla ludzi, którzy będą mieli przy tym dyżury.",
    },
    audience: {
      en: ["Database administrators", "Cloud and infrastructure engineers", "Developers who own their databases"],
      pl: ["Administratorzy baz danych", "Inżynierowie chmury i infrastruktury", "Programiści odpowiedzialni za własne bazy"],
    },
    notFor: {
      en: "Not for people who have never written a SQL query — start with DP-080.",
      pl: "Nie dla osób, które nie napisały jeszcze żadnego zapytania SQL — zacznij od DP-080.",
    },
    outcomes: {
      en: [
        "Choose between Azure SQL Database, Managed Instance and SQL Server on a VM",
        "Plan a migration from on-premises SQL Server to Azure SQL",
        "Secure a database with Entra authentication, TDE, Always Encrypted, masking, RLS and auditing",
        "Diagnose slow queries with Query Store, indexes and statistics",
        "Automate routine tasks instead of doing them by hand",
        "Design high availability and disaster recovery with failover groups and tested restores",
      ],
      pl: [
        "Wybrać między Azure SQL Database, Managed Instance i SQL Server na maszynie wirtualnej",
        "Zaplanować migrację z lokalnego SQL Server do Azure SQL",
        "Zabezpieczyć bazę przez uwierzytelnianie Entra, TDE, Always Encrypted, maskowanie, RLS i audyt",
        "Diagnozować wolne zapytania przy pomocy Query Store, indeksów i statystyk",
        "Automatyzować rutynowe zadania zamiast robić je ręcznie",
        "Zaprojektować wysoką dostępność i odtwarzanie po awarii z grupami failover i sprawdzonym przywracaniem",
      ],
    },
    agenda: [
      {
        title: { en: "Plan, deploy and secure", pl: "Planowanie, wdrożenie i bezpieczeństwo" },
        modules: {
          en: [
            "Azure SQL options: Database, Managed Instance, SQL on a VM",
            "Deployment and migration",
            "Authentication and authorization",
            "TDE and Always Encrypted",
            "Dynamic data masking and row-level security",
            "Auditing",
          ],
          pl: [
            "Opcje Azure SQL: Database, Managed Instance, SQL na maszynie wirtualnej",
            "Wdrożenie i migracja",
            "Uwierzytelnianie i autoryzacja",
            "TDE i Always Encrypted",
            "Dynamiczne maskowanie danych i zabezpieczenia na poziomie wierszy",
            "Audyt",
          ],
        },
        addOn: {
          en: "Your current SQL estate mapped to the right Azure SQL option.",
          pl: "Twoje obecne środowisko SQL przypisane do właściwej opcji Azure SQL.",
        },
      },
      {
        title: { en: "Monitor, optimise, automate and recover", pl: "Monitoring, optymalizacja, automatyzacja i odtwarzanie" },
        modules: {
          en: [
            "Query Store and monitoring",
            "Indexes and statistics",
            "Intelligent query processing",
            "Automating tasks",
            "Availability groups and failover groups",
            "Backup and restore",
          ],
          pl: [
            "Query Store i monitoring",
            "Indeksy i statystyki",
            "Inteligentne przetwarzanie zapytań (IQP)",
            "Automatyzacja zadań",
            "Grupy dostępności i grupy failover",
            "Kopie zapasowe i przywracanie",
          ],
        },
        addOn: {
          en: "Live tuning of a query the group brings.",
          pl: "Strojenie na żywo zapytania, które przyniesie grupa.",
        },
      },
    ],
    prerequisites: {
      en: [
        "Hands-on SQL Server administration experience",
        "Comfortable writing T-SQL",
        "Basic Azure knowledge (portal, resource groups)",
        "An Azure subscription for labs",
      ],
      pl: [
        "Praktyczne doświadczenie w administrowaniu SQL Server",
        "Swobodne pisanie w T-SQL",
        "Podstawy Azure (portal, grupy zasobów)",
        "Subskrypcja Azure na laboratoria",
      ],
    },
    tags: ["azure-sql", "sql-server", "dba", "security", "exam-prep", "essentials"],
    msLearnUrl: `${LEARN}/dp-300t00`,
    examCode: "DP-300",
  },
  "dp-080": {
    slug: "dp-080",
    track: "sql",
    codes: ["DP-080T00"],
    official: true,
    condensed: false,
    days: 2,
    level: "beginner",
    title: {
      en: "Query and modify data with Transact-SQL",
      pl: "Zapytania i modyfikacja danych w Transact-SQL",
    },
    tagline: {
      en: "Write the SQL you need at work, and understand why it works.",
      pl: "Pisz SQL, którego potrzebujesz w pracy, i rozumiej, dlaczego działa.",
    },
    summary: {
      en: "Built on Microsoft's official DP-080 course. You start from a blank query window and finish writing joins, subqueries, aggregations and data changes with confidence. Every exercise runs against a real database, and every pattern is one you will use again.",
      pl: "Oparte na oficjalnym kursie Microsoft DP-080. Zaczynasz od pustego okna zapytania, a kończysz, pewnie pisząc złączenia, podzapytania, agregacje i modyfikacje danych. Każde ćwiczenie działa na prawdziwej bazie, a każdy wzorzec jeszcze Ci się przyda.",
    },
    audience: {
      en: ["Analysts", "Report and BI developers", "Developers new to SQL"],
      pl: ["Analitycy", "Twórcy raportów i BI", "Programiści zaczynający z SQL"],
    },
    notFor: {
      en: "Not for people who already write T-SQL daily — T-SQL performance for developers is the better fit.",
      pl: "Nie dla osób, które już codziennie piszą w T-SQL — lepiej pasuje Wydajność T-SQL dla programistów.",
    },
    outcomes: {
      en: [
        "Write SELECT queries that sort and filter exactly what is needed",
        "Combine tables with inner and outer joins without duplicating rows",
        "Use subqueries where they make a query clearer",
        "Summarise data with built-in functions and GROUP BY",
        "Insert, update, delete and merge data safely",
      ],
      pl: [
        "Pisać zapytania SELECT, które sortują i filtrują dokładnie to, czego potrzeba",
        "Łączyć tabele złączeniami wewnętrznymi i zewnętrznymi bez duplikowania wierszy",
        "Używać podzapytań tam, gdzie upraszczają zapytanie",
        "Podsumowywać dane funkcjami wbudowanymi i GROUP BY",
        "Bezpiecznie wstawiać, aktualizować, usuwać i scalać dane",
      ],
    },
    agenda: [
      {
        title: { en: "Read data", pl: "Odczyt danych" },
        modules: {
          en: ["T-SQL basics", "SELECT", "Sorting and filtering", "JOINs"],
          pl: ["Podstawy T-SQL", "SELECT", "Sortowanie i filtrowanie", "Złączenia (JOIN)"],
        },
        addOn: {
          en: "Your own reporting questions rewritten as queries.",
          pl: "Twoje własne pytania raportowe przepisane na zapytania.",
        },
      },
      {
        title: { en: "Summarise and change data", pl: "Podsumowanie i modyfikacja danych" },
        modules: {
          en: ["Subqueries", "Built-in functions", "GROUP BY and aggregation", "INSERT, UPDATE, DELETE and MERGE"],
          pl: ["Podzapytania", "Funkcje wbudowane", "GROUP BY i agregacja", "INSERT, UPDATE, DELETE i MERGE"],
        },
        addOn: {
          en: "The ten queries you will actually write next week.",
          pl: "Dziesięć zapytań, które naprawdę napiszesz w przyszłym tygodniu.",
        },
      },
    ],
    prerequisites: {
      en: [
        "No SQL experience required",
        "Comfortable with tables in Excel",
        "A laptop with SQL Server Management Studio or VS Code with the MSSQL extension",
      ],
      pl: [
        "Doświadczenie z SQL nie jest wymagane",
        "Swobodna praca z tabelami w Excelu",
        "Laptop z SQL Server Management Studio albo VS Code z rozszerzeniem MSSQL",
      ],
    },
    tags: ["t-sql", "sql", "queries", "beginner"],
    msLearnUrl: `${LEARN}/dp-080t00`,
  },
  "tsql-performance": {
    slug: "tsql-performance",
    track: "sql",
    codes: [],
    official: false,
    condensed: false,
    days: 2,
    level: "advanced",
    title: { en: "T-SQL performance for developers", pl: "Wydajność T-SQL dla programistów" },
    tagline: {
      en: "Read the plan, fix the query, keep it fast.",
      pl: "Przeczytaj plan, popraw zapytanie, utrzymaj wydajność.",
    },
    summary: {
      en: "A custom programme, not an official Microsoft course. We work on why queries get slow and how to fix them: execution plans, indexing, sargability, statistics and set-based rewrites. The last afternoon belongs to your team's own slow queries.",
      pl: "Autorski program, nie oficjalny kurs Microsoft. Pracujemy nad tym, dlaczego zapytania zwalniają i jak to naprawić: plany wykonania, indeksy, sargowalność, statystyki i przepisywanie na operacje na zbiorach. Ostatnie popołudnie należy do wolnych zapytań Twojego zespołu.",
    },
    audience: {
      en: ["Backend developers", "Database developers", "DBAs who review code"],
      pl: ["Programiści backendu", "Programiści baz danych", "Administratorzy baz, którzy przeglądają kod"],
    },
    notFor: {
      en: "Not for beginners who are still learning JOINs — take DP-080 first.",
      pl: "Nie dla początkujących, którzy dopiero uczą się złączeń — najpierw DP-080.",
    },
    outcomes: {
      en: [
        "Read an execution plan and find the operator that costs the most",
        "Design indexes that serve real query patterns",
        "Rewrite non-sargable predicates so indexes can do their job",
        "Diagnose and fix stale or misleading statistics",
        "Replace row-by-row logic with set-based T-SQL",
        "Use Query Store to catch regressions before users do",
      ],
      pl: [
        "Czytać plan wykonania i znaleźć operator, który kosztuje najwięcej",
        "Projektować indeksy pod rzeczywiste wzorce zapytań",
        "Przepisywać niesargowalne warunki tak, żeby indeksy mogły zadziałać",
        "Diagnozować i naprawiać nieaktualne lub mylące statystyki",
        "Zastępować logikę wiersz po wierszu operacjami na zbiorach w T-SQL",
        "Wyłapywać regresje w Query Store, zanim zrobią to użytkownicy",
      ],
    },
    agenda: [
      {
        title: { en: "Why queries get slow", pl: "Dlaczego zapytania zwalniają" },
        modules: {
          en: ["Execution plans", "Indexing strategy", "Sargability", "Statistics"],
          pl: ["Plany wykonania", "Strategia indeksowania", "Sargowalność", "Statystyki"],
        },
        addOn: {
          en: "One of your own execution plans, read line by line.",
          pl: "Jeden z Twoich planów wykonania, przeczytany linijka po linijce.",
        },
      },
      {
        title: { en: "Rewrite and review", pl: "Przepisywanie i przegląd" },
        modules: {
          en: ["Set-based rewrites", "Query Store", "Common anti-patterns", "Performance review of the group's own queries"],
          pl: ["Przepisywanie na operacje na zbiorach", "Query Store", "Typowe antywzorce", "Przegląd wydajności zapytań grupy"],
        },
        addOn: {
          en: "Bring your slowest query; we fix it in class.",
          pl: "Przynieś swoje najwolniejsze zapytanie. Naprawimy je na zajęciach.",
        },
      },
    ],
    prerequisites: {
      en: [
        "Writes T-SQL regularly",
        "Knows JOINs, subqueries and GROUP BY",
        "Access to a SQL Server or Azure SQL instance for labs",
        "A few slow queries from your own system (anonymised is fine)",
      ],
      pl: [
        "Regularne pisanie w T-SQL",
        "Znajomość złączeń, podzapytań i GROUP BY",
        "Dostęp do instancji SQL Server lub Azure SQL na laboratoria",
        "Kilka wolnych zapytań z Twojego systemu (mogą być zanonimizowane)",
      ],
    },
    tags: ["t-sql", "performance", "sql-server", "azure-sql", "custom"],
  },
};

export const courseList: Course[] = COURSE_SLUGS.map((slug) => courses[slug]);
