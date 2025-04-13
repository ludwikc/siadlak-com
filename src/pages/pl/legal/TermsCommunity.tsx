import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Users as CommunityIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PolishTermsCommunity = () => {
  const { language, getLocalizedPath } = useLanguage();

  // Lawyer-verified texts
  const polishTerms = `
Regulamin Korzystania ze Społeczności (Wersja Polska)

§1 Postanowienia ogólne

1. Serwis społeczności Lifehackerzy (zwany dalej "Serwisem"), dostępny pod adresem Lifehackerzy.pl oraz na powiązanych platformach (Discord, Discourse), udostępniany jest Użytkownikom przez Administratora.
2. Serwis jest integralną częścią kursów online oferowanych przez Administratora i stanowi bezpłatny benefit dostępny wyłącznie dla uczestników tych kursów.
3. Dostęp do Serwisu uzyskiwany jest automatycznie wraz z zakupem dowolnego kursu premium oferowanego przez Administratora. Nie ma możliwości wykupienia dostępu do Serwisu bez uczestnictwa w kursie.
4. Poprzez przystąpienie do korzystania z Serwisu Użytkownik przyjmuje do wiadomości i akceptuje warunki niniejszego Regulaminu.
5. W sprawach nieuregulowanych niniejszym Regulaminem mają zastosowanie przepisy prawa polskiego.

§2 Definicje

1. Serwis – Platforma komunikacyjna "Społeczność Lifehackerzy", działająca za pośrednictwem oprogramowania Discord oraz Discourse, dostępna pod adresem Lifehackerzy.pl, traktowana łącznie.
2. Administrator – SIADLAK Holding Group sp. z o.o., z siedzibą w Warszawie, Aleja Jana Pawła II 43A/37B, 01-001 Warszawa, wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS: 0001141743, NIP: 5273141363, REGON: 540328107.
3. Użytkownik – Osoba fizyczna posiadająca dostęp do Serwisu w związku z zakupem kursu oferowanego przez Administratora.
4. Materiały – Wszelkie treści publikowane w Serwisie, w tym w szczególności:
    a. Fragmenty lub omówienia treści kursów online.
    b. Nagrania ze spotkań społeczności.
    c. Treści warsztatów.
    d. Wypowiedzi Użytkowników.
    e. Materiały dodatkowe.

§3 Prawa autorskie, licencje i własność intelektualna

1. Wszelkie Materiały publikowane w Serwisie podlegają ochronie prawnej zgodnie z ustawą o prawie autorskim i prawach pokrewnych.
2. Użytkownik, publikując w Serwisie jakiekolwiek Materiały, udziela Administratorowi niewyłącznej, nieodpłatnej, nieograniczonej czasowo (wieczystej) i terytorialnie licencji na korzystanie z tych Materiałów w zakresie niezbędnym do prawidłowego funkcjonowania Serwisu, w szczególności na następujących polach eksploatacji:
    a. Utrwalanie i zwielokrotnianie Materiałów – wytwarzanie określoną techniką egzemplarzy utworu, w tym techniką cyfrową w pamięci urządzeń systemowych.
    b. Publiczne udostępnianie Materiałów w taki sposób, aby każdy mógł mieć do nich dostęp w miejscu i w czasie przez siebie wybranym w ramach Serwisu.
    c. Wprowadzanie Materiałów do pamięci komputera oraz do sieci komputerowych i teleinformatycznych w celu ich udostępnienia innym Użytkownikom w ramach Serwisu.
3. Licencja, o której mowa w pkt 2, obejmuje także prawo do wykorzystywania fragmentów Materiałów w celach promocyjnych i marketingowych Serwisu, z zastrzeżeniem ochrony dóbr osobistych Użytkownika (godności, prywatności).
4. Użytkownik wyraża zgodę na utrwalanie i rozpowszechnianie swojego wizerunku utrwalonego podczas spotkań społeczności, warsztatów oraz innych aktywności w ramach Serwisu, w zakresie niezbędnym do funkcjonowania i promocji Serwisu.
5. W przypadku usunięcia konta Użytkownika:
    a. Jego dane osobowe powiązane z kontem zostaną zanonimizowane zgodnie z przepisami o ochronie danych osobowych.
    b. Opublikowane przez niego Materiały oraz utrwalony wizerunek pozostaną dostępne w Serwisie na zasadach udzielonej licencji i zgody.
6. Zabronione jest:
    a. Kopiowanie, modyfikowanie i rozpowszechnianie Materiałów poza Serwisem bez uprzedniej pisemnej zgody Administratora lub innego uprawnionego podmiotu.
    b. Wykonywanie i publikowanie zrzutów ekranu (screenshotów) z Serwisu.
    c. Nagrywanie i rozpowszechnianie spotkań społeczności bez zgody Administratora.
7. Użytkownik oświadcza, że:
    a. Jest uprawniony do publikowania Materiałów w Serwisie oraz że Materiały te nie naruszają praw osób trzecich.
    b. Posiada wszelkie niezbędne zgody i uprawnienia do udzielenia licencji, o której mowa w pkt 2, oraz zgody na wykorzystanie wizerunku, o której mowa w pkt 4.

§4 Zasady korzystania z Serwisu

1. Korzystanie z Serwisu jest bezpłatne w ramach zakupionego kursu.
2. Serwis dostępny jest 24 godziny na dobę, 7 dni w tygodniu, z zastrzeżeniem prawa Administratora do prowadzenia prac technicznych i konserwacyjnych.
3. Użytkownik zobowiązuje się do:
    a. Przestrzegania zasad wzajemnego szacunku i kultury osobistej.
    b. Powstrzymania się od działań mogących utrudniać korzystanie z Serwisu innym Użytkownikom.
    c. Niepublikowania treści niezgodnych z prawem lub dobrymi obyczajami.
    d. Zachowania poufności Materiałów dostępnych w Serwisie.

§5 Moderacja i konsekwencje naruszeń

1. Zasady zachowania w Społeczności: Użytkownik zobowiązuje się do:
    a. Przestrzegania postanowień niniejszego Regulaminu oraz obowiązujących przepisów prawa.
    b. Poszanowania wartości promowanych przez Administratora, w tym zasad wzajemnego szacunku, kultury osobistej oraz tworzenia bezpiecznej i inkluzywnej atmosfery w Społeczności.
    c. Powstrzymania się od działań mogących negatywnie wpłynąć na funkcjonowanie Serwisu lub naruszyć dobre imię Administratora lub innych Użytkowników.
2. Uprawnienia Administratora: Administrator zastrzega sobie prawo do podejmowania działań mających na celu zapewnienie prawidłowego funkcjonowania Serwisu oraz ochronę interesów Społeczności, w tym do:
    a. Udzielania Użytkownikowi ostrzeżeń w przypadku naruszenia Regulaminu lub zasad Społeczności.
    b. Tymczasowego ograniczenia lub zawieszenia dostępu Użytkownika do Serwisu.
    c. Trwałego usunięcia Użytkownika ze Społeczności w przypadku poważnych lub powtarzających się naruszeń.
3. Podstawy podjęcia działań przez Administratora: Działania, o których mowa w pkt 2, mogą zostać podjęte w szczególności w przypadku:
    a. Naruszenia przez Użytkownika postanowień Regulaminu lub obowiązujących przepisów prawa.
    b. Zachowań sprzecznych z wartościami promowanymi przez Administratora, które mogą zakłócać bezpieczną i inkluzywną atmosferę w Społeczności.
    c. Działań Użytkownika szkodzących wizerunkowi Społeczności lub Administratora.
    d. Prezentowania treści lub poglądów o charakterze obraźliwym, dyskryminującym lub w inny sposób nieakceptowalnym w kontekście zasad Społeczności.
4. Procedura i informowanie Użytkownika:
    a. Administrator poinformuje Użytkownika o podjętych działaniach oraz, w miarę możliwości, wskaże przyczyny ich zastosowania.
    b. Decyzje Administratora są podejmowane z uwzględnieniem zasad słuszności oraz dbałości o dobro Społeczności.
5. Charakter dostępu do Serwisu:
    a. Dostęp do Serwisu jest bezpłatnym benefitem przysługującym Użytkownikom w związku z uczestnictwem w kursach oferowanych przez Administratora.
    b. Użytkownik przyjmuje do wiadomości, że naruszenie zasad Regulaminu może skutkować utratą dostępu do tego benefitu bez prawa do jakichkolwiek roszczeń z tego tytułu.
6. Wyłączenie odpowiedzialności:
    a. Administrator nie ponosi odpowiedzialności za ewentualne szkody wynikłe z ograniczenia lub zablokowania dostępu Użytkownika do Serwisu, o ile działania te były podjęte zgodnie z postanowieniami Regulaminu oraz obowiązującymi przepisami prawa.
    b. Postanowienia niniejszego paragrafu nie wyłączają ani nie ograniczają praw konsumenta przysługujących mu na mocy obowiązujących przepisów prawa.

§6 Ochrona danych osobowych

1. Administrator przetwarza dane osobowe Użytkowników. Wszelkie informacje dotyczące sposobów przetwarzania danych osobowych oraz praw Użytkownika znajdują się w Polityce Prywatności, dostępnej pod adresem https://docs.siadlak.com/legal/privacy.

§7 Postanowienia końcowe

1. Administrator zastrzega sobie prawo do zmiany Regulaminu.
2. O zmianach Regulaminu Użytkownicy będą informowani z 14-dniowym wyprzedzeniem poprzez publikację informacji w Serwisie lub przesłanie wiadomości e-mail na adres powiązany z kontem Użytkownika.
3. Korzystanie z Serwisu po wprowadzeniu zmian oznacza akceptację nowego brzmienia Regulaminu.
4. W przypadku braku akceptacji zmian Regulaminu, Użytkownik ma prawo zrezygnować z korzystania z Serwisu.
5. Regulamin wchodzi w życie z dniem 31.01.2024.
`;

  // Function to render text with proper formatting
  const renderTerms = (text: string) => {
    // Split into sections based on § symbol
    const sections = text.trim().split('\n§').map((section, index) => {
      if (index === 0) return section; // First part doesn't have § prefix yet
      return '§' + section;
    });
    
    const title = sections.shift(); // Extract the main title

    return (
      <>
        {/* Render Title */}
        {title && <h3 className="text-xl font-bold mb-6">{title}</h3>} 
        
        {/* Render each section */}
        {sections.map((section, index) => {
          const lines = section.trim().split('\n');
          const sectionTitle = lines.shift(); // The first line with §x Title

          return (
            <div key={index} className="mb-8"> {/* Add margin between sections */}
              {/* Render Section Title */}
              {sectionTitle && <h4 className="text-lg font-bold mt-6 mb-4">{sectionTitle}</h4>}
              
              {/* Render Section Content */}
              {lines.map((line, lineIndex) => {
                const trimmedLine = line.trim();
                if (!trimmedLine) return null; // Skip empty lines
                
                // Check if this is a numbered point (starts with number and period)
                if (/^\d+\./.test(trimmedLine)) {
                  return <p key={lineIndex} className="mb-3 pl-0">{trimmedLine}</p>;
                }
                
                // Check if this is a sub-point (starts with a letter and period)
                if (/^\s*[a-z]\./.test(line)) {
                  return <p key={lineIndex} className="mb-2 pl-6">{trimmedLine}</p>;
                }
                
                // Regular paragraph
                return <p key={lineIndex} className="mb-3">{trimmedLine}</p>;
              })}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Regulamin (Społeczność)
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Warunki regulujące uczestnictwo w naszej społeczności
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-xl mb-8">
              <div className="flex items-center mb-6">
                <CommunityIcon size={24} className="mr-3 text-neural-violet dark:text-luminal-magenta" />
                <h2 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                  Regulamin Korzystania ze Społeczności
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-deep-charcoal/80 dark:text-silver-mist/80">
                {renderTerms(polishTerms)}
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-12">
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

export default PolishTermsCommunity;
