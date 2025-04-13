
// Shared navigation items with translations
export const getMenuItems = (language: 'en' | 'pl') => {
  const menuItems = {
    en: {
      home: "Home",
      about: "About",
      courses: "Courses",
      resources: "Resources",
      allResources: "All Resources",
      newsletter: "Newsletter",
      testimonials: "Testimonials",
      bookCall: "Book a Call",
      allCourses: "All Courses",
      allCoursesDesc: "Browse all our available programs and courses",
      mentalElevator: "Mental Elevator",
      mentalElevatorDesc: "Premium 8-week mentoring program to elevate your performance",
      hakowanieProduktywnosci: "Hakowanie Produktywności",
      hakowanieProduktywnosiDesc: "Comprehensive course on mastering productivity systems",
      silnaGlowa: "Silna Głowa",
      silnaGlowaDesc: "Strengthen your mental resilience",
      "7-technik": "7 Technik Produktywności",
      "7-technikDesc": "7 essential productivity techniques for daily success",
      trainTheTrainer: "Train The Trainer",
      trainTheTrainerDesc: "Learn how to effectively train others",
      totalImmersion: "Total Immersion Experience",
      totalImmersionDesc: "Intensive immersion program for rapid skill development"
    },
    pl: {
      home: "Strona główna",
      about: "O mnie",
      courses: "Kursy",
      resources: "Zasoby",
      allResources: "Wszystkie zasoby",
      newsletter: "Newsletter",
      testimonials: "Referencje",
      bookCall: "Umów rozmowę",
      allCourses: "Wszystkie kursy",
      allCoursesDesc: "Przeglądaj wszystkie dostępne programy i kursy",
      mentalElevator: "Mental Elevator",
      mentalElevatorDesc: "Premium 8-tygodniowy program mentoringowy podnoszący Twoją wydajność",
      hakowanieProduktywnosci: "Hakowanie Produktywności",
      hakowanieProduktywnosiDesc: "Kompleksowy kurs opanowania systemów produktywności",
      silnaGlowa: "Silna Głowa",
      silnaGlowaDesc: "Wzmocnij swoją odporność psychiczną",
      "7-technik": "7 Technik Produktywności",
      "7-technikDesc": "7 kluczowych technik produktywności do codziennego sukcesu",
      trainTheTrainer: "Train The Trainer",
      trainTheTrainerDesc: "Naucz się efektywnie szkolić innych",
      totalImmersion: "Doświadczenie Totalnej Immersji",
      totalImmersionDesc: "Intensywny program immersji dla szybkiego rozwoju umiejętności"
    }
  };
  
  return menuItems[language];
};
