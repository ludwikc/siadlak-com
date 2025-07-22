import React from "react";

const testimonials = [
  {
    name: "Marcin K.",
    role: "Senior Java Developer → Właściciel firmy konsultingowej",
    quote:
      "Webinary Ludwika zmieniły moje podejście do własnej kariery. W ciągu 6 miesięcy od uczestnictwa założyłem własną firmę konsultingową i potroiłem swoje przychody.",
    image: "/placeholder.svg",
  },
  {
    name: "Anna W.",
    role: "Frontend Developer → UX Consultant",
    quote:
      "To, co wyróżnia Ludwika, to jego umiejętność łączenia wiedzy technicznej z biznesową. Dzięki jego webinarom i mentoringowi znalazłam swoją niszę w UX i teraz pracuję na własnych zasadach.",
    image: "/placeholder.svg",
  },
  {
    name: "Piotr S.",
    role: "DevOps Engineer → B2B Tech Consultant",
    quote:
      "Ludwik ma dar przekazywania złożonych koncepcji w przystępny sposób. Jego webinary dały mi nie tylko wiedzę, ale też motywację do działania. Teraz pracuję zdalnie dla klientów z USA i zarabiam 4x więcej niż na etacie.",
    image: "/placeholder.svg",
  },
];

const WebinarTestimonials = () => {
  return (
    <section className="py-16 bg-white/20 dark:bg-deep-space/20 backdrop-blur-sm">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Co mówią uczestnicy poprzednich webinarów
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-deep-space/80 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="italic text-gray-700 dark:text-gray-300">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-4 bg-white/80 dark:bg-deep-space/80 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-neural-violet">98%</div>
            <p className="text-gray-700 dark:text-gray-300">
              uczestników ocenia webinary Ludwika jako "warte każdej minuty"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarTestimonials;
