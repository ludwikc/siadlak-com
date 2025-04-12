
// Shared navigation items with translations
export const getMenuItems = (language: 'en' | 'pl') => {
  const menuItems = {
    en: {
      home: "Home",
      about: "About",
      courses: "Courses",
      resources: "Resources",
      newsletter: "Newsletter",
      testimonials: "Testimonials",
      bookCall: "Book a Call",
      allCourses: "All Courses",
      allCoursesDesc: "Browse all our available programs and courses",
      mentalElevator: "Mental Elevator",
      mentalElevatorDesc: "Premium 8-week mentoring program to elevate your performance",
      hakowanieProduktywnosci: "Hakowanie Produktywności",
      hakowanieProduktywnosiDesc: "Comprehensive course on mastering productivity systems",
      allResources: "All Resources",
      allResourcesDesc: "Access free tools, articles, and guides",
      testimonialsDesc: "Success stories from program participants",
    },
    pl: {
      home: "Strona główna",
      about: "O mnie",
      courses: "Kursy",
      resources: "Zasoby",
      newsletter: "Newsletter",
      testimonials: "Referencje",
      bookCall: "Umów rozmowę",
      allCourses: "Wszystkie kursy",
      allCoursesDesc: "Przeglądaj wszystkie dostępne programy i kursy",
      mentalElevator: "Mental Elevator",
      mentalElevatorDesc: "Premium 8-tygodniowy program mentoringowy podnoszący Twoją wydajność",
      hakowanieProduktywnosci: "Hakowanie Produktywności",
      hakowanieProduktywnosiDesc: "Kompleksowy kurs opanowania systemów produktywności",
      allResources: "Wszystkie zasoby",
      allResourcesDesc: "Uzyskaj dostęp do darmowych narzędzi, artykułów i poradników",
      testimonialsDesc: "Historie sukcesu uczestników programu",
    }
  };
  
  return menuItems[language];
};
