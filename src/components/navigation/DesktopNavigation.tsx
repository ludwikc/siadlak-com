
import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
  const { language, languagePrefix, getLocalizedPath } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
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
                  <Link 
                    to={getLocalizedPath("/courses/silna-glowa")} 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                  >
                    <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">{txt.silnaGlowa}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                      {txt.silnaGlowaDesc}
                    </p>
                  </Link>
                  <Link 
                    to={getLocalizedPath("/courses/7-technik")} 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                  >
                    <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">{txt["7-technik"]}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                      {txt["7-technikDesc"]}
                    </p>
                  </Link>
                  <Link 
                    to={getLocalizedPath("/courses/train-the-trainer")} 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                  >
                    <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">{txt.trainTheTrainer}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                      {txt.trainTheTrainerDesc}
                    </p>
                  </Link>
                  <Link 
                    to={getLocalizedPath("/courses/total-immersion")} 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50 dark:hover:bg-quantum-blue/30"
                  >
                    <div className="text-lg font-medium text-deep-charcoal dark:text-silver-mist">{txt.totalImmersion}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-subtle-slate dark:text-silver-mist/80">
                      {txt.totalImmersionDesc}
                    </p>
                  </Link>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link 
              to={getLocalizedPath("/resources")}
              className="text-deep-charcoal dark:text-silver-mist hover:text-neural-violet dark:hover:text-luminal-magenta transition-colors px-2 py-2"
            >
              {txt.resources}
            </Link>
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
