import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Users as CommunityIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsCommunity = () => {
  const { language, getLocalizedPath } = useLanguage();

  // Lawyer-verified texts
  const englishTerms = `
Community Terms of Use (English Version)

§1 General Provisions

1. The Lifehackerzy community platform (hereinafter the "Service"), accessible via Lifehackerzy.pl and associated platforms (Discord, Discourse), is made available to Users by the Administrator.
2. The Service is an integral part of the online courses offered by the Administrator and constitutes a complimentary benefit available exclusively to participants of these courses.
3. Access to the Service is granted automatically upon the purchase of any premium course offered by the Administrator. It is not possible to purchase access to the Service independently of course participation.
4. By accessing and using the Service, the User acknowledges and accepts the terms of these Regulations.
5. Matters not regulated by these Regulations shall be governed by the provisions of Polish law.

§2 Definitions

1. Service – The communication platform known as "Lifehackerzy Community", operating via Discord and Discourse software, accessible at Lifehackerzy.pl, treated collectively.
2. Administrator – SIADLAK Holding Group sp. z o.o., with its registered office in Warsaw, Aleja Jana Pawła II 43A/37B, 01-001 Warszawa, entered into the Register of Entrepreneurs of the National Court Register under KRS number: 0001141743, NIP: 5273141363, REGON: 540328107.
3. User – A natural person who has access to the Service in connection with the purchase of a course offered by the Administrator.
4. Materials – Any content published within the Service, including but not limited to:
    a. Online course content excerpts or discussions.
    b. Recordings of community meetings.
    c. Workshop content.
    d. User contributions and statements.
    e. Supplementary materials.

§3 Copyright, Licenses, and Intellectual Property

1. All Materials published within the Service are subject to legal protection under the Act on Copyright and Related Rights.
2. By publishing any Materials within the Service, the User grants the Administrator a non-exclusive, royalty-free, perpetual, and worldwide license to use these Materials to the extent necessary for the proper functioning of the Service, including in particular:
    a. Storing and reproducing the Materials in the memory of system devices.
    b. Making the Materials publicly available within the Service.
    c. Introducing the Materials into computer and ICT networks for the purpose of making them available to other Users.
3. The license referred to in point 2 also includes the right to use excerpts of the Materials for promotional and marketing purposes of the Service, subject to the protection of the User's personal rights (dignity, privacy).
4. The User consents to the recording and dissemination of their image captured during community meetings, workshops, and other activities within the Service, to the extent necessary for the operation and promotion of the Service.
5. In the event of User account deletion:
    a. Their personal data associated with the account will be anonymized in accordance with data protection regulations.
    b. Materials published by the User and their recorded image will remain available within the Service based on the granted license and consent.
6. It is prohibited to:
    a. Copy, modify, or distribute Materials outside the Service without the prior written consent of the Administrator or another authorized entity.
    b. Take and publish screenshots from the Service.
    c. Record and distribute community meetings without the Administrator's consent.
7. The User declares that:
    a. They are entitled to publish the Materials within the Service and that these Materials do not infringe upon the rights of third parties.
    b. They possess all necessary consents and authorizations to grant the license referred to in point 2, and the consent for the use of their image referred to in point 4.

§4 Rules for Using the Service

1. Use of the Service is free of charge as part of the purchased course.
2. The Service is available 24 hours a day, 7 days a week, subject to the Administrator's right to conduct technical maintenance.
3. The User undertakes to:
    a. Adhere to principles of mutual respect and personal conduct.
    b. Refrain from actions that could hinder other Users' use of the Service.
    c. Not publish content that is unlawful or contrary to good practice (bonnes mœurs).
    d. Maintain the confidentiality of Materials accessible within the Service.

§5 Moderation and Consequences of Violations

1. Community Conduct Rules: The User undertakes to:
    a. Comply with the provisions of these Regulations and applicable laws.
    b. Respect the values promoted by the Administrator, including principles of mutual respect, personal conduct, and fostering a safe and inclusive atmosphere within the Community.
    c. Refrain from actions that could negatively impact the functioning of the Service or harm the reputation of the Administrator or other Users.
2. Administrator's Rights: The Administrator reserves the right to take actions aimed at ensuring the proper functioning of the Service and protecting the interests of the Community, including:
    a. Issuing warnings to the User in case of violations of the Regulations or Community rules.
    b. Temporarily restricting or suspending the User's access to the Service.
    c. Permanently removing the User from the Community in case of serious or repeated violations.
3. Basis for Administrator Action: Actions referred to in point 2 may be taken, in particular, in the event of:
    a. Violation by the User of the provisions of the Regulations or applicable laws.
    b. Conduct contrary to the values promoted by the Administrator, which may disrupt the safe and inclusive atmosphere in the Community.
    c. User actions detrimental to the image of the Community or the Administrator.
    d. Presenting content or views that are offensive, discriminatory, or otherwise unacceptable within the context of Community rules.
4. Procedure and User Notification:
    a. The Administrator will inform the User about the actions taken and, where possible, indicate the reasons for their application.
    b. The Administrator's decisions are made taking into account principles of fairness and the welfare of the Community.
5. Nature of Access to the Service:
    a. Access to the Service is a complimentary benefit provided to Users in connection with their participation in courses offered by the Administrator.
    b. The User acknowledges that violation of the Regulations may result in the loss of access to this benefit without the right to any claims in this regard.
6. Disclaimer of Liability:
    a. The Administrator shall not be liable for any damages resulting from the restriction or blocking of the User's access to the Service, provided such actions were taken in accordance with the provisions of the Regulations and applicable laws.
    b. The provisions of this section do not exclude or limit consumer rights granted by applicable law.

§6 Personal Data Protection

1. The Administrator processes Users' personal data. All information regarding the methods of personal data processing and the User's rights can be found in the Privacy Policy, available at https://docs.siadlak.com/legal/privacy.

§7 Final Provisions

1. The Administrator reserves the right to amend these Regulations.
2. Users will be informed about changes to the Regulations 14 days in advance through publication of information within the Service or via email.
3. Using the Service after the changes have been implemented signifies acceptance of the new version of the Regulations.
4. In case of non-acceptance of the changes to the Regulations, the User has the right to cease using the Service.
5. These Regulations come into force on 31.01.2024.
`;

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
              {language === 'en' ? 'Terms and Conditions (Community)' : 'Regulamin (Społeczność)'}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              {language === 'en' 
                ? 'Terms governing participation in our community' 
                : 'Warunki regulujące uczestnictwo w naszej społeczności'}
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
                  {language === 'en' ? 'Community Terms of Use' : 'Regulamin Korzystania ze Społeczności'}
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-deep-charcoal/80 dark:text-silver-mist/80">
                {language === 'en' ? renderTerms(englishTerms) : renderTerms(polishTerms)}
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-12">
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

export default TermsCommunity;
