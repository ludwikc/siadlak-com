
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Course {
  title: string;
  description: string;
  image?: string;
  link: string;
  featured?: boolean;
}

interface CoursePreviewProps {
  title: string;
  subtitle?: string;
  courses: Course[];
}

export default function CoursePreview({
  title,
  subtitle,
  courses,
}: CoursePreviewProps) {
  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-deep-charcoal dark:text-silver-mist mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-subtle-slate dark:text-silver-mist/90 text-lg">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 ${
                course.featured
                  ? "ring-2 ring-ascension-pink dark:ring-luminal-magenta"
                  : ""
              }`}
            >
              <div className="h-48 relative">
                {course.image ? (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-neural-violet to-ascension-pink dark:from-neural-violet dark:to-luminal-magenta flex items-center justify-center">
                    <span className="text-white text-lg font-medium">
                      {course.title}
                    </span>
                  </div>
                )}

                {course.featured && (
                  <div className="absolute top-4 right-4 bg-ascension-pink dark:bg-luminal-magenta text-white text-sm py-1 px-3 rounded-full">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-deep-charcoal dark:text-silver-mist text-xl mb-3">
                  {course.title}
                </h3>

                <p className="text-subtle-slate dark:text-silver-mist/90 mb-6">
                  {course.description}
                </p>

                <Link
                  to={course.link}
                  className="inline-flex items-center text-neural-violet dark:text-luminal-magenta font-medium group"
                >
                  Learn more
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:ml-3 transition-all"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/programs">
            <Button variant="secondary">View All Courses</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
