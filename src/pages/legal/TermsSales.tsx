import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ShoppingCart as SalesIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsSales = () => {
  const { language, getLocalizedPath } = useLanguage();

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'en' ? 'Terms and Conditions (Sales)' : 'Regulamin (Sprzedaż)'}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              {language === 'en'
                ? 'Terms governing the purchase of our products and services'
                : 'Warunki regulujące zakup naszych produktów i usług'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-xl mb-8">
              <div className="flex items-center mb-6">
                <SalesIcon size={24} className="mr-3 text-neural-violet dark:text-luminal-magenta" />
                <h2 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                  {language === 'en' ? 'Terms and Conditions (Sales)' : 'Regulamin (Sprzedaż)'}
                </h2>
              </div>

              {/* Dynamically Rendered Terms Content */}
              <div className="prose prose-lg max-w-none text-deep-charcoal/80 dark:text-silver-mist/80">
                <p>
                  <strong>{language === 'en' ? 'Document Version:' : 'Wersja dokumentu:'}</strong> 1.1
                  <br />
                  <strong>{language === 'en' ? 'Effective Date:' : 'Data obowiązywania:'}</strong> {language === 'en' ? '[Date - e.g., 13 April 2025]' : '[Data - np. 13 kwietnia 2025]'}
                </p>

                {/* Section 1 */}
                <h2>{language === 'en' ? '§1 General Provisions & Parties' : '§1 Postanowienia ogólne i Strony Umowy'}</h2>
                <p>
                  {language === 'en'
                    ? 'These Terms of Sale (hereinafter "Terms") govern the rules and conditions for purchasing and using online courses and other digital content or services offered via the Seller\'s website.'
                    : 'Niniejszy Regulamin Sprzedaży (dalej „Regulamin”) określa zasady i warunki zakupu oraz korzystania z kursów online oraz innych treści lub usług cyfrowych oferowanych za pośrednictwem strony internetowej Sprzedawcy.'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'Seller:' : 'Sprzedawca:'}</strong>{' '}
                  {language === 'en'
                    ? 'The products/services are sold by Siadlak Consulting Sp. z o.o., with its registered office at [Insert Address], entered into the Register of Entrepreneurs of the National Court Register under KRS number: [Insert KRS Number], NIP (Tax Identification Number): [Insert NIP Number], REGON (National Business Registry Number): [Insert REGON Number] (hereinafter "Seller").'
                    : 'Produkty/usługi sprzedawane są przez Siadlak Consulting Sp. z o.o., z siedzibą w [tu podaj adres], wpisaną do rejestru przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS: [tu podaj numer], NIP: [tu podaj numer], REGON: [tu podaj numer] (dalej „Sprzedawca”).'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'Data Controller:' : 'Administrator Danych Osobowych:'}</strong>{' '}
                  {language === 'en'
                    ? 'The controller of personal data processed in connection with the execution of orders is SIADLAK Holding Group Sp. z o.o., with its registered office in Warsaw, Aleja Jana Pawła II 43A/37B, 01-001 Warszawa, entered into the Register of Entrepreneurs KRS: 0001141743, NIP: 5273141363, REGON: 540328107 (hereinafter "Data Controller"). Data processing occurs based on an internal data processing agreement between the Seller and the Data Controller. Detailed information on data processing is available in the Privacy Policy [Suggest linking Privacy Policy here].'
                    : 'Administratorem danych osobowych przetwarzanych w związku z realizacją zamówień jest SIADLAK Holding Group Sp. z o.o., z siedzibą w Warszawie, Aleja Jana Pawła II 43A/37B, 01-001 Warszawa, wpisana do rejestru przedsiębiorców KRS: 0001141743, NIP: 5273141363, REGON: 540328107 (dalej „Administrator Danych”). Przetwarzanie danych odbywa się na podstawie wewnętrznej umowy powierzenia przetwarzania danych osobowych pomiędzy Sprzedawcą a Administratorem Danych. Szczegółowe informacje dotyczące przetwarzania danych dostępne są w Polityce Prywatności [Sugerowane podlinkowanie Polityki Prywatności].'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'Contact Information for matters related to purchases and order execution:' : 'Dane kontaktowe w sprawach związanych z zakupami i realizacją zamówień:'}</strong>
                  <br />
                  {language === 'en' ? 'Email: kontakt@siadlak.email' : 'E-mail: kontakt@siadlak.email'}
                  <br />
                  {language === 'en' ? 'Phone: +49 162 833 2261' : 'Telefon: +49 162 833 2261'}
                </p>
                <p>
                  {language === 'en'
                    ? 'These Terms form an integral part of the sales agreement concluded between the Seller and the User. Acceptance of the Terms is required to place an order.'
                    : 'Niniejszy Regulamin stanowi integralną część umowy sprzedaży zawieranej pomiędzy Sprzedawcą a Użytkownikiem. Akceptacja Regulaminu jest warunkiem złożenia zamówienia.'}
                </p>

                {/* Section 2 */}
                <h2>{language === 'en' ? '§2 Definitions' : '§2 Definicje'}</h2>
                <p>
                  <strong>{language === 'en' ? 'Digital Content:' : 'Treść Cyfrowa:'}</strong>{' '}
                  {language === 'en'
                    ? 'Data produced and supplied in digital form, such as online courses, e-books, video materials, templates, accessed via download or streaming.'
                    : 'Dane wytwarzane i dostarczane w postaci cyfrowej, takie jak kursy online, e-booki, materiały wideo, szablony, dostępne poprzez pobranie lub streaming.'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'Digital Service:' : 'Usługa Cyfrowa:'}</strong>{' '}
                  {language === 'en'
                    ? 'A service allowing the User to create, process, store or access data in digital form, or enabling sharing or interaction with data uploaded by users, such as access to an online learning platform.'
                    : 'Usługa pozwalająca Użytkownikowi na wytwarzanie, przetwarzanie, przechowywanie lub dostęp do danych w postaci cyfrowej, lub usługa pozwalająca na udostępnianie lub interakcję z danymi przesłanymi przez użytkowników, np. dostęp do platformy e-learningowej.'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'User:' : 'Użytkownik:'}</strong>{' '}
                  {language === 'en'
                    ? 'A natural person, legal person, or organizational unit without legal personality, purchasing Digital Content or Digital Services from the Seller. This includes:'
                    : 'Osoba fizyczna, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, dokonująca zakupu Treści Cyfrowych lub Usług Cyfrowych od Sprzedawcy. Obejmuje to:'}
                </p>
                <ul>
                  <li>
                    <strong>{language === 'en' ? 'Consumer:' : 'Konsument:'}</strong>{' '}
                    {language === 'en'
                      ? 'A natural person concluding an agreement with the Seller for purposes not directly related to their trade, business, craft, or profession.'
                      : 'Osoba fizyczna zawierająca umowę ze Sprzedawcą w celu niezwiązanym bezpośrednio z jej działalnością gospodarczą lub zawodową.'}
                  </li>
                  <li>
                    <strong>{language === 'en' ? 'Business Customer:' : 'Przedsiębiorca:'}</strong>{' '}
                    {language === 'en'
                      ? 'A User (natural person, legal person, or organizational unit) concluding an agreement directly related to their trade, business, craft, or profession. Certain consumer rights (like the statutory right of withdrawal) may not apply or may be modified for Business Customers as indicated herein or by law.'
                      : 'Użytkownik (osoba fizyczna, prawna lub jednostka organizacyjna) zawierający umowę bezpośrednio związaną z jego działalnością gospodarczą lub zawodową. Niektóre prawa konsumenckie (jak ustawowe prawo do odstąpienia od umowy) mogą nie mieć zastosowania lub być zmodyfikowane w stosunku do Przedsiębiorców, zgodnie ze wskazaniami w Regulaminie lub przepisami prawa.'}
                  </li>
                </ul>
                <p>
                  <strong>{language === 'en' ? 'Sales Agreement:' : 'Umowa Sprzedaży:'}</strong>{' '}
                  {language === 'en'
                    ? 'The agreement for the supply of Digital Content or Digital Service concluded between the Seller and the User via the Seller\'s online store/platform upon acceptance of the User\'s order.'
                    : 'Umowa o dostarczenie Treści Cyfrowej lub świadczenie Usługi Cyfrowej zawarta pomiędzy Sprzedawcą a Użytkownikiem za pośrednictwem sklepu internetowego/platformy Sprzedawcy po akceptacji zamówienia Użytkownika.'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'Platform:' : 'Platforma:'}</strong>{' '}
                  {language === 'en'
                    ? 'The online environment (website, learning management system) through which the Seller provides access to the purchased Digital Content or Digital Service.'
                    : 'Środowisko internetowe (strona www, system zarządzania nauczaniem), za pośrednictwem którego Sprzedawca zapewnia dostęp do zakupionej Treści Cyfrowej lub Usługi Cyfrowej.'}
                </p>

                {/* Section 3 */}
                <h2>{language === 'en' ? '§3 Placing Orders & Conclusion of the Agreement' : '§3 Składanie Zamówień i Zawarcie Umowy'}</h2>
                <p>
                  {language === 'en'
                    ? 'Orders for Digital Content or Digital Services can be placed via the Seller\'s website [Insert Website Address].'
                    : 'Zamówienia na Treści Cyfrowe lub Usługi Cyfrowe można składać za pośrednictwem strony internetowej Sprzedawcy [Wstaw Adres Strony WWW].'}
                </p>
                <p>
                  {language === 'en'
                    ? 'Placing an order involves selecting the desired product/service, completing the order form with required details (including billing information and email address for delivery/access), choosing a payment method, and accepting these Terms and the Privacy Policy.'
                    : 'Złożenie zamówienia obejmuje wybór produktu/usługi, wypełnienie formularza zamówienia wymaganymi danymi (w tym danymi do faktury i adresem e-mail do dostawy/dostępu), wybór metody płatności oraz akceptację niniejszego Regulaminu i Polityki Prywatności.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'All prices listed on the website are gross prices (inclusive of applicable VAT) stated in the currency indicated. The total price including all charges is displayed before finalizing the order.'
                    : 'Wszystkie ceny podane na stronie internetowej są cenami brutto (zawierają należny podatek VAT) i są wyrażone w podanej walucie. Całkowita cena wraz ze wszystkimi opłatami jest widoczna przed finalizacją zamówienia.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'The Sales Agreement is concluded when the User receives an email confirmation from the Seller acknowledging receipt and acceptance of the order, typically sent after successful payment processing.'
                    : 'Umowa Sprzedaży zostaje zawarta w chwili otrzymania przez Użytkownika wiadomości e-mail od Sprzedawcy potwierdzającej przyjęcie i akceptację zamówienia, wysyłanej zazwyczaj po pomyślnym przetworzeniu płatności.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'The User is responsible for providing accurate and current data in the order form.'
                    : 'Użytkownik jest odpowiedzialny za podanie prawidłowych i aktualnych danych w formularzu zamówienia.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'Available payment methods are indicated during the order process (e.g., bank transfer, payment card, online payment gateways like Stripe, PayPal).'
                    : 'Dostępne metody płatności są wskazane w procesie składania zamówienia (np. przelew bankowy, karta płatnicza, systemy płatności online jak Stripe, PayPal).'}
                </p>

                {/* Section 4 */}
                <h2>{language === 'en' ? '§4 Order Fulfilment & Access' : '§4 Realizacja Zamówienia i Dostęp'}</h2>
                <p>
                  {language === 'en'
                    ? 'Access to the Digital Content or Digital Service is granted after the Seller receives confirmation of successful payment, unless otherwise specified in the product description (e.g., pre-orders).'
                    : 'Dostęp do Treści Cyfrowej lub Usługi Cyfrowej jest udzielany po otrzymaniu przez Sprzedawcę potwierdzenia pomyślnej płatności, chyba że opis produktu stanowi inaczej (np. przedsprzedaż).'}
                </p>
                 <p>
                  {language === 'en'
                    ? 'Access details (e.g., login credentials, access links) will be sent to the email address provided by the User during the order process.'
                    : 'Dane dostępowe (np. dane do logowania, linki dostępowe) zostaną przesłane na adres e-mail podany przez Użytkownika podczas składania zamówienia.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'Access is typically granted immediately or within a short timeframe (e.g., minutes to a few hours) after payment confirmation. Any foreseen delays will be communicated.'
                    : 'Dostęp jest zazwyczaj udzielany niezwłocznie lub w krótkim czasie (np. od kilku minut do kilku godzin) po potwierdzeniu płatności. O ewentualnych przewidywanych opóźnieniach Użytkownik zostanie poinformowany.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'Unless otherwise stated, access to the Digital Content/Service (e.g., online course) is granted for the period specified in the product description (e.g., lifetime access, 12 months).'
                    : 'O ile nie wskazano inaczej, dostęp do Treści Cyfrowej/Usługi Cyfrowej (np. kursu online) jest udzielany na okres wskazany w opisie produktu (np. dostęp dożywotni, na 12 miesięcy).'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'License Grant:' : 'Udzielenie Licencji:'}</strong>{' '}
                  {language === 'en'
                    ? 'Purchase grants the User a non-exclusive, non-transferable, non-sublicensable license to access and use the Digital Content/Service strictly for their own personal or internal business purposes (as applicable), according to §7.'
                    : 'Zakup udziela Użytkownikowi niewyłącznej, nieprzenoszalnej, niepodlegającej sublicencjonowaniu licencji na dostęp i korzystanie z Treści Cyfrowej/Usługi Cyfrowej wyłącznie na własny użytek osobisty lub wewnętrzny użytek biznesowy (jeśli dotyczy), zgodnie z §7.'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'Single User Restriction:' : 'Ograniczenie do Jednego Użytkownika:'}</strong>{' '}
                  {language === 'en'
                    ? 'Access credentials (login/password) are strictly personal and assigned to the individual User (or a single designated individual if purchased by a company for one employee, unless a multi-user license is explicitly purchased). Sharing access credentials or allowing multiple individuals to use a single license is strictly prohibited.'
                    : 'Dane dostępowe (login/hasło) są ściśle osobiste i przypisane do konkretnego Użytkownika (lub jednej wskazanej osoby, jeśli zakup dokonany przez firmę dla jednego pracownika, chyba że zakupiono licencję wielostanowiskową). Udostępnianie danych dostępowych lub zezwalanie wielu osobom na korzystanie z jednej licencji jest surowo zabronione.'}
                </p>
                 <p>
                  <strong>{language === 'en' ? 'Technical Requirements:' : 'Wymagania Techniczne:'}</strong>{' '}
                  {language === 'en'
                    ? 'Accessing the Digital Content/Service requires:'
                    : 'Dostęp do Treści Cyfrowej/Usługi Cyfrowej wymaga:'}
                </p>
                <ul>
                  <li>{language === 'en' ? 'A device (computer, tablet, smartphone) with internet access.' : 'Urządzenia (komputer, tablet, smartfon) z dostępem do Internetu.'}</li>
                  <li>{language === 'en' ? 'An up-to-date web browser (e.g., Chrome, Firefox, Safari, Edge).' : 'Aktualnej przeglądarki internetowej (np. Chrome, Firefox, Safari, Edge).'}</li>
                  <li>{language === 'en' ? 'An active email account (provided during purchase).' : 'Aktywnego konta e-mail (podanego przy zakupie).'}</li>
                  <li>{language === 'en' ? 'Possibly specific software (e.g., PDF reader) or browser plugins, as indicated in the product description.' : 'Ewentualnie określonego oprogramowania (np. czytnik PDF) lub wtyczek do przeglądarki, wskazanych w opisie produktu.'}</li>
                  <li>{language === 'en' ? 'Sufficient internet bandwidth for streaming video content, if applicable.' : 'Wystarczającej przepustowości łącza internetowego do streamingu wideo, jeśli dotyczy.'}</li>
                </ul>
                <p>
                  {language === 'en'
                    ? 'The Seller is not responsible for the User\'s inability to access the content due to hardware/software incompatibility or failure to meet these technical requirements, provided the requirements were clearly stated.'
                    : 'Sprzedawca nie ponosi odpowiedzialności za brak możliwości dostępu do treści przez Użytkownika z powodu niekompatybilności sprzętu/oprogramowania lub niespełnienia wymagań technicznych, pod warunkiem, że wymagania te były jasno określone.'}
                </p>
                 <p>
                  <strong>{language === 'en' ? 'Prohibited Actions:' : 'Działania Zabronione:'}</strong>{' '}
                  {language === 'en'
                    ? 'The User agrees not to misuse the access granted, including attempting unauthorized access, distributing content, or violating the license terms (§7). Violation may lead to immediate suspension or termination of access without refund and potential legal action.'
                    : 'Użytkownik zobowiązuje się nie nadużywać udzielonego dostępu, w tym nie podejmować prób nieautoryzowanego dostępu, nie rozpowszechniać treści ani nie naruszać warunków licencji (§7). Naruszenie może prowadzić do natychmiastowego zawieszenia lub zakończenia dostępu bez zwrotu kosztów oraz potencjalnych kroków prawnych.'}
                </p>

                {/* Section 5 */}
                <h2>{language === 'en' ? '§5 Right of Withdrawal for Consumers' : '§5 Prawo Konsumenta do Odstąpienia od Umowy'}</h2>
                <p>
                  {language === 'en'
                    ? 'A User who is a Consumer has the statutory right to withdraw from the Sales Agreement within 14 days of its conclusion, without giving any reason.'
                    : 'Użytkownik będący Konsumentem ma ustawowe prawo do odstąpienia od Umowy Sprzedaży w terminie 14 dni od dnia jej zawarcia, bez podawania przyczyny.'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'Loss of Withdrawal Right:' : 'Utrata Prawa do Odstąpienia:'}</strong>{' '}
                  {language === 'en'
                    ? 'Pursuant to Article 38(13) of the Polish Act on Consumer Rights (implementing the EU Consumer Rights Directive), the right of withdrawal is lost if the performance (supply of Digital Content or Service) begins with the Consumer\'s prior express consent before the 14-day withdrawal period expires, and after the Seller has informed the Consumer about the loss of their right of withdrawal.'
                    : 'Zgodnie z art. 38 pkt 13) Ustawy o prawach konsumenta, prawo odstąpienia od umowy nie przysługuje Konsumentowi w odniesieniu do umów o dostarczanie Treści Cyfrowych lub świadczenie Usług Cyfrowych, jeżeli spełnianie świadczenia rozpoczęło się za wyraźną i uprzednią zgodą Konsumenta przed upływem terminu do odstąpienia od umowy i po poinformowaniu go przez Sprzedawcę o utracie prawa odstąpienia od umowy.'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'Consent Mechanism:' : 'Mechanizm Zgody:'}</strong>{' '}
                  {language === 'en'
                    ? 'During the checkout process, before finalizing the purchase, the Consumer will be asked to provide this express consent (e.g., by checking a specific box) to immediate access/delivery and acknowledge the consequent loss of the withdrawal right. If consent is not given, access/delivery might be postponed until after the 14-day period.'
                    : 'Podczas procesu składania zamówienia, przed jego finalizacją, Konsument zostanie poproszony o wyrażenie takiej zgody (np. poprzez zaznaczenie odpowiedniego pola wyboru) na natychmiastowe rozpoczęcie świadczenia i o potwierdzenie przyjęcia do wiadomości informacji o utracie prawa do odstąpienia. W przypadku braku zgody, rozpoczęcie świadczenia może zostać odroczone do upływu 14-dniowego terminu.'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'Exercising Withdrawal (if applicable):' : 'Wykonanie Prawa Odstąpienia (jeśli przysługuje):'}</strong>{' '}
                  {language === 'en'
                    ? 'To exercise the right of withdrawal (if not lost per §5.2), the Consumer must inform the Seller of their decision by an unequivocal statement (e.g., a letter sent by post or email to kontakt@siadlak.email) before the withdrawal period expires. A model withdrawal form is available [Provide Link or Annex Template], but its use is not obligatory.'
                    : 'Aby skorzystać z prawa odstąpienia (jeżeli nie zostało ono utracone zgodnie z §5.2), Konsument musi poinformować Sprzedawcę o swojej decyzji w drodze jednoznacznego oświadczenia (np. pismem wysłanym pocztą lub pocztą elektroniczną na adres kontakt@siadlak.email) przed upływem terminu do odstąpienia. Wzór formularza odstąpienia jest dostępny [Podaj Link lub załącz Wzór], lecz skorzystanie z niego nie jest obowiązkowe.'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'Effects of Withdrawal:' : 'Skutki Odstąpienia:'}</strong>{' '}
                  {language === 'en'
                    ? 'If the Consumer withdraws from the Agreement (and the right was not lost), the Seller will reimburse all payments received from the Consumer without undue delay, and not later than 14 days from the day the Seller is informed of the withdrawal decision. Reimbursement will be made using the same payment method used by the Consumer, unless expressly agreed otherwise. The Seller will revoke access to the Digital Content/Service.'
                    : 'W przypadku odstąpienia od Umowy przez Konsumenta (gdy prawo to nie zostało utracone), Sprzedawca zwraca Konsumentowi wszystkie otrzymane od niego płatności, niezwłocznie, a w każdym przypadku nie później niż 14 dni od dnia, w którym Sprzedawca został poinformowany o decyzji o wykonaniu prawa odstąpienia. Zwrot płatności zostanie dokonany przy użyciu takich samych sposobów płatności, jakie zostały użyte przez Konsumenta, chyba że Konsument wyraźnie zgodził się na inne rozwiązanie. Sprzedawca cofnie dostęp do Treści/Usługi Cyfrowej.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'This statutory right of withdrawal generally does not apply to Business Customers.'
                    : 'Ustawowe prawo odstąpienia co do zasady nie przysługuje Przedsiębiorcom.'}
                </p>

                {/* Section 6 */}
                <h2>{language === 'en' ? '§6 Lack of Conformity & Complaints Procedure' : '§6 Niezgodność Towaru z Umową i Procedura Reklamacyjna'}</h2>
                <p>
                  {language === 'en'
                    ? 'The Seller is obliged to supply Digital Content or Digital Services that conform with the Sales Agreement, as required by Polish law implementing Directive (EU) 2019/770. Conformity includes matching the description, quality, functionality, compatibility, and other features specified in the offer.'
                    : 'Sprzedawca ma obowiązek dostarczyć Treści Cyfrowe lub świadczyć Usługi Cyfrowe zgodne z Umową Sprzedaży, zgodnie z wymogami polskiego prawa wdrażającego Dyrektywę (UE) 2019/770. Zgodność obejmuje m.in. zgodność z opisem, jakość, funkcjonalność, kompatybilność i inne cechy określone w ofercie.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'If the User discovers a lack of conformity, they have the right to file a complaint. This applies to both Consumers and Business Customers, although remedies might differ slightly based on applicable laws.'
                    : 'W przypadku stwierdzenia przez Użytkownika braku zgodności z umową, ma on prawo złożyć reklamację. Dotyczy to zarówno Konsumentów, jak i Przedsiębiorców, choć środki zaradcze mogą się nieznacznie różnić w zależności od obowiązujących przepisów.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'Complaints should be submitted in writing or electronically to the Seller\'s contact details provided in §1(4). The complaint should include:'
                    : 'Reklamacje należy składać pisemnie lub elektronicznie na dane kontaktowe Sprzedawcy podane w §1 ust. 4. Reklamacja powinna zawierać:'}
                </p>
                <ul>
                  <li>{language === 'en' ? 'User\'s name/company name.' : 'Imię i nazwisko Użytkownika / nazwę firmy.'}</li>
                  <li>{language === 'en' ? 'Email address used for purchase.' : 'Adres e-mail użyty przy zakupie.'}</li>
                  <li>{language === 'en' ? 'Order identifier (if available).' : 'Identyfikator zamówienia (jeśli dostępny).'}</li>
                  <li>{language === 'en' ? 'A detailed description of the lack of conformity.' : 'Szczegółowy opis braku zgodności.'}</li>
                  <li>{language === 'en' ? 'The User\'s request (e.g., bringing into conformity).' : 'Żądanie Użytkownika (np. doprowadzenie do zgodności).'}</li>
                </ul>
                <p>
                  {language === 'en'
                    ? 'The Seller will review the complaint and respond within 14 calendar days of receiving it, informing the User of the outcome and further steps via email.'
                    : 'Sprzedawca rozpatrzy reklamację i udzieli odpowiedzi w terminie 14 dni kalendarzowych od dnia jej otrzymania, informując Użytkownika o wyniku i dalszych krokach za pośrednictwem poczty elektronicznej.'}
                </p>
                 <p>
                  <strong>{language === 'en' ? 'Remedies for Consumers:' : 'Środki Zaradcze dla Konsumentów:'}</strong>{' '}
                  {language === 'en'
                    ? 'If a lack of conformity exists, the Consumer primarily has the right to demand that the Digital Content or Service be brought into conformity (e.g., repair, update, replacement). If bringing into conformity is impossible, disproportionately costly, or fails, the Consumer may be entitled to a proportionate price reduction or to terminate the Agreement (unless the lack of conformity is minor).'
                    : 'W przypadku braku zgodności, Konsument ma prawo w pierwszej kolejności żądać doprowadzenia Treści/Usługi Cyfrowej do zgodności z umową (np. naprawa, aktualizacja, wymiana). Jeżeli doprowadzenie do zgodności jest niemożliwe, nadmiernie kosztowne lub nieskuteczne, Konsument może być uprawniony do proporcjonalnego obniżenia ceny lub odstąpienia od umowy (chyba że brak zgodności jest nieistotny).'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'Remedies for Business Customers:' : 'Środki Zaradcze dla Przedsiębiorców:'}</strong>{' '}
                  {language === 'en'
                    ? 'Remedies for Business Customers are governed by the relevant provisions of the Polish Civil Code regarding warranty (rękojmia), unless otherwise agreed.'
                    : 'Odpowiedzialność Sprzedawcy wobec Przedsiębiorców z tytułu rękojmi za wady regulują odpowiednie przepisy Kodeksu cywilnego, o ile strony nie postanowiły inaczej.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'Refunds related to accepted complaints will be processed within 14 days of the decision, typically to the original payment method.'
                    : 'Zwroty środków pieniężnych związane z uznanymi reklamacjami będą realizowane w terminie 14 dni od dnia podjęcia decyzji, zazwyczaj na pierwotny środek płatniczy.'}
                </p>

                {/* Section 7 */}
                <h2>{language === 'en' ? '§7 Copyright & License Terms' : '§7 Prawa Autorskie i Warunki Licencji'}</h2>
                <p>
                  {language === 'en'
                    ? 'All Digital Content and Services, including course materials, videos, texts, graphics, and methodologies, are protected by copyright law and are the exclusive intellectual property of the Seller or its licensors.'
                    : 'Wszystkie Treści Cyfrowe i Usługi Cyfrowe, w tym materiały kursowe, wideo, teksty, grafiki i metodyki, są chronione prawem autorskim i stanowią wyłączną własność intelektualną Sprzedawcy lub jego licencjodawców.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'Upon purchase, the User is granted a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the purchased Digital Content or Service solely for their own personal learning and development or internal business use (if purchased by a company for a designated employee), for the duration specified in the product description.'
                    : 'Z chwilą zakupu Użytkownik otrzymuje ograniczoną, niewyłączną, nieprzenoszalną, niepodlegającą sublicencjonowaniu licencję na dostęp i korzystanie z zakupionej Treści Cyfrowej lub Usługi Cyfrowej wyłącznie na własny użytek osobisty w celach edukacyjnych lub na wewnętrzny użytek biznesowy (jeśli zakup dokonany przez firmę dla wskazanego pracownika), przez okres wskazany w opisie produktu.'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'Prohibitions:' : 'Zakazy:'}</strong>{' '}
                  {language === 'en' ? 'The User is strictly prohibited from:' : 'Użytkownikowi surowo zabrania się:'}
                </p>
                <ul>
                  <li>{language === 'en' ? 'Sharing, distributing, copying, reproducing, lending, selling, renting, sublicensing, publicly displaying, broadcasting, or otherwise making the content available to any third party (including other employees within the User\'s company unless a multi-user license was obtained).' : 'Udostępniania, rozpowszechniania, kopiowania, powielania, użyczania, sprzedawania, wynajmowania, sublicencjonowania, publicznego wyświetlania, nadawania lub innego udostępniania treści osobom trzecim (w tym innym pracownikom firmy Użytkownika, chyba że uzyskano licencję wielostanowiskową).'}</li>
                  <li>{language === 'en' ? 'Modifying, adapting, translating, creating derivative works from, decompiling, or reverse-engineering the content or platform.' : 'Modyfikowania, adaptowania, tłumaczenia, tworzenia utworów zależnych, dekompilowania lub odtwarzania kodu źródłowego treści lub platformy.'}</li>
                  <li>{language === 'en' ? 'Removing or altering any copyright notices or watermarks.' : 'Usuwania lub zmieniania jakichkolwiek oznaczeń praw autorskich lub znaków wodnych.'}</li>
                  <li>{language === 'en' ? 'Using the content for any commercial purpose beyond the scope of personal/internal development (e.g., using it to train others without express permission/license).' : 'Wykorzystywania treści w celach komercyjnych wykraczających poza zakres rozwoju osobistego/wewnętrznego (np. wykorzystywania do szkolenia innych bez wyraźnej zgody/licencji).'}</li>
                  <li>{language === 'en' ? 'Sharing login credentials (§4.6).' : 'Udostępniania danych do logowania (§4.6).'}</li>
                </ul>
                <p>
                  {language === 'en'
                    ? 'Any use exceeding the scope of this license constitutes copyright infringement and a breach of the Sales Agreement.'
                    : 'Jakiekolwiek użycie wykraczające poza zakres tej licencji stanowi naruszenie praw autorskich i Umowy Sprzedaży.'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'Company Purchases:' : 'Zakupy Firmowe:'}</strong>{' '}
                  {language === 'en'
                    ? 'If a company purchases access for its employees, a separate license is required for each individual employee who will access the content, unless a specific corporate or multi-user license agreement is concluded with the Seller.'
                    : 'Jeżeli firma dokonuje zakupu dostępu dla swoich pracowników, wymagana jest odrębna licencja dla każdego pracownika, który będzie korzystał z treści, chyba że zawarto ze Sprzedawcą odrębną umowę licencyjną korporacyjną lub wielostanowiskową.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'Violation of these license terms may result in immediate termination of access without refund and may subject the User to legal liability for damages.'
                    : 'Naruszenie warunków licencji może skutkować natychmiastowym rozwiązaniem umowy i utratą prawa do dalszego korzystania z treści bez zwrotu kosztów, a także może narazić Użytkownika na odpowiedzialność prawną za szkody.'}
                </p>

                {/* Section 8 */}
                <h2>{language === 'en' ? '§8 Final Provisions' : '§8 Postanowienia Końcowe'}</h2>
                <p>
                  <strong>{language === 'en' ? 'Amendments:' : 'Zmiany Regulaminu:'}</strong>{' '}
                  {language === 'en'
                    ? 'The Seller reserves the right to amend these Terms for valid reasons, such as changes in law, technology, service scope, or business model. Users with active access or ongoing agreements will be notified of significant changes via email at least 14 days before they take effect. The current version of the Terms is always available on the Seller\'s website. Continued use after the effective date implies acceptance of the changes. Users not accepting changes have the right to terminate their agreement (if applicable, e.g., for subscription services).'
                    : 'Sprzedawca zastrzega sobie prawo do zmiany niniejszego Regulaminu z ważnych przyczyn, takich jak zmiany przepisów prawa, technologii, zakresu usług lub modelu biznesowego. Użytkownicy posiadający aktywny dostęp lub umowy w toku zostaną powiadomieni o istotnych zmianach za pośrednictwem poczty elektronicznej co najmniej 14 dni przed ich wejściem w życie. Aktualna wersja Regulaminu jest zawsze dostępna na stronie internetowej Sprzedawcy. Dalsze korzystanie z usług po dacie wejścia zmian w życie oznacza ich akceptację. Użytkownicy nieakceptujący zmian mają prawo do rozwiązania umowy (jeśli dotyczy, np. przy usługach subskrypcyjnych).'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'Governing Law:' : 'Prawo Właściwe:'}</strong>{' '}
                  {language === 'en'
                    ? 'These Terms and any Sales Agreements concluded hereunder are governed by the laws of Poland. For Consumers, this choice of law does not deprive them of the protection afforded by mandatory provisions of the law of their country of habitual residence within the EU.'
                    : 'Niniejszy Regulamin oraz wszelkie Umowy Sprzedaży zawarte na jego podstawie podlegają prawu polskiemu. W przypadku Konsumentów, wybór prawa polskiego nie pozbawia ich ochrony przyznanej im na mocy przepisów prawa państwa ich zwykłego pobytu w UE, których nie można wyłączyć w drodze umowy.'}
                </p>
                <p>
                  <strong>{language === 'en' ? 'Dispute Resolution:' : 'Rozstrzyganie Sporów:'}</strong>{' '}
                  {language === 'en'
                    ? 'Any disputes arising between the Seller and a Business Customer will preferably be resolved amicably, and if not possible, submitted to the Polish court competent for the Seller\'s registered office. For Consumers, disputes can be submitted to the competent court according to general rules. Consumers also have the right to use out-of-court dispute resolution methods, including the EU Online Dispute Resolution (ODR) platform accessible via the European Commission\'s website.'
                    : 'Wszelkie spory powstałe pomiędzy Sprzedawcą a Przedsiębiorcą będą rozstrzygane w miarę możliwości polubownie, a w razie braku porozumienia, poddane rozstrzygnięciu sądu polskiego właściwego miejscowo dla siedziby Sprzedawcy. W przypadku Konsumentów, spory mogą być poddane pod rozstrzygnięcie sądu właściwego zgodnie z przepisami ogólnymi. Konsumenci mają również możliwość skorzystania z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń, w tym za pośrednictwem unijnej platformy internetowego rozstrzygania sporów (ODR) dostępnej na stronie internetowej Komisji Europejskiej.'}
                </p>
                 <p>
                  <strong>{language === 'en' ? 'Severability:' : 'Klauzula Salwatoryjna:'}</strong>{' '}
                  {language === 'en'
                    ? 'If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.'
                    : 'Jeżeli którekolwiek postanowienie niniejszego Regulaminu zostanie uznane za nieważne lub niewykonalne, pozostałe postanowienia pozostają w pełnej mocy.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'Matters not covered by these Terms shall be governed by applicable Polish law, including the Civil Code, the Act on Consumer Rights, and the Act on Provision of Services by Electronic Means.'
                    : 'W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają odpowiednie przepisy prawa polskiego, w tym Kodeksu cywilnego, Ustawy o prawach konsumenta oraz Ustawy o świadczeniu usług drogą elektroniczną.'}
                </p>

              </div>
            </div>

            {/* Footer Links */}
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

export default TermsSales;
