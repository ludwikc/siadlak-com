
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "../ui/navigation-menu";
import { getMenuItems } from './NavigationItems';

export default function DesktopNavigation() {
  const { language, getLocalizedPath } = useLanguage();
  const navigate = useNavigate();
  const txt = getMenuItems(language);
  
  // Direct navigation handlers
  const handleCoursesClick = () => {
    navigate(getLocalizedPath("/courses"));
  };

  const handleResourcesClick = () => {
    navigate(getLocalizedPath("/resources"));
  };
  
  return (
    <div className="hidden md:flex items-center space-x-6">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link 
              to={getLocalizedPath("/about")}
              className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors px-2 py-2"
            >
              {txt.about}
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className="bg-transparent text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta hover:bg-transparent focus:bg-transparent"
              onClick={handleCoursesClick}
            >
              {txt.courses}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-4 w-[400px] md:w-[500px] bg-luminous-white dark:bg-deep-space">
                <div className="grid grid-cols-1 gap-3">
                  <Link 
                    to={getLocalizedPath("/courses")} 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                  >
                    <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">{txt.allCourses}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                      {txt.allCoursesDesc}
                    </p>
                  </Link>
                  <Link 
                    to={getLocalizedPath("/courses/mental-elevator")} 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                  >
                    <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">{txt.mentalElevator}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                      {txt.mentalElevatorDesc}
                    </p>
                  </Link>
                  <Link 
                    to={getLocalizedPath("/courses/hakowanie-produktywnosci")} 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                  >
                    <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">{txt.hakowanieProduktywnosci}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                      {txt.hakowanieProduktywnosiDesc}
                    </p>
                  </Link>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className="bg-transparent text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta hover:bg-transparent focus:bg-transparent"
              onClick={handleResourcesClick}
            >
              {txt.resources}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-4 w-[400px] md:w-[500px] bg-luminous-white dark:bg-deep-space">
                <div className="grid grid-cols-1 gap-3">
                  <Link 
                    to={getLocalizedPath("/resources")} 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                  >
                    <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">{txt.allResources}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                      {txt.allResourcesDesc}
                    </p>
                  </Link>
                  <Link 
                    to={getLocalizedPath("/testimonials")} 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                  >
                    <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">{txt.testimonials}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                      {txt.testimonialsDesc}
                    </p>
                  </Link>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link 
              to={getLocalizedPath("/newsletter")}
              className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors px-2 py-2"
            >
              {txt.newsletter}
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <Link 
        to={getLocalizedPath("/contact")}
        className="bg-ascension-pink hover:bg-luminal-magenta text-luminous-white px-4 py-2 rounded-lg transition-colors"
      >
        {txt.bookCall}
      </Link>
    </div>
  );
}
