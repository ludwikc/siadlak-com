import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { FileText as TermsIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PolishTermsNewsletter = () => {
  const { language, getLocalizedPath } = useLanguage();

  // TODO: Replace placeholder email in §4 point 1 with the actual email address
  const placeholderDataProtectionEmail = '[Wstawić Kontaktowy Adres E-mail Administratora ds. Ochrony Danych]';

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Regulamin (Newsletter)
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Warunki regulujące subskrypcję naszego newslettera
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-xl mb-8">
              <div className="flex items-center mb-6">
                <TermsIcon size={24} className="mr-3 text-neural-violet dark:text-luminal-magenta" />
                <h2 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                  Regulamin Newslettera
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-deep-charcoal/80 dark:text-silver-mist/80">
                {/* §1 General Provisions */}
                <h3>§1 Postanowienia ogólne</h3>
                <p>
                  1. Niniejszy regulamin (dalej „Regulamin") określa zasady świadczenia usługi newslettera drogą elektroniczną przez SIADLAK Holding Group sp. z o.o., z siedzibą w Warszawie, Aleja Jana Pawła II 43A/37B, 01-001 Warszawa, wpisaną do rejestru przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS: 0001141743, NIP: 5273141363, REGON: 540328107 (dalej „Administrator" lub „Spółka").
                </p>
                <p>
                  2. Usługa Newslettera jest świadczona nieodpłatnie i polega na przesyłaniu przez Administratora na podany przez Użytkownika adres e-mail informacji o charakterze informacyjnym, edukacyjnym, promocyjnym i marketingowym, związanych z działalnością Administratora.
                </p>
                <p>
                  3. Zapisanie się do Newslettera i korzystanie z usługi oznacza akceptację niniejszego Regulaminu.
                </p>

                {/* §2 Newsletter Subscription */}
                <h3>§2 Zapis do Newslettera</h3>
                <p>
                  1. Zapis do Newslettera jest dobrowolny.
                </p>
                <p>
                  2. W celu subskrypcji Newslettera Użytkownik musi wypełnić formularz rejestracyjny dostępny na stronie internetowej Administratora, podając co najmniej swój adres e-mail. Podanie imienia może być opcjonalne lub wymagane, zgodnie ze wskazaniem w formularzu.
                </p>
                <p>
                  3. Zapis wymaga wyrażenia przez Użytkownika wyraźnej zgody na otrzymywanie Newslettera poprzez zaznaczenie odpowiedniego pola wyboru (checkbox) w formularzu rejestracyjnym oraz akceptacji niniejszego Regulaminu.
                </p>
                <p>
                  4. Po przesłaniu formularza Użytkownik otrzyma wiadomość e-mail zawierającą link potwierdzający subskrypcję. Kliknięcie w ten link stanowi potwierdzenie zapisu (mechanizm double opt-in) i moment zawarcia umowy o świadczenie usługi Newslettera. Brak potwierdzenia subskrypcji w czasie wskazanym w wiadomości e-mail (lub, jeśli czas nie jest wskazany, w rozsądnym terminie) spowoduje usunięcie podanych danych i nieaktywowanie subskrypcji.
                </p>
                <p>
                  5. Zapisanie się do Newslettera może wiązać się z możliwością otrzymania przez Użytkownika określonych treści cyfrowych (np. e-booka) lub dostępu do usługi cyfrowej (np. kursu) jako korzyści związanej z subskrypcją. Informacja o takiej korzyści będzie wyraźnie wskazana przy formularzu zapisu.
                </p>
                <p>
                  6. Jeżeli Użytkownik chce uzyskać dostęp do treści cyfrowej lub usługi oferowanej jako korzyść za subskrypcję bez zapisywania się do Newslettera, może mieć możliwość ich odrębnego zakupu, jeśli jest to oferowane przez Administratora, na warunkach określonych w innym miejscu.
                </p>

                {/* §3 Scope and Frequency */}
                <h3>§3 Zakres i częstotliwość Newslettera</h3>
                <p>
                  1. Newsletter może zawierać:
                </p>
                <ul>
                  <li>Treści edukacyjne, takie jak poradniki, raporty, artykuły, materiały wideo.</li>
                  <li>Informacje o nowych produktach, usługach, kursach lub wydarzeniach oferowanych przez Administratora.</li>
                  <li>Informacje handlowe i oferty promocyjne związane z działalnością Administratora.</li>
                  <li>Aktualności dotyczące działalności Administratora lub istotnych wydarzeń branżowych.</li>
                </ul>
                <p>
                  2. Newsletter będzie wysyłany okresowo. Administrator dąży do regularności, ale nie gwarantuje konkretnych terminów ani częstotliwości wysyłki, przy czym intencją jest wysyłka nie częściej niż dwa razy w tygodniu, chyba że zaistnieją szczególne okoliczności (np. pilne komunikaty).
                </p>

                {/* §4 Personal Data Protection */}
                <h3>§4 Ochrona Danych Osobowych</h3>
                <h4>1. Administrator Danych:</h4>
                <p>
                  Administratorem danych osobowych podanych podczas zapisu na Newsletter jest SIADLAK Holding Group sp. z o.o., z siedzibą w Warszawie, Aleja Jana Pawła II 43A/37B, 01-001 Warszawa. Kontakt w sprawach ochrony danych osobowych możliwy jest za pośrednictwem adresu e-mail: {placeholderDataProtectionEmail} lub korespondencyjnie na adres siedziby Administratora.
                </p>
                <h4>2. Cel i Podstawa Prawna:</h4>
                <p>
                  Dane osobowe (adres e-mail, imię, jeśli podano) przetwarzane są wyłącznie w celu świadczenia usługi Newslettera, w tym wysyłki wiadomości e-mail z linkiem potwierdzającym oraz późniejszych wiadomości newsletterowych. Podstawą prawną przetwarzania jest wyraźna zgoda Użytkownika (art. 6 ust. 1 lit. a) Rozporządzenia Ogólnego o Ochronie Danych – RODO), wyrażona podczas procesu zapisu za pomocą mechanizmu double opt-in.
                </p>
                <h4>3. Odbiorcy Danych:</h4>
                <p>
                  Dane Użytkownika mogą być przekazywane zaufanym podmiotom trzecim, które wspierają Administratora w świadczeniu usługi Newslettera (podmioty przetwarzające), takim jak dostawcy platform do e-mail marketingu (np. MailerLite). Podmioty te przetwarzają dane na podstawie umowy powierzenia przetwarzania danych zawartej z Administratorem i wyłącznie zgodnie z jego poleceniami, zapewniając odpowiednie standardy ochrony danych. Dane mogą być przetwarzane na terenie Europejskiego Obszaru Gospodarczego (EOG). W przypadku transferu danych poza EOG, Administrator zapewnia stosowanie odpowiednich zabezpieczeń (np. Standardowych Klauzul Umownych).
                </p>
                <h4>4. Okres Przechowywania Danych:</h4>
                <p>
                  Dane osobowe będą przetwarzane przez czas trwania subskrypcji Newslettera. Po wycofaniu zgody (rezygnacji z subskrypcji), dane zostaną niezwłocznie usunięte z aktywnej listy mailingowej. Administrator może jednak przechowywać dane archiwalne (np. adres e-mail, data zgody/wycofania) przez ograniczony czas niezbędny do ustalenia, dochodzenia lub obrony przed ewentualnymi roszczeniami, na podstawie prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f) RODO), zazwyczaj odpowiadający ustawowym terminom przedawnienia roszczeń.
                </p>
                <h4>5. Prawa Użytkownika:</h4>
                <p>
                  W związku z przetwarzaniem danych osobowych, Użytkownikowi przysługują następujące prawa wynikające z RODO:
                </p>
                <ul>
                  <li>Prawo dostępu do swoich danych.</li>
                  <li>Prawo do sprostowania (poprawiania) danych.</li>
                  <li>Prawo do usunięcia danych („prawo do bycia zapomnianym").</li>
                  <li>Prawo do ograniczenia przetwarzania.</li>
                  <li>Prawo do przenoszenia danych (jeśli ma zastosowanie).</li>
                  <li>Prawo do wniesienia sprzeciwu wobec przetwarzania (jeśli ma zastosowanie).</li>
                  <li>Prawo do cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.</li>
                  <li>Prawo do wniesienia skargi do organu nadzorczego. W Polsce jest nim Prezes Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa.</li>
                </ul>
                <h4>6. Realizacja Praw:</h4>
                <p>
                  Użytkownik może realizować swoje prawa, w tym cofnąć zgodę (wypisać się z Newslettera), klikając dedykowany link znajdujący się w każdej wiadomości Newslettera lub kontaktując się bezpośrednio z Administratorem, korzystając z danych kontaktowych wskazanych w §4 ust. 1.
                </p>

                {/* §5 Unsubscription */}
                <h3>§5 Rezygnacja z Newslettera (Wycofanie Zgody)</h3>
                <p>
                  1. Użytkownik może w każdej chwili i bez podania przyczyny zrezygnować z usługi Newslettera.
                </p>
                <p>
                  2. Rezygnacja następuje poprzez kliknięcie linku „wypisz się" (lub o podobnym znaczeniu) umieszczonego w stopce każdej wiadomości Newslettera.
                </p>
                <p>
                  3. Z chwilą rezygnacji umowa o świadczenie usługi Newslettera ulega rozwiązaniu, a dane osobowe Użytkownika przestają być przetwarzane w tym celu, z zastrzeżeniem zasad retencji określonych w §4 ust. 4.
                </p>

                {/* §6 Technical Requirements */}
                <h3>§6 Wymagania Techniczne</h3>
                <p>
                  1. Do zapisania się i otrzymywania Newslettera Użytkownik potrzebuje:
                </p>
                <ul>
                  <li>Urządzenia z dostępem do Internetu.</li>
                  <li>Aktywnego konta poczty elektronicznej (e-mail).</li>
                  <li>Przeglądarki internetowej umożliwiającej wyświetlanie treści HTML.</li>
                  <li>Włączona obsługa plików cookies oraz JavaScript w przeglądarce może być konieczna do prawidłowego działania formularza zapisu.</li>
                </ul>

                {/* §7 Final Provisions */}
                <h3>§7 Postanowienia Końcowe</h3>
                <p>
                  1. Administrator zastrzega sobie prawo do zmiany niniejszego Regulaminu z ważnych przyczyn, takich jak:
                </p>
                <ul>
                  <li>Zmiana obowiązujących przepisów prawa mających wpływ na usługę Newslettera lub ochronę danych.</li>
                  <li>Zmiany technologiczne lub funkcjonalne usługi Newslettera.</li>
                  <li>Zmiana zakresu usług świadczonych przez Administratora.</li>
                </ul>
                <p>
                  2. O wszelkich zmianach Regulaminu Użytkownicy zostaną poinformowani za pośrednictwem wiadomości e-mail wysłanej na adres podany przy subskrypcji, z co najmniej 14-dniowym wyprzedzeniem przed wejściem zmian w życie. Aktualna wersja Regulaminu będzie zawsze dostępna na stronie internetowej Administratora.
                </p>
                <p>
                  3. Jeżeli Użytkownik nie akceptuje zmienionego Regulaminu, ma prawo rozwiązać umowę poprzez rezygnację z Newslettera przed dniem wejścia zmian w życie. Dalsze korzystanie z usługi po wejściu w życie zmian oznacza akceptację zmienionego Regulaminu.
                </p>
                <p>
                  4. Niniejszy Regulamin podlega prawu polskiemu oraz odpowiednim regulacjom Unii Europejskiej, w szczególności RODO.
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex justify-between items-center">
              <Link
                to={getLocalizedPath("/legal")}
                className="inline-flex items-center px-4 py-2 bg-neural-violet hover:bg-neural-violet/90 text-white rounded-md transition-colors"
              >
                ← Powrót do Informacji Prawnych
              </Link>

              <Link
                to={getLocalizedPath("/contact")}
                className="inline-flex items-center px-4 py-2 bg-neural-violet hover:bg-neural-violet/90 text-white rounded-md transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolishTermsNewsletter;
