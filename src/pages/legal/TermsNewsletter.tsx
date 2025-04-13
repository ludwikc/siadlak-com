import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { FileText as TermsIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsNewsletter = () => {
  const { language, getLocalizedPath } = useLanguage();

  // TODO: Replace placeholder email in §4 point 1 with the actual email address
  const placeholderDataProtectionEmail = language === 'en'
    ? '[Insert Administrator\'s Data Protection Contact Email]'
    : '[Wstawić Kontaktowy Adres E-mail Administratora ds. Ochrony Danych]';

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'en' ? 'Terms and Conditions (Newsletter)' : 'Regulamin (Newsletter)'}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              {language === 'en'
                ? 'Terms governing your subscription to our newsletter'
                : 'Warunki regulujące subskrypcję naszego newslettera'}
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
                  {language === 'en' ? 'Newsletter Policy' : 'Regulamin Newslettera'}
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-deep-charcoal/80 dark:text-silver-mist/80">
                {/* §1 General Provisions */}
                <h3>{language === 'en' ? '§1 General Provisions' : '§1 Postanowienia ogólne'}</h3>
                <p>
                  {language === 'en'
                    ? '1. These regulations (hereinafter "Policy") define the rules for the provision of the newsletter service by electronic means by SIADLAK Holding Group sp. z o.o., with its registered office in Warsaw, Aleja Jana Pawła II 43A/37B, 01-001 Warszawa, entered into the Register of Entrepreneurs of the National Court Register under KRS number: 0001141743, NIP (Tax Identification Number): 5273141363, REGON (National Business Registry Number): 540328107 (hereinafter "Administrator" or "Company").'
                    : '1. Niniejszy regulamin (dalej „Regulamin”) określa zasady świadczenia usługi newslettera drogą elektroniczną przez SIADLAK Holding Group sp. z o.o., z siedzibą w Warszawie, Aleja Jana Pawła II 43A/37B, 01-001 Warszawa, wpisaną do rejestru przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS: 0001141743, NIP: 5273141363, REGON: 540328107 (dalej „Administrator” lub „Spółka”).'}
                </p>
                <p>
                  {language === 'en'
                    ? '2. The Newsletter service is provided free of charge and consists of the Administrator sending informational, educational, promotional, and marketing content related to the Administrator\'s activities to the email address provided by the User.'
                    : '2. Usługa Newslettera jest świadczona nieodpłatnie i polega na przesyłaniu przez Administratora na podany przez Użytkownika adres e-mail informacji o charakterze informacyjnym, edukacyjnym, promocyjnym i marketingowym, związanych z działalnością Administratora.'}
                </p>
                <p>
                  {language === 'en'
                    ? '3. Subscribing to and using the Newsletter service signifies acceptance of this Policy.'
                    : '3. Zapisanie się do Newslettera i korzystanie z usługi oznacza akceptację niniejszego Regulaminu.'}
                </p>

                {/* §2 Newsletter Subscription */}
                <h3>{language === 'en' ? '§2 Newsletter Subscription' : '§2 Zapis do Newslettera'}</h3>
                <p>
                  {language === 'en'
                    ? '1. Subscription to the Newsletter is voluntary.'
                    : '1. Zapis do Newslettera jest dobrowolny.'}
                </p>
                <p>
                  {language === 'en'
                    ? '2. To subscribe, the User must complete the registration form available on the Administrator\'s website, providing at least their email address. Providing a name may be optional or required, as indicated on the form.'
                    : '2. W celu subskrypcji Newslettera Użytkownik musi wypełnić formularz rejestracyjny dostępny na stronie internetowej Administratora, podając co najmniej swój adres e-mail. Podanie imienia może być opcjonalne lub wymagane, zgodnie ze wskazaniem w formularzu.'}
                </p>
                <p>
                  {language === 'en'
                    ? '3. Subscription requires the User\'s explicit consent to receive the Newsletter, expressed by checking the appropriate checkbox on the registration form, and acceptance of this Policy.'
                    : '3. Zapis wymaga wyrażenia przez Użytkownika wyraźnej zgody na otrzymywanie Newslettera poprzez zaznaczenie odpowiedniego pola wyboru (checkbox) w formularzu rejestracyjnym oraz akceptacji niniejszego Regulaminu.'}
                </p>
                <p>
                  {language === 'en'
                    ? '4. Upon submission of the form, the User will receive an email containing a confirmation link. Clicking this link confirms the subscription (double opt-in mechanism) and concludes the agreement for the provision of the Newsletter service. Failure to confirm the subscription within the time specified in the email (or if no time is specified, within a reasonable period) will result in the provided data being deleted and the subscription not being activated.'
                    : '4. Po przesłaniu formularza Użytkownik otrzyma wiadomość e-mail zawierającą link potwierdzający subskrypcję. Kliknięcie w ten link stanowi potwierdzenie zapisu (mechanizm double opt-in) i moment zawarcia umowy o świadczenie usługi Newslettera. Brak potwierdzenia subskrypcji w czasie wskazanym w wiadomości e-mail (lub, jeśli czas nie jest wskazany, w rozsądnym terminie) spowoduje usunięcie podanych danych i nieaktywowanie subskrypcji.'}
                </p>
                 <p>
                   {language === 'en'
                    ? '5. Subscribing to the Newsletter may entitle the User to receive specific digital content (e.g., an e-book) or access to a digital service (e.g., a course), as a benefit for subscribing. Information about any such benefit will be clearly stated alongside the subscription form.'
                    : '5. Zapisanie się do Newslettera może wiązać się z możliwością otrzymania przez Użytkownika określonych treści cyfrowych (np. e-booka) lub dostępu do usługi cyfrowej (np. kursu) jako korzyści związanej z subskrypcją. Informacja o takiej korzyści będzie wyraźnie wskazana przy formularzu zapisu.'}
                </p>
                <p>
                  {language === 'en'
                    ? '6. If a User wishes to obtain the digital content or service offered as a subscription benefit without subscribing to the Newsletter, they may have the option to purchase it separately, if offered by the Administrator, under terms specified elsewhere.'
                    : '6. Jeżeli Użytkownik chce uzyskać dostęp do treści cyfrowej lub usługi oferowanej jako korzyść za subskrypcję bez zapisywania się do Newslettera, może mieć możliwość ich odrębnego zakupu, jeśli jest to oferowane przez Administratora, na warunkach określonych w innym miejscu.'}
                </p>

                {/* §3 Scope and Frequency */}
                <h3>{language === 'en' ? '§3 Scope and Frequency of the Newsletter' : '§3 Zakres i częstotliwość Newslettera'}</h3>
                <p>
                  {language === 'en'
                    ? '1. The Newsletter may contain:'
                    : '1. Newsletter może zawierać:'}
                </p>
                <ul>
                  <li>{language === 'en' ? 'Educational content such as guides, reports, articles, and videos.' : 'Treści edukacyjne, takie jak poradniki, raporty, artykuły, materiały wideo.'}</li>
                  <li>{language === 'en' ? 'Information about new products, services, courses, or events offered by the Administrator.' : 'Informacje o nowych produktach, usługach, kursach lub wydarzeniach oferowanych przez Administratora.'}</li>
                  <li>{language === 'en' ? 'Commercial information and promotional offers related to the Administrator\'s activities.' : 'Informacje handlowe i oferty promocyjne związane z działalnością Administratora.'}</li>
                  <li>{language === 'en' ? 'Updates regarding the Administrator\'s business or relevant industry news.' : 'Aktualności dotyczące działalności Administratora lub istotnych wydarzeń branżowych.'}</li>
                </ul>
                <p>
                  {language === 'en'
                    ? '2. The Newsletter will be sent periodically. The Administrator aims for regularity but does not guarantee specific sending dates or frequency, although it is not intended to be sent more often than twice per week unless circumstances warrant (e.g., time-sensitive announcements).'
                    : '2. Newsletter będzie wysyłany okresowo. Administrator dąży do regularności, ale nie gwarantuje konkretnych terminów ani częstotliwości wysyłki, przy czym intencją jest wysyłka nie częściej niż dwa razy w tygodniu, chyba że zaistnieją szczególne okoliczności (np. pilne komunikaty).'}
                </p>

                {/* §4 Personal Data Protection */}
                <h3>{language === 'en' ? '§4 Personal Data Protection' : '§4 Ochrona Danych Osobowych'}</h3>
                <h4>{language === 'en' ? '1. Data Controller:' : '1. Administrator Danych:'}</h4>
                <p>
                  {language === 'en'
                    ? `The controller of personal data provided during the Newsletter subscription is SIADLAK Holding Group sp. z o.o., with its registered office in Warsaw, Aleja Jana Pawła II 43A/37B, 01-001 Warszawa. Contact regarding data protection is possible via email at ${placeholderDataProtectionEmail} or by post to the Administrator's registered address.`
                    : `Administratorem danych osobowych podanych podczas zapisu na Newsletter jest SIADLAK Holding Group sp. z o.o., z siedzibą w Warszawie, Aleja Jana Pawła II 43A/37B, 01-001 Warszawa. Kontakt w sprawach ochrony danych osobowych możliwy jest za pośrednictwem adresu e-mail: ${placeholderDataProtectionEmail} lub korespondencyjnie na adres siedziby Administratora.`}
                </p>
                <h4>{language === 'en' ? '2. Purpose and Legal Basis:' : '2. Cel i Podstawa Prawna:'}</h4>
                <p>
                  {language === 'en'
                    ? 'Personal data (email address, name if provided) are processed solely for the purpose of providing the Newsletter service, including sending the confirmation email and subsequent newsletters. The legal basis for processing is the User\'s explicit consent (Article 6(1)(a) of the General Data Protection Regulation - GDPR), expressed during the subscription process via the double opt-in mechanism.'
                    : 'Dane osobowe (adres e-mail, imię, jeśli podano) przetwarzane są wyłącznie w celu świadczenia usługi Newslettera, w tym wysyłki wiadomości e-mail z linkiem potwierdzającym oraz późniejszych wiadomości newsletterowych. Podstawą prawną przetwarzania jest wyraźna zgoda Użytkownika (art. 6 ust. 1 lit. a) Rozporządzenia Ogólnego o Ochronie Danych – RODO), wyrażona podczas procesu zapisu za pomocą mechanizmu double opt-in.'}
                </p>
                <h4>{language === 'en' ? '3. Data Recipients:' : '3. Odbiorcy Danych:'}</h4>
                <p>
                  {language === 'en'
                    ? 'User data may be transferred to trusted third-party service providers who assist the Administrator in delivering the Newsletter service (data processors), such as email marketing platform providers (e.g., MailerLite). These entities process data based on a data processing agreement with the Administrator and only according to its instructions, ensuring adequate data protection standards. Data may be processed within the European Economic Area (EEA). If data is transferred outside the EEA, the Administrator ensures appropriate safeguards are in place (e.g., Standard Contractual Clauses).'
                    : 'Dane Użytkownika mogą być przekazywane zaufanym podmiotom trzecim, które wspierają Administratora w świadczeniu usługi Newslettera (podmioty przetwarzające), takim jak dostawcy platform do e-mail marketingu (np. MailerLite). Podmioty te przetwarzają dane na podstawie umowy powierzenia przetwarzania danych zawartej z Administratorem i wyłącznie zgodnie z jego poleceniami, zapewniając odpowiednie standardy ochrony danych. Dane mogą być przetwarzane na terenie Europejskiego Obszaru Gospodarczego (EOG). W przypadku transferu danych poza EOG, Administrator zapewnia stosowanie odpowiednich zabezpieczeń (np. Standardowych Klauzul Umownych).'}
                </p>
                <h4>{language === 'en' ? '4. Data Retention:' : '4. Okres Przechowywania Danych:'}</h4>
                <p>
                  {language === 'en'
                    ? 'Personal data will be processed for the duration of the Newsletter subscription. Upon withdrawal of consent (unsubscription), the data will be promptly removed from the active mailing list. However, the Administrator may retain archival data (e.g., email address and date of consent/withdrawal) for a limited period necessary to establish, exercise, or defend against potential legal claims, based on the Administrator\'s legitimate interest (Article 6(1)(f) GDPR), typically corresponding to statutory limitation periods.'
                    : 'Dane osobowe będą przetwarzane przez czas trwania subskrypcji Newslettera. Po wycofaniu zgody (rezygnacji z subskrypcji), dane zostaną niezwłocznie usunięte z aktywnej listy mailingowej. Administrator może jednak przechowywać dane archiwalne (np. adres e-mail, data zgody/wycofania) przez ograniczony czas niezbędny do ustalenia, dochodzenia lub obrony przed ewentualnymi roszczeniami, na podstawie prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f) RODO), zazwyczaj odpowiadający ustawowym terminom przedawnienia roszczeń.'}
                </p>
                <h4>{language === 'en' ? '5. User Rights:' : '5. Prawa Użytkownika:'}</h4>
                <p>
                  {language === 'en'
                    ? 'In relation to the processing of personal data, the User has the following rights under GDPR:'
                    : 'W związku z przetwarzaniem danych osobowych, Użytkownikowi przysługują następujące prawa wynikające z RODO:'}
                </p>
                <ul>
                  <li>{language === 'en' ? 'The right to access their data.' : 'Prawo dostępu do swoich danych.'}</li>
                  <li>{language === 'en' ? 'The right to rectify incorrect data.' : 'Prawo do sprostowania (poprawiania) danych.'}</li>
                  <li>{language === 'en' ? 'The right to erase data (\'right to be forgotten\').' : 'Prawo do usunięcia danych („prawo do bycia zapomnianym”).'}</li>
                  <li>{language === 'en' ? 'The right to restrict processing.' : 'Prawo do ograniczenia przetwarzania.'}</li>
                  <li>{language === 'en' ? 'The right to data portability (if applicable).' : 'Prawo do przenoszenia danych (jeśli ma zastosowanie).'}</li>
                  <li>{language === 'en' ? 'The right to object to processing (where applicable).' : 'Prawo do wniesienia sprzeciwu wobec przetwarzania (jeśli ma zastosowanie).'}</li>
                  <li>{language === 'en' ? 'The right to withdraw consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal.' : 'Prawo do cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.'}</li>
                  <li>{language === 'en' ? 'The right to lodge a complaint with the relevant supervisory authority. In Poland, this is the President of the Personal Data Protection Office (Prezes Urzędu Ochrony Danych Osobowych - UODO), ul. Stawki 2, 00-193 Warszawa.' : 'Prawo do wniesienia skargi do organu nadzorczego. W Polsce jest nim Prezes Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa.'}</li>
                </ul>
                <h4>{language === 'en' ? '6. Exercising Rights:' : '6. Realizacja Praw:'}</h4>
                <p>
                  {language === 'en'
                    ? 'Users can exercise their rights, including withdrawing consent (unsubscribing), by clicking the dedicated link provided in every Newsletter email or by contacting the Administrator directly using the contact details specified in §4(1).'
                    : 'Użytkownik może realizować swoje prawa, w tym cofnąć zgodę (wypisać się z Newslettera), klikając dedykowany link znajdujący się w każdej wiadomości Newslettera lub kontaktując się bezpośrednio z Administratorem, korzystając z danych kontaktowych wskazanych w §4 ust. 1.'}
                </p>

                {/* §5 Unsubscription */}
                <h3>{language === 'en' ? '§5 Unsubscription (Withdrawal of Consent)' : '§5 Rezygnacja z Newslettera (Wycofanie Zgody)'}</h3>
                <p>
                  {language === 'en'
                    ? '1. The User may unsubscribe from the Newsletter service at any time and without giving any reason.'
                    : '1. Użytkownik może w każdej chwili i bez podania przyczyny zrezygnować z usługi Newslettera.'}
                </p>
                <p>
                  {language === 'en'
                    ? '2. Unsubscription can be effected by clicking the \'unsubscribe\' link included in the footer of every Newsletter message.'
                    : '2. Rezygnacja następuje poprzez kliknięcie linku „wypisz się” (lub o podobnym znaczeniu) umieszczonego w stopce każdej wiadomości Newslettera.'}
                </p>
                <p>
                  {language === 'en'
                    ? '3. Upon unsubscription, the agreement for the provision of the Newsletter service is terminated, and the User\'s personal data will cease to be processed for this purpose, subject to the retention policy outlined in §4(4).'
                    : '3. Z chwilą rezygnacji umowa o świadczenie usługi Newslettera ulega rozwiązaniu, a dane osobowe Użytkownika przestają być przetwarzane w tym celu, z zastrzeżeniem zasad retencji określonych w §4 ust. 4.'}
                </p>

                {/* §6 Technical Requirements */}
                <h3>{language === 'en' ? '§6 Technical Requirements' : '§6 Wymagania Techniczne'}</h3>
                <p>
                  {language === 'en'
                    ? '1. To subscribe to and receive the Newsletter, the User needs:'
                    : '1. Do zapisania się i otrzymywania Newslettera Użytkownik potrzebuje:'}
                </p>
                 <ul>
                  <li>{language === 'en' ? 'A device with access to the Internet.' : 'Urządzenia z dostępem do Internetu.'}</li>
                  <li>{language === 'en' ? 'An active email account.' : 'Aktywnego konta poczty elektronicznej (e-mail).'}</li>
                  <li>{language === 'en' ? 'A web browser capable of displaying HTML content.' : 'Przeglądarki internetowej umożliwiającej wyświetlanie treści HTML.'}</li>
                  <li>{language === 'en' ? 'Enabled cookies and JavaScript in the browser may be required for the subscription form to function correctly.' : 'Włączona obsługa plików cookies oraz JavaScript w przeglądarce może być konieczna do prawidłowego działania formularza zapisu.'}</li>
                </ul>

                {/* §7 Final Provisions */}
                <h3>{language === 'en' ? '§7 Final Provisions' : '§7 Postanowienia Końcowe'}</h3>
                <p>
                  {language === 'en'
                    ? '1. The Administrator reserves the right to amend this Policy for important reasons, such as:'
                    : '1. Administrator zastrzega sobie prawo do zmiany niniejszego Regulaminu z ważnych przyczyn, takich jak:'}
                </p>
                <ul>
                  <li>{language === 'en' ? 'Changes in applicable laws affecting the Newsletter service or data protection.' : 'Zmiana obowiązujących przepisów prawa mających wpływ na usługę Newslettera lub ochronę danych.'}</li>
                  <li>{language === 'en' ? 'Technological or functional changes to the Newsletter service.' : 'Zmiany technologiczne lub funkcjonalne usługi Newslettera.'}</li>
                  <li>{language === 'en' ? 'Changes in the scope of services provided by the Administrator.' : 'Zmiana zakresu usług świadczonych przez Administratora.'}</li>
                </ul>
                 <p>
                   {language === 'en'
                    ? '2. Users will be informed about any changes to the Policy via email sent to their subscribed address at least 14 days before the changes take effect. The current version of the Policy will always be available on the Administrator\'s website.'
                    : '2. O wszelkich zmianach Regulaminu Użytkownicy zostaną poinformowani za pośrednictwem wiadomości e-mail wysłanej na adres podany przy subskrypcji, z co najmniej 14-dniowym wyprzedzeniem przed wejściem zmian w życie. Aktualna wersja Regulaminu będzie zawsze dostępna na stronie internetowej Administratora.'}
                </p>
                <p>
                  {language === 'en'
                    ? '3. If the User does not accept the amended Policy, they have the right to terminate the agreement by unsubscribing from the Newsletter before the changes come into force. Continued use of the service after the effective date of the changes constitutes acceptance of the amended Policy.'
                    : '3. Jeżeli Użytkownik nie akceptuje zmienionego Regulaminu, ma prawo rozwiązać umowę poprzez rezygnację z Newslettera przed dniem wejścia zmian w życie. Dalsze korzystanie z usługi po wejściu w życie zmian oznacza akceptację zmienionego Regulaminu.'}
                </p>
                <p>
                  {language === 'en'
                    ? '4. This Policy is governed by the laws of Poland and the relevant regulations of the European Union, particularly the GDPR.'
                    : '4. Niniejszy Regulamin podlega prawu polskiemu oraz odpowiednim regulacjom Unii Europejskiej, w szczególności RODO.'}
                </p>

              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex justify-between items-center">
              <Link
                to={getLocalizedPath("/legal")}
                className="inline-flex items-center px-4 py-2 bg-neural-violet hover:bg-neural-violet/90 text-white rounded-md transition-colors"
              >
                {language === 'en' ? '← Back to Legal' : '← Powrót do Informacji Prawnych'}
              </Link>

              <Link
                to={getLocalizedPath("/contact")}
                className="inline-flex items-center px-4 py-2 bg-neural-violet hover:bg-neural-violet/90 text-white rounded-md transition-colors"
              >
                {language === 'en' ? 'Contact Us' : 'Kontakt'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsNewsletter;
