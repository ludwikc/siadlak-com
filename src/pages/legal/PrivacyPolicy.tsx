import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Shield as PrivacyIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { language, getLocalizedPath } = useLanguage();

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'en' ? 'Privacy Policy' : 'Polityka Prywatności'}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              {language === 'en' 
                ? 'How we collect, use, and protect your personal information' 
                : 'Jak zbieramy, wykorzystujemy i chronimy Twoje dane osobowe'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-xl mb-8">
              <div className="flex items-center mb-6">
                <PrivacyIcon size={24} className="mr-3 text-neural-violet dark:text-luminal-magenta" />
                <h2 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                  {language === 'en' ? 'Privacy Policy' : 'Polityka Prywatności'}
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-deep-charcoal/80 dark:text-silver-mist/80">
                {language === 'en' ? (
                  <>
                    <h2>§1 General Provisions</h2>
                    <p>This Privacy Policy ("Policy") governs the processing of personal data of users ("Users") of websites operated by <strong>SIADLAK Holding Group sp. z o.o.</strong> (hereinafter referred to as the "Data Controller").</p>
                    <p>This Policy applies to the following websites (each referred to as the "Website"):</p>
                    <ul>
                      <li>siadlak.com</li>
                      <li>platforma.siadlak.com</li>
                      <li>hackerzy.pl</li>
                      <li>silnaglowa.pl</li>
                      <li>uwaznezycie.pl</li>
                      <li>autentycznerelacje.pl</li>
                      <li>personaldevelopment.pl</li>
                      <li>mistrzowiekomunikacji.pl</li>
                      <li>mentalelevator.pl</li>
                      <li>trainthetrainer.pl</li>
                      <li>cloudhackers.pl</li>
                    </ul>
                    <p>and other websites operated by the Data Controller that fall under this Policy.</p>
                    <p>The Data Controller reserves the right to update this list, with changes communicated to Users accordingly.</p>

                    <h2>§2 Data Controller</h2>
                    <p>The Data Controller for Users' personal data is:</p>
                    <p><strong>SIADLAK Holding Group sp. z o.o.</strong><br />
                    Registered office: Aleja Jana Pawła II 43A/37B, 01-001 Warsaw, Poland<br />
                    Registered in the National Court Register (KRS) under No. <strong>0001141743</strong><br />
                    Tax ID (NIP): <strong>5273141363</strong>, REGON: <strong>540328107</strong></p>
                    <p><strong>Contact details:</strong></p>
                    <ul>
                      <li>Correspondence address: Aleja Jana Pawła II 43A/37B, 01-001 Warsaw</li>
                      <li>Email: legal@siadlak.email</li>
                      <li>Phone: +49 162 9332261</li>
                    </ul>

                    <h2>§3 Scope and Purpose of Personal Data Processing</h2>
                    <h3>3.1. Data Collected from Users</h3>
                    <p>The Data Controller may process the following personal data:</p>
                    <ul>
                      <li><strong>Identification data:</strong> Name, surname, username (nickname).</li>
                      <li><strong>Contact details:</strong> Email address, phone number.</li>
                      <li><strong>Technical data:</strong> IP address, device and browser information.</li>
                      <li><strong>Activity data:</strong> Content published by Users, participation in courses, workshops, or community events.</li>
                      <li><strong>Image data:</strong> Recordings from community meetings, workshops, or other Website-related activities.</li>
                    </ul>

                    <h3>3.2. Legal Bases and Purposes of Processing</h3>
                    <ol>
                      <li><strong>Performance of an electronic services agreement:</strong>
                        <ul>
                          <li><strong>Purpose:</strong> Providing access to the Website and functionalities related to courses and community participation.</li>
                          <li><strong>Legal basis:</strong> Art. 6(1)(b) GDPR (processing necessary for contract performance).</li>
                        </ul>
                      </li>
                      <li><strong>Direct marketing of the Data Controller's products/services:</strong>
                        <ul>
                          <li><strong>Purpose:</strong> Sending commercial communications, offers, and newsletters.</li>
                          <li><strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interest); for electronic communications, User consent under the Electronic Services Act.</li>
                        </ul>
                      </li>
                      <li><strong>Recording and dissemination of image data:</strong>
                        <ul>
                          <li><strong>Purpose:</strong> Sharing recordings of community events and promoting the Website.</li>
                          <li><strong>Legal basis:</strong> Art. 6(1)(a) GDPR (User consent).</li>
                        </ul>
                      </li>
                      <li><strong>Compliance with legal obligations:</strong>
                        <ul>
                          <li><strong>Purpose:</strong> Maintaining accounting records, handling complaints.</li>
                          <li><strong>Legal basis:</strong> Art. 6(1)(c) GDPR (legal obligation).</li>
                        </ul>
                      </li>
                      <li><strong>Website security and fraud prevention:</strong>
                        <ul>
                          <li><strong>Purpose:</strong> Monitoring User activity, detecting irregularities.</li>
                          <li><strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interest).</li>
                        </ul>
                      </li>
                    </ol>

                    <h2>§4 Recipients of Personal Data</h2>
                    <p>User data may be disclosed to:</p>
                    <ol>
                      <li><strong>Processors acting on behalf of the Data Controller:</strong>
                        <ul>
                          <li><strong>Discord Inc.</strong> (for communication via Discord).</li>
                          <li><strong>Discourse Holdings, Inc.</strong> (for forum management).</li>
                          <li>IT service providers (hosting, maintenance).</li>
                          <li>Accounting firms (for financial compliance).</li>
                        </ul>
                      </li>
                      <li><strong>Public authorities or law enforcement:</strong>
                        <ul>
                          <li>Where required by law or valid legal request.</li>
                        </ul>
                      </li>
                    </ol>

                    <h2>§5 International Data Transfers</h2>
                    <p>Data may be transferred outside the European Economic Area (EEA) to third countries (e.g., via Discord or Discourse). Transfers comply with GDPR Chapter V, using:</p>
                    <ul>
                      <li><strong>EU Standard Contractual Clauses.</strong></li>
                      <li><strong>Other appropriate safeguards</strong> under GDPR.</li>
                    </ul>
                    <p>Users may request a copy of their transferred data.</p>

                    <h2>§6 Data Retention Periods</h2>
                    <p>Personal data is retained only as necessary:</p>
                    <ul>
                      <li><strong>Contract performance:</strong> Duration of the agreement plus statutory limitation periods.</li>
                      <li><strong>Consent-based processing:</strong> Until consent is withdrawn.</li>
                      <li><strong>Legal obligations:</strong> As required by law (e.g., accounting regulations).</li>
                      <li><strong>User-generated content:</strong> Until account deletion, subject to applicable licenses or consents.</li>
                    </ul>

                    <h2>§7 User Rights</h2>
                    <p>Users have the right to:</p>
                    <ol>
                      <li>Access their data.</li>
                      <li>Rectify inaccurate data.</li>
                      <li>Request erasure ("right to be forgotten").</li>
                      <li>Restrict processing.</li>
                      <li>Data portability.</li>
                      <li>Object to processing (legitimate interest basis).</li>
                      <li>Withdraw consent (without affecting prior lawful processing).</li>
                      <li>Lodge a complaint with the <a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer">Polish Data Protection Authority</a>.</li>
                    </ol>

                    <h2>§8 Cookies and Tracking Technologies</h2>
                    <h3>8.1. Types of Cookies Used</h3>
                    <ul>
                      <li><strong>Essential:</strong> Enable core Website functionality (e.g., login).</li>
                      <li><strong>Analytical:</strong> Anonymous usage statistics (e.g., Google Analytics).</li>
                      <li><strong>Marketing:</strong> Personalized ads (e.g., Meta Pixel, Google Ads).</li>
                      <li><strong>Functional:</strong> User preference storage (e.g., language settings).</li>
                    </ul>

                    <h3>8.2. Managing Cookies</h3>
                    <p>Users may adjust browser settings to control cookies.</p>

                    <h3>8.3. Third-Party Providers</h3>
                    <p>Tools from <strong>Google LLC</strong>, <strong>Meta Platforms Inc.</strong>, and <strong>LinkedIn Inc.</strong> may transfer data outside the EEA under GDPR safeguards.</p>

                    <h2>§9 Data Security</h2>
                    <p>The Data Controller implements technical and organizational measures compliant with GDPR to protect User data.</p>

                    <h2>§10 Policy Updates</h2>
                    <p>This Policy may be amended to reflect legal or operational changes. Users will be notified of updates via the Website.</p>

                    <h2>§11 Contact</h2>
                    <p>For inquiries regarding personal data processing, contact:</p>
                    <ul>
                      <li><strong>Email:</strong> legal@siadlak.email</li>
                      <li><strong>Postal address:</strong> Aleja Jana Pawła II 43A/37B, 01-001 Warsaw</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <h2>§1 Informacje ogólne</h2>
                    <p>Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych Użytkowników serwisów internetowych prowadzonych przez SIADLAK Holding Group sp. z o.o. (zwanego dalej "Administratorem").</p>
                    <p>Polityka Prywatności dotyczy następujących serwisów internetowych (każdy z nich zwany dalej "Serwisem"):</p>
                    <ul>
                      <li>siadlak.com</li>
                      <li>platfroma.siadlak.com</li>
                      <li>hackerzy.pl</li>
                      <li>silnaglowa.pl</li>
                      <li>uwaznezycie.pl</li>
                      <li>autentycznerelacje.pl</li>
                      <li>personaldevelopment.pl</li>
                      <li>mistrzowiekomunikacji.pl</li>
                      <li>mentalelevator.pl</li>
                      <li>trainthetrainer.pl</li>
                      <li>cloudhackers.pl</li>
                    </ul>
                    <p>oraz innych serwisów prowadzonych przez Administratora, które są objęte niniejszą Polityką.</p>
                    <p>Administrator zastrzega sobie prawo do aktualizacji tej listy, a zmiany będą odpowiednio komunikowane Użytkownikom.</p>

                    <h2>§2 Administrator Danych Osobowych</h2>
                    <p>Administratorem danych osobowych Użytkowników Serwisów jest SIADLAK Holding Group sp. z o.o., z siedzibą w Warszawie, Aleja Jana Pawła II 43A/37B, 01-001 Warszawa, wpisaną do rejestru przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS: 0001141743, NIP: 5273141363, REGON: 540328107.</p>
                    <p>Dane kontaktowe Administratora:</p>
                    <ul>
                      <li>Adres korespondencyjny: Aleja Jana Pawła II 43A/37B, 01-001 Warszawa</li>
                      <li>Adres e-mail: legal@siadlak.email</li>
                      <li>Numer telefonu: +49 162 9332261</li>
                    </ul>

                    <h2>§3 Zakres i cel przetwarzania danych osobowych</h2>
                    <h3>3.1. Dane zbierane od Użytkowników</h3>
                    <p>Administrator może przetwarzać następujące dane osobowe Użytkowników:</p>
                    <ul>
                      <li>Dane identyfikacyjne: imię, nazwisko, pseudonim (nick) w Serwisie.</li>
                      <li>Dane kontaktowe: adres e-mail, numer telefonu.</li>
                      <li>Dane techniczne: adres IP, dane dotyczące urządzenia i przeglądarki internetowej.</li>
                      <li>Dane związane z aktywnością w Serwisie: treści publikowane przez Użytkownika, informacje o uczestnictwie w kursach, warsztatach i spotkaniach społeczności.</li>
                      <li>Wizerunek: utrwalony podczas spotkań społeczności, warsztatów oraz innych aktywności w ramach Serwisu.</li>
                    </ul>

                    <h3>3.2. Cele i podstawy prawne przetwarzania</h3>
                    <ol>
                      <li>Realizacja umowy o świadczenie usług drogą elektroniczną:
                        <ul>
                          <li>Cel: zapewnienie Użytkownikowi dostępu do Serwisu oraz funkcjonalności związanych z uczestnictwem w kursach i społeczności.</li>
                          <li>Podstawa prawna: art. 6 ust. 1 lit. b) RODO (przetwarzanie niezbędne do wykonania umowy).</li>
                        </ul>
                      </li>
                      <li>Marketing bezpośredni własnych produktów i usług Administratora:
                        <ul>
                          <li>Cel: przesyłanie informacji handlowych, ofert, newsletterów.</li>
                          <li>Podstawa prawna: art. 6 ust. 1 lit. f) RODO (prawnie uzasadniony interes Administratora); w przypadku komunikacji elektronicznej również zgoda Użytkownika zgodnie z ustawą o świadczeniu usług drogą elektroniczną.</li>
                        </ul>
                      </li>
                      <li>Utrwalanie i rozpowszechnianie wizerunku:
                        <ul>
                          <li>Cel: udostępnianie nagrań ze spotkań społeczności, warsztatów oraz promocja Serwisu.</li>
                          <li>Podstawa prawna: art. 6 ust. 1 lit. a) RODO (zgoda Użytkownika).</li>
                        </ul>
                      </li>
                      <li>Wypełnienie obowiązków prawnych ciążących na Administratorze:
                        <ul>
                          <li>Cel: prowadzenie dokumentacji księgowej, rozpatrywanie reklamacji.</li>
                          <li>Podstawa prawna: art. 6 ust. 1 lit. c) RODO (wypełnienie obowiązku prawnego).</li>
                        </ul>
                      </li>
                      <li>Zapewnienie bezpieczeństwa Serwisu i przeciwdziałanie nadużyciom:
                        <ul>
                          <li>Cel: monitorowanie aktywności Użytkowników, wykrywanie nieprawidłowości.</li>
                          <li>Podstawa prawna: art. 6 ust. 1 lit. f) RODO (prawnie uzasadniony interes Administratora).</li>
                        </ul>
                      </li>
                    </ol>

                    <h2>§4 Odbiorcy danych osobowych</h2>
                    <p>Dane osobowe Użytkowników mogą być przekazywane następującym kategoriom odbiorców:</p>
                    <ol>
                      <li>Podmioty przetwarzające dane w imieniu Administratora (procesorzy):
                        <ul>
                          <li>Discord Inc.: w zakresie niezbędnym do prowadzenia komunikacji w ramach platformy Discord.</li>
                          <li>Discourse Holdings, Inc.: w zakresie niezbędnym do prowadzenia forum w ramach platformy Discourse.</li>
                          <li>Dostawcy usług IT: zapewniający hosting, utrzymanie i rozwój Serwisu.</li>
                          <li>Biura rachunkowe: w zakresie niezbędnym do prowadzenia księgowości.</li>
                        </ul>
                      </li>
                      <li>Organy publiczne i uprawnione instytucje:
                        <ul>
                          <li>W przypadku obowiązku prawnego lub na podstawie żądania zgodnego z przepisami prawa.</li>
                        </ul>
                      </li>
                    </ol>

                    <h2>§5 Przekazywanie danych poza Europejski Obszar Gospodarczy (EOG)</h2>
                    <p>Dane osobowe mogą być przekazywane do państw trzecich (poza EOG) w związku z korzystaniem z usług podmiotów takich jak Discord Inc. i Discourse Holdings, Inc.</p>
                    <p>Administrator zapewnia, że przekazywanie danych odbywa się zgodnie z rozdziałem V RODO, w oparciu o:</p>
                    <ul>
                      <li>Standardowe klauzule umowne zatwierdzone przez Komisję Europejską.</li>
                      <li>Inne odpowiednie zabezpieczenia przewidziane przez RODO.</li>
                    </ul>
                    <p>Użytkownik ma prawo uzyskać kopię swoich danych przekazywanych do państw trzecich.</p>

                    <h2>§6 Okres przechowywania danych</h2>
                    <p>Dane osobowe Użytkowników będą przechowywane przez okres niezbędny do realizacji celów przetwarzania, w szczególności:</p>
                    <ul>
                      <li>Dane przetwarzane w celu realizacji umowy: przez okres trwania umowy, a po jej zakończeniu przez okres przedawnienia roszczeń (zgodnie z przepisami Kodeksu cywilnego).</li>
                      <li>Dane przetwarzane na podstawie zgody: do momentu wycofania zgody przez Użytkownika.</li>
                      <li>Dane przetwarzane w celu wypełnienia obowiązków prawnych: przez okres wymagany przepisami prawa (np. ustawy o rachunkowości).</li>
                      <li>Dane związane z aktywnością w Serwisie: do czasu usunięcia konta Użytkownika, z zastrzeżeniem udzielonej licencji i zgody na wykorzystanie wizerunku.</li>
                    </ul>

                    <h2>§7 Prawa Użytkownika</h2>
                    <p>Użytkownikowi przysługują następujące prawa w związku z przetwarzaniem jego danych osobowych:</p>
                    <ol>
                      <li>Prawo dostępu do danych – uzyskania informacji o przetwarzaniu danych oraz kopii danych.</li>
                      <li>Prawo sprostowania danych – żądania poprawienia nieprawidłowych lub uzupełnienia niekompletnych danych.</li>
                      <li>Prawo usunięcia danych – żądania usunięcia danych w przypadkach przewidzianych przez RODO (tzw. "prawo do bycia zapomnianym").</li>
                      <li>Prawo ograniczenia przetwarzania – żądania ograniczenia przetwarzania danych w określonych sytuacjach.</li>
                      <li>Prawo przenoszenia danych – otrzymania danych w ustrukturyzowanym formacie oraz prawo przesłania ich innemu administratorowi.</li>
                      <li>Prawo sprzeciwu – wniesienia sprzeciwu wobec przetwarzania danych na podstawie prawnie uzasadnionego interesu Administratora.</li>
                      <li>Prawo wycofania zgody – w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem.</li>
                      <li>Prawo wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych.</li>
                    </ol>

                    <h2>§8 Pliki cookies i inne technologie</h2>
                    <p>Pliki cookies to niewielkie pliki tekstowe, które są przechowywane na urządzeniu Użytkownika podczas korzystania z Serwisu.</p>

                    <h3>8.1. Rodzaje plików cookies stosowanych w Serwisie</h3>
                    <ul>
                      <li>Cookies niezbędne: zapewniają prawidłowe działanie Serwisu (np. logowanie, dostęp do zabezpieczonych obszarów).</li>
                      <li>Cookies analityczne: zbierają anonimowe dane statystyczne o sposobie korzystania z Serwisu (np. Google Analytics).</li>
                      <li>Cookies marketingowe: umożliwiają wyświetlanie spersonalizowanych reklam (np. Meta Pixel, Google Ads, LinkedIn Ads).</li>
                      <li>Cookies funkcjonalne: zapamiętują preferencje Użytkownika (np. wybór języka).</li>
                    </ul>

                    <h3>8.2. Cel wykorzystywania plików cookies</h3>
                    <p>Pliki cookies są używane w celu:</p>
                    <ul>
                      <li>Umożliwienia korzystania z podstawowych funkcji Serwisu,</li>
                      <li>Optymalizacji działania Serwisu,</li>
                      <li>Analizy ruchu i zachowań Użytkowników,</li>
                      <li>Dostosowania treści i reklam do zainteresowań Użytkownika.</li>
                    </ul>

                    <h3>8.3. Zarządzanie plikami cookies</h3>
                    <p>Użytkownik może w dowolnym momencie zmienić ustawienia dotyczące plików cookies w przeglądarce internetowej. Więcej informacji o zarządzaniu cookies można znaleźć w sekcji pomocy używanej przeglądarki.</p>

                    <h3>8.4. Współpraca z zewnętrznymi dostawcami</h3>
                    <p>Serwis korzysta z narzędzi dostarczanych przez:</p>
                    <ul>
                      <li>Google LLC (Google Analytics): analiza ruchu w Serwisie,</li>
                      <li>Meta Platforms Inc. (Meta Pixel): personalizacja reklam.</li>
                      <li>LinkedIn Inc. (LinkedIn Pixel): personalizacja reklam.</li>
                    </ul>
                    <p>Dane mogą być przekazywane do państw trzecich (poza EOG) zgodnie z obowiązującymi przepisami, na podstawie standardowych klauzul umownych zatwierdzonych przez Komisję Europejską.</p>

                    <h3>8.5. Okres przechowywania cookies</h3>
                    <p>Cookies są przechowywane na urządzeniu Użytkownika przez okres wskazany w ustawieniach przeglądarki lub do momentu ich usunięcia przez Użytkownika.</p>

                    <h2>§9 Bezpieczeństwo danych osobowych</h2>
                    <p>Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych osobowych, zgodnie z przepisami RODO.</p>

                    <h2>§10 Zmiany Polityki Prywatności</h2>
                    <p>Administrator zastrzega sobie prawo do zmiany niniejszej Polityki Prywatności w przypadku zmiany przepisów prawa lub warunków funkcjonowania Serwisu.</p>
                    <p>O wszelkich zmianach Użytkownicy zostaną poinformowani z odpowiednim wyprzedzeniem poprzez publikację nowej wersji Polityki w Serwisie.</p>

                    <h2>§11 Kontakt z Administratorem</h2>
                    <p>W przypadku pytań lub wniosków dotyczących przetwarzania danych osobowych, Użytkownik może skontaktować się z Administratorem:</p>
                    <ul>
                      <li>Adres e-mail: legal@siadlak.email</li>
                      <li>Adres korespondencyjny: Aleja Jana Pawła II 43A/37B, 01-001 Warszawa</li>
                    </ul>
                  </>
                )}
              </div>
            </div>
            
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

export default PrivacyPolicy;