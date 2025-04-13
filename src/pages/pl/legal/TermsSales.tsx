import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ShoppingCart as SalesIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PolishTermsSales = () => {
  const { language, getLocalizedPath } = useLanguage();

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Regulamin (Sprzedaż)
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Warunki regulujące zakup naszych produktów i usług
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
                  Regulamin (Sprzedaż)
                </h2>
              </div>

              {/* Dynamically Rendered Terms Content */}
              <div className="prose prose-lg max-w-none text-deep-charcoal/80 dark:text-silver-mist/80">
                <p>
                  <strong>Wersja dokumentu:</strong> 1.1
                  <br />
                  <strong>Data obowiązywania:</strong> [Data - np. 13 kwietnia 2025]
                </p>

                {/* Section 1 */}
                <h2>§1 Postanowienia ogólne i Strony Umowy</h2>
                <p>
                  Niniejszy Regulamin Sprzedaży (dalej „Regulamin") określa zasady i warunki zakupu oraz korzystania z kursów online oraz innych treści lub usług cyfrowych oferowanych za pośrednictwem strony internetowej Sprzedawcy.
                </p>
                <p>
                  <strong>Sprzedawca:</strong>{' '}
                  Produkty/usługi sprzedawane są przez Siadlak Consulting Sp. z o.o., z siedzibą w [tu podaj adres], wpisaną do rejestru przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS: [tu podaj numer], NIP: [tu podaj numer], REGON: [tu podaj numer] (dalej „Sprzedawca").
                </p>
                <p>
                  <strong>Administrator Danych Osobowych:</strong>{' '}
                  Administratorem danych osobowych przetwarzanych w związku z realizacją zamówień jest SIADLAK Holding Group Sp. z o.o., z siedzibą w Warszawie, Aleja Jana Pawła II 43A/37B, 01-001 Warszawa, wpisana do rejestru przedsiębiorców KRS: 0001141743, NIP: 5273141363, REGON: 540328107 (dalej „Administrator Danych"). Przetwarzanie danych odbywa się na podstawie wewnętrznej umowy powierzenia przetwarzania danych osobowych pomiędzy Sprzedawcą a Administratorem Danych. Szczegółowe informacje dotyczące przetwarzania danych dostępne są w Polityce Prywatności [Sugerowane podlinkowanie Polityki Prywatności].
                </p>
                <p>
                  <strong>Dane kontaktowe w sprawach związanych z zakupami i realizacją zamówień:</strong>
                  <br />
                  E-mail: kontakt@siadlak.email
                  <br />
                  Telefon: +49 162 833 2261
                </p>
                <p>
                  Niniejszy Regulamin stanowi integralną część umowy sprzedaży zawieranej pomiędzy Sprzedawcą a Użytkownikiem. Akceptacja Regulaminu jest warunkiem złożenia zamówienia.
                </p>

                {/* Section 2 */}
                <h2>§2 Definicje</h2>
                <p>
                  <strong>Treść Cyfrowa:</strong>{' '}
                  Dane wytwarzane i dostarczane w postaci cyfrowej, takie jak kursy online, e-booki, materiały wideo, szablony, dostępne poprzez pobranie lub streaming.
                </p>
                <p>
                  <strong>Usługa Cyfrowa:</strong>{' '}
                  Usługa pozwalająca Użytkownikowi na wytwarzanie, przetwarzanie, przechowywanie lub dostęp do danych w postaci cyfrowej, lub usługa pozwalająca na udostępnianie lub interakcję z danymi przesłanymi przez użytkowników, np. dostęp do platformy e-learningowej.
                </p>
                <p>
                  <strong>Użytkownik:</strong>{' '}
                  Osoba fizyczna, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, dokonująca zakupu Treści Cyfrowych lub Usług Cyfrowych od Sprzedawcy. Obejmuje to:
                </p>
                <ul>
                  <li>
                    <strong>Konsument:</strong>{' '}
                    Osoba fizyczna zawierająca umowę ze Sprzedawcą w celu niezwiązanym bezpośrednio z jej działalnością gospodarczą lub zawodową.
                  </li>
                  <li>
                    <strong>Przedsiębiorca:</strong>{' '}
                    Użytkownik (osoba fizyczna, prawna lub jednostka organizacyjna) zawierający umowę bezpośrednio związaną z jego działalnością gospodarczą lub zawodową. Niektóre prawa konsumenckie (jak ustawowe prawo do odstąpienia od umowy) mogą nie mieć zastosowania lub być zmodyfikowane w stosunku do Przedsiębiorców, zgodnie ze wskazaniami w Regulaminie lub przepisami prawa.
                  </li>
                </ul>
                <p>
                  <strong>Umowa Sprzedaży:</strong>{' '}
                  Umowa o dostarczenie Treści Cyfrowej lub świadczenie Usługi Cyfrowej zawarta pomiędzy Sprzedawcą a Użytkownikiem za pośrednictwem sklepu internetowego/platformy Sprzedawcy po akceptacji zamówienia Użytkownika.
                </p>
                <p>
                  <strong>Platforma:</strong>{' '}
                  Środowisko internetowe (strona www, system zarządzania nauczaniem), za pośrednictwem którego Sprzedawca zapewnia dostęp do zakupionej Treści Cyfrowej lub Usługi Cyfrowej.
                </p>

                {/* Section 3 */}
                <h2>§3 Składanie Zamówień i Zawarcie Umowy</h2>
                <p>
                  Zamówienia na Treści Cyfrowe lub Usługi Cyfrowe można składać za pośrednictwem strony internetowej Sprzedawcy [Wstaw Adres Strony WWW].
                </p>
                <p>
                  Złożenie zamówienia obejmuje wybór produktu/usługi, wypełnienie formularza zamówienia wymaganymi danymi (w tym danymi do faktury i adresem e-mail do dostawy/dostępu), wybór metody płatności oraz akceptację niniejszego Regulaminu i Polityki Prywatności.
                </p>
                <p>
                  Wszystkie ceny podane na stronie internetowej są cenami brutto (zawierają należny podatek VAT) i są wyrażone w podanej walucie. Całkowita cena wraz ze wszystkimi opłatami jest widoczna przed finalizacją zamówienia.
                </p>
                <p>
                  Umowa Sprzedaży zostaje zawarta w chwili otrzymania przez Użytkownika wiadomości e-mail od Sprzedawcy potwierdzającej przyjęcie i akceptację zamówienia, wysyłanej zazwyczaj po pomyślnym przetworzeniu płatności.
                </p>
                <p>
                  Użytkownik jest odpowiedzialny za podanie prawidłowych i aktualnych danych w formularzu zamówienia.
                </p>
                <p>
                  Dostępne metody płatności są wskazane w procesie składania zamówienia (np. przelew bankowy, karta płatnicza, systemy płatności online jak Stripe, PayPal).
                </p>

                {/* Section 4 */}
                <h2>§4 Realizacja Zamówienia i Dostęp</h2>
                <p>
                  Dostęp do Treści Cyfrowej lub Usługi Cyfrowej jest udzielany po otrzymaniu przez Sprzedawcę potwierdzenia pomyślnej płatności, chyba że opis produktu stanowi inaczej (np. przedsprzedaż).
                </p>
                <p>
                  Dane dostępowe (np. dane do logowania, linki dostępowe) zostaną przesłane na adres e-mail podany przez Użytkownika podczas składania zamówienia.
                </p>
                <p>
                  Dostęp jest zazwyczaj udzielany niezwłocznie lub w krótkim czasie (np. od kilku minut do kilku godzin) po potwierdzeniu płatności. O ewentualnych przewidywanych opóźnieniach Użytkownik zostanie poinformowany.
                </p>
                <p>
                  O ile nie wskazano inaczej, dostęp do Treści Cyfrowej/Usługi Cyfrowej (np. kursu online) jest udzielany na okres wskazany w opisie produktu (np. dostęp dożywotni, na 12 miesięcy).
                </p>
                <p>
                  <strong>Udzielenie Licencji:</strong>{' '}
                  Zakup udziela Użytkownikowi niewyłącznej, nieprzenoszalnej, niepodlegającej sublicencjonowaniu licencji na dostęp i korzystanie z Treści Cyfrowej/Usługi Cyfrowej wyłącznie na własny użytek osobisty lub wewnętrzny użytek biznesowy (jeśli dotyczy), zgodnie z §7.
                </p>
                <p>
                  <strong>Ograniczenie do Jednego Użytkownika:</strong>{' '}
                  Dane dostępowe (login/hasło) są ściśle osobiste i przypisane do konkretnego Użytkownika (lub jednej wskazanej osoby, jeśli zakup dokonany przez firmę dla jednego pracownika, chyba że zakupiono licencję wielostanowiskową). Udostępnianie danych dostępowych lub zezwalanie wielu osobom na korzystanie z jednej licencji jest surowo zabronione.
                </p>
                <p>
                  <strong>Wymagania Techniczne:</strong>{' '}
                  Dostęp do Treści Cyfrowej/Usługi Cyfrowej wymaga:
                </p>
                <ul>
                  <li>Urządzenia (komputer, tablet, smartfon) z dostępem do Internetu.</li>
                  <li>Aktualnej przeglądarki internetowej (np. Chrome, Firefox, Safari, Edge).</li>
                  <li>Aktywnego konta e-mail (podanego przy zakupie).</li>
                  <li>Ewentualnie określonego oprogramowania (np. czytnik PDF) lub wtyczek do przeglądarki, wskazanych w opisie produktu.</li>
                  <li>Wystarczającej przepustowości łącza internetowego do streamingu wideo, jeśli dotyczy.</li>
                </ul>
                <p>
                  Sprzedawca nie ponosi odpowiedzialności za brak możliwości dostępu do treści przez Użytkownika z powodu niekompatybilności sprzętu/oprogramowania lub niespełnienia wymagań technicznych, pod warunkiem, że wymagania te były jasno określone.
                </p>
                <p>
                  <strong>Działania Zabronione:</strong>{' '}
                  Użytkownik zobowiązuje się nie nadużywać udzielonego dostępu, w tym nie podejmować prób nieautoryzowanego dostępu, nie rozpowszechniać treści ani nie naruszać warunków licencji (§7). Naruszenie może prowadzić do natychmiastowego zawieszenia lub zakończenia dostępu bez zwrotu kosztów oraz potencjalnych kroków prawnych.
                </p>

                {/* Section 5 */}
                <h2>§5 Prawo Konsumenta do Odstąpienia od Umowy</h2>
                <p>
                  Użytkownik będący Konsumentem ma ustawowe prawo do odstąpienia od Umowy Sprzedaży w terminie 14 dni od dnia jej zawarcia, bez podawania przyczyny.
                </p>
                <p>
                  <strong>Utrata Prawa do Odstąpienia:</strong>{' '}
                  Zgodnie z art. 38 pkt 13) Ustawy o prawach konsumenta, prawo odstąpienia od umowy nie przysługuje Konsumentowi w odniesieniu do umów o dostarczanie Treści Cyfrowych lub świadczenie Usług Cyfrowych, jeżeli spełnianie świadczenia rozpoczęło się za wyraźną i uprzednią zgodą Konsumenta przed upływem terminu do odstąpienia od umowy i po poinformowaniu go przez Sprzedawcę o utracie prawa odstąpienia od umowy.
                </p>
                <p>
                  <strong>Mechanizm Zgody:</strong>{' '}
                  Podczas procesu składania zamówienia, przed jego finalizacją, Konsument zostanie poproszony o wyrażenie takiej zgody (np. poprzez zaznaczenie odpowiedniego pola wyboru) na natychmiastowe rozpoczęcie świadczenia i o potwierdzenie przyjęcia do wiadomości informacji o utracie prawa do odstąpienia. W przypadku braku zgody, rozpoczęcie świadczenia może zostać odroczone do upływu 14-dniowego terminu.
                </p>
                <p>
                  <strong>Wykonanie Prawa Odstąpienia (jeśli przysługuje):</strong>{' '}
                  Aby skorzystać z prawa odstąpienia (jeżeli nie zostało ono utracone zgodnie z §5.2), Konsument musi poinformować Sprzedawcę o swojej decyzji w drodze jednoznacznego oświadczenia (np. pismem wysłanym pocztą lub pocztą elektroniczną na adres kontakt@siadlak.email) przed upływem terminu do odstąpienia. Wzór formularza odstąpienia jest dostępny [Podaj Link lub załącz Wzór], lecz skorzystanie z niego nie jest obowiązkowe.
                </p>
                <p>
                  <strong>Skutki Odstąpienia:</strong>{' '}
                  W przypadku odstąpienia od Umowy przez Konsumenta (gdy prawo to nie zostało utracone), Sprzedawca zwraca Konsumentowi wszystkie otrzymane od niego płatności, niezwłocznie, a w każdym przypadku nie później niż 14 dni od dnia, w którym Sprzedawca został poinformowany o decyzji o wykonaniu prawa odstąpienia. Zwrot płatności zostanie dokonany przy użyciu takich samych sposobów płatności, jakie zostały użyte przez Konsumenta, chyba że Konsument wyraźnie zgodził się na inne rozwiązanie. Sprzedawca cofnie dostęp do Treści/Usługi Cyfrowej.
                </p>
                <p>
                  Ustawowe prawo odstąpienia co do zasady nie przysługuje Przedsiębiorcom.
                </p>

                {/* Section 6 */}
                <h2>§6 Niezgodność Towaru z Umową i Procedura Reklamacyjna</h2>
                <p>
                  Sprzedawca ma obowiązek dostarczyć Treści Cyfrowe lub świadczyć Usługi Cyfrowe zgodne z Umową Sprzedaży, zgodnie z wymogami polskiego prawa wdrażającego Dyrektywę (UE) 2019/770. Zgodność obejmuje m.in. zgodność z opisem, jakość, funkcjonalność, kompatybilność i inne cechy określone w ofercie.
                </p>
                <p>
                  W przypadku stwierdzenia przez Użytkownika braku zgodności z umową, ma on prawo złożyć reklamację. Dotyczy to zarówno Konsumentów, jak i Przedsiębiorców, choć środki zaradcze mogą się nieznacznie różnić w zależności od obowiązujących przepisów.
                </p>
                <p>
                  Reklamacje należy składać pisemnie lub elektronicznie na dane kontaktowe Sprzedawcy podane w §1 ust. 4. Reklamacja powinna zawierać:
                </p>
                <ul>
                  <li>Imię i nazwisko Użytkownika / nazwę firmy.</li>
                  <li>Adres e-mail użyty przy zakupie.</li>
                  <li>Identyfikator zamówienia (jeśli dostępny).</li>
                  <li>Szczegółowy opis braku zgodności.</li>
                  <li>Żądanie Użytkownika (np. doprowadzenie do zgodności).</li>
                </ul>
                <p>
                  Sprzedawca rozpatrzy reklamację i udzieli odpowiedzi w terminie 14 dni kalendarzowych od dnia jej otrzymania, informując Użytkownika o wyniku i dalszych krokach za pośrednictwem poczty elektronicznej.
                </p>
                <p>
                  <strong>Środki Zaradcze dla Konsumentów:</strong>{' '}
                  W przypadku braku zgodności, Konsument ma prawo w pierwszej kolejności żądać doprowadzenia Treści/Usługi Cyfrowej do zgodności z umową (np. naprawa, aktualizacja, wymiana). Jeżeli doprowadzenie do zgodności jest niemożliwe, nadmiernie kosztowne lub nieskuteczne, Konsument może być uprawniony do proporcjonalnego obniżenia ceny lub odstąpienia od umowy (chyba że brak zgodności jest nieistotny).
                </p>
                <p>
                  <strong>Środki Zaradcze dla Przedsiębiorców:</strong>{' '}
                  Odpowiedzialność Sprzedawcy wobec Przedsiębiorców z tytułu rękojmi za wady regulują odpowiednie przepisy Kodeksu cywilnego, o ile strony nie postanowiły inaczej.
                </p>
                <p>
                  Zwroty środków pieniężnych związane z uznanymi reklamacjami będą realizowane w terminie 14 dni od dnia podjęcia decyzji, zazwyczaj na pierwotny środek płatniczy.
                </p>

                {/* Section 7 */}
                <h2>§7 Prawa Autorskie i Warunki Licencji</h2>
                <p>
                  Wszystkie Treści Cyfrowe i Usługi Cyfrowe, w tym materiały kursowe, wideo, teksty, grafiki i metodyki, są chronione prawem autorskim i stanowią wyłączną własność intelektualną Sprzedawcy lub jego licencjodawców.
                </p>
                <p>
                  Z chwilą zakupu Użytkownik otrzymuje ograniczoną, niewyłączną, nieprzenoszalną, niepodlegającą sublicencjonowaniu licencję na dostęp i korzystanie z zakupionej Treści Cyfrowej lub Usługi Cyfrowej wyłącznie na własny użytek osobisty w celach edukacyjnych lub na wewnętrzny użytek biznesowy (jeśli zakup dokonany przez firmę dla wskazanego pracownika), przez okres wskazany w opisie produktu.
                </p>
                <p>
                  <strong>Zakazy:</strong>{' '}
                  Użytkownikowi surowo zabrania się:
                </p>
                <ul>
                  <li>Udostępniania, rozpowszechniania, kopiowania, powielania, użyczania, sprzedawania, wynajmowania, sublicencjonowania, publicznego wyświetlania, nadawania lub innego udostępniania treści osobom trzecim (w tym innym pracownikom firmy Użytkownika, chyba że uzyskano licencję wielostanowiskową).</li>
                  <li>Modyfikowania, adaptowania, tłumaczenia, tworzenia utworów zależnych, dekompilowania lub odtwarzania kodu źródłowego treści lub platformy.</li>
                  <li>Usuwania lub zmieniania jakichkolwiek oznaczeń praw autorskich lub znaków wodnych.</li>
                  <li>Wykorzystywania treści w celach komercyjnych wykraczających poza zakres rozwoju osobistego/wewnętrznego (np. wykorzystywania do szkolenia innych bez wyraźnej zgody/licencji).</li>
                  <li>Udostępniania danych do logowania (§4.6).</li>
                </ul>
                <p>
                  Jakiekolwiek użycie wykraczające poza zakres tej licencji stanowi naruszenie praw autorskich i Umowy Sprzedaży.
                </p>
                <p>
                  <strong>Zakupy Firmowe:</strong>{' '}
                  Jeżeli firma dokonuje zakupu dostępu dla swoich pracowników, wymagana jest odrębna licencja dla każdego pracownika, który będzie korzystał z treści, chyba że zawarto ze Sprzedawcą odrębną umowę licencyjną korporacyjną lub wielostanowiskową.
                </p>
                <p>
                  Naruszenie warunków licencji może skutkować natychmiastowym rozwiązaniem umowy i utratą prawa do dalszego korzystania z treści bez zwrotu kosztów, a także może narazić Użytkownika na odpowiedzialność prawną za szkody.
                </p>

                {/* Section 8 */}
                <h2>§8 Postanowienia Końcowe</h2>
                <p>
                  <strong>Zmiany Regulaminu:</strong>{' '}
                  Sprzedawca zastrzega sobie prawo do zmiany niniejszego Regulaminu z ważnych przyczyn, takich jak zmiany przepisów prawa, technologii, zakresu usług lub modelu biznesowego. Użytkownicy posiadający aktywny dostęp lub umowy w toku zostaną powiadomieni o istotnych zmianach za pośrednictwem poczty elektronicznej co najmniej 14 dni przed ich wejściem w życie. Aktualna wersja Regulaminu jest zawsze dostępna na stronie internetowej Sprzedawcy. Dalsze korzystanie z usług po dacie wejścia zmian w życie oznacza ich akceptację. Użytkownicy nieakceptujący zmian mają prawo do rozwiązania umowy (jeśli dotyczy, np. przy usługach subskrypcyjnych).
                </p>
                <p>
                  <strong>Prawo Właściwe:</strong>{' '}
                  Niniejszy Regulamin oraz wszelkie Umowy Sprzedaży zawarte na jego podstawie podlegają prawu polskiemu. W przypadku Konsumentów, wybór prawa polskiego nie pozbawia ich ochrony przyznanej im na mocy przepisów prawa państwa ich zwykłego pobytu w UE, których nie można wyłączyć w drodze umowy.
                </p>
                <p>
                  <strong>Rozstrzyganie Sporów:</strong>{' '}
                  Wszelkie spory powstałe pomiędzy Sprzedawcą a Przedsiębiorcą będą rozstrzygane w miarę możliwości polubownie, a w razie braku porozumienia, poddane rozstrzygnięciu sądu polskiego właściwego miejscowo dla siedziby Sprzedawcy. W przypadku Konsumentów, spory mogą być poddane pod rozstrzygnięcie sądu właściwego zgodnie z przepisami ogólnymi. Konsumenci mają również możliwość skorzystania z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń, w tym za pośrednictwem unijnej platformy internetowego rozstrzygania sporów (ODR) dostępnej na stronie internetowej Komisji Europejskiej.
                </p>
                <p>
                  <strong>Klauzula Salwatoryjna:</strong>{' '}
                  Jeżeli którekolwiek postanowienie niniejszego Regulaminu zostanie uznane za nieważne lub niewykonalne, pozostałe postanowienia pozostają w pełnej mocy.
                </p>
                <p>
                  W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają odpowiednie przepisy prawa polskiego, w tym Kodeksu cywilnego, Ustawy o prawach konsumenta oraz Ustawy o świadczeniu usług drogą elektroniczną.
                </p>
              </div>
            </div>

            {/* Footer Links */}
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

export default PolishTermsSales;
