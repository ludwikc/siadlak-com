import { useEffect, useRef, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { getSEOConfig } from '@/lib/seo-config';

type QuoteSegment = string | { highlight: string };

interface BaseTestimonial {
  type: string;
  quote: string | QuoteSegment[];
  author: string;
  flag: string;
  country: string;
}

interface HeroTestimonial extends BaseTestimonial {
  type: 'hero';
}

interface FeaturedTestimonial extends BaseTestimonial {
  type: 'featured';
  location?: string;
  badge?: string;
}

interface CompactTestimonial extends BaseTestimonial {
  type: 'compact';
}

interface MicroTestimonial extends BaseTestimonial {
  type: 'micro';
}

interface ConstructiveTestimonial extends BaseTestimonial {
  type: 'constructive';
}

interface CTABlock {
  type: 'cta';
  theme: 'dark' | 'light' | 'light-bordered';
  text: string;
  buttonText: string;
  link: string;
}

type Testimonial =
  | HeroTestimonial
  | FeaturedTestimonial
  | CompactTestimonial
  | MicroTestimonial
  | ConstructiveTestimonial
  | CTABlock;

const testimonials: Testimonial[] = [
  // SEKCJA 1: HERO CARDS (1-4)
  {
    type: 'hero',
    quote: [
      'Po godzinie rozmowy o torach, zakrętach i hamulcach… miałem ',
      { highlight: 'totalną pustkę w głowie' },
      '. ',
      { highlight: 'Pierwszy raz od lat' },
      '.',
    ],
    author: 'Łukasz - IT, ADHD, sceptyk',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'hero',
    quote: [
      'Poczułem, jak mięśnie w moim brzuchu się <strong>',
      { highlight: 'fizycznie rozluźniają' },
      '.</strong> Nie dlatego, że Ludwik jest lepszy. Dlatego, że ',
      { highlight: 'zadaje inne pytania' },
      '.',
    ],
    author: 'Artur - Ojciec, Programista, Przedsiębiorca',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'hero',
    quote: [
      "Zapytał: 'Ile podatku płacisz każdego dnia za tę historię?' ",
      { highlight: 'W 8 tygodni przeszłam od narracji ofiary do agenta zmiany' },
      '.',
    ],
    author: 'Anna - CEO Agencji Marketingowej',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'hero',
    quote: [
      "Pracowałam na wakacjach w mentalnym garniturze. Ludwik powiedział: '",
      { highlight: 'Nic nie jest dla Ciebie zbyt dobre' },
      ".' I uwierzyłam.",
    ],
    author: 'Łucja - Founder Refspace',
    flag: '🇵🇱',
    country: 'pl',
  },

  // CTA #1
  {
    type: 'cta',
    theme: 'dark',
    text: 'Chcesz zobaczyć, jak to wygląda na żywo?',
    buttonText: 'Umów bezpłatną rozmowę →',
    link: '/umow-rozmowe',
  },

  // SEKCJA 2: MILITARY + SUPERLATIVES (5-16)
  {
    type: 'featured',
    quote: [
      'The instructor was ',
      {
        highlight:
          'one of the best that I have had the pleasure of being instructed by',
      },
      '. Ludwig has the heart of a good teacher and he is a great asset to the company in which he works. I really enjoyed his instructions during the class he made it fun and interesting. Keep this man doing what he is doing for the good of the company.',
    ],
    author: 'Ron Wilson',
    location: 'US Army Civilian, Wiesbaden',
    flag: '🇺🇸',
    country: 'us',
    badge: '🇺🇸 US Military',
  },
  {
    type: 'featured',
    quote: [
      'Exceptionally professional and knowledgeable trainer. The course material was intense and difficult, but the trainer was able to explain rather complex ideas in a easily understandable manner....not an easy task. ',
      { highlight: "Best class I've attended in a very long time" },
      '. Kept me engaged for a whole week from 0800-1700 - again, not an easy task.',
    ],
    author: 'Lisa Blankenship',
    location: 'US Army Civilian, Wiesbaden',
    flag: '🇺🇸',
    country: 'us',
    badge: '🇺🇸 US Military',
  },
  {
    type: 'featured',
    quote: [
      { highlight: 'One of the best classes I have ever been in' },
      ". Mr. Siadlak's way of teaching made it very easy to understand and retain. He showed genuine care in answering any questions we had. I wish we had more instructors like him.",
    ],
    author: 'Eric Buenavente',
    location: 'US Military, USARAF',
    flag: '🇺🇸',
    country: 'us',
    badge: '🇺🇸 US Military',
  },
  {
    type: 'featured',
    quote: [
      'Ludwik is a ',
      { highlight: 'gifted instructor and was born to teach' },
      "! His greatest strength is that he does not let questions side track him, but rather ties those questions in later (remembering who asked) when that subject matter comes up. He also did a phenomenal job in learning everyone's names and making the class feel like a comfortable community. BRAVO!",
    ],
    author: 'Dallas Shultz',
    location: 'US Army Civilian, USARAF',
    flag: '🇺🇸',
    country: 'us',
    badge: '🇺🇸 US Military',
  },
  {
    type: 'featured',
    quote: [
      'Ludwik Siadlak was the right teacher for the class. He took Civilians, enlisted, warrant officers and commissioned officers and ',
      { highlight: 'taught a class in a language that all could understand' },
      '. He was patient and informative. We had every education level in this class from one Soldier with GED to one with a doctorate. He was able to instruct all these people to a level of proficiency.',
    ],
    author: 'Trave Rhodes',
    location: 'US Military, USARAF',
    flag: '🇺🇸',
    country: 'us',
    badge: '🇺🇸 US Military',
  },
  {
    type: 'featured',
    quote: [
      'Ludwik is ',
      { highlight: 'the best instructor I have ever met' },
      '. His knowledge and teaching skills made this course incredibly interesting even for person who is quite familiar with this software.',
    ],
    author: 'Pawel Cerkaski',
    location: 'London',
    flag: '🇬🇧',
    country: 'uk',
    badge: '🇬🇧 London',
  },
  {
    type: 'featured',
    quote: [
      'Excellent instructor. Extremely knowledgeable, articulate and personable. ',
      { highlight: "Best instructor I've had in many years" },
      '.',
    ],
    author: 'Betty M. Greenberg',
    location: '',
    flag: '🇬🇧',
    country: 'uk',
  },
  {
    type: 'featured',
    quote: [
      'I am impressed of all the clear examples that he made during the course! He made very useful drawings on the whiteboard. By changing between presentation-slides, SQL-code examples and the whiteboard, it was easy to keep a full concentration throughout the whole course! ',
      { highlight: 'He is the absolute best instructor I have ever had!!' },
    ],
    author: 'Uczestnik szkolenia w Bergen',
    location: '',
    flag: '🇳🇴',
    country: 'no',
    badge: '🇳🇴 Norway',
  },
  {
    type: 'micro',
    quote: 'Always use this instructor for this course!',
    author: 'SGM David Myers - US Army',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'micro',
    quote: 'He was freaking awesome!',
    author: 'Uczestnik szkolenia w Londynie',
    flag: '🇬🇧',
    country: 'uk',
  },
  {
    type: 'micro',
    quote: 'Outstanding!',
    author: 'Uczestnik szkolenia w Oslo',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'micro',
    quote: 'pierwsze wrażenie niepozorny ale później BEST OF THE BEST',
    author: 'Małyszek',
    flag: '🇵🇱',
    country: 'pl',
  },

  // SEKCJA 3: DUAL COMPETENCE + DEPTH (17-30)
  {
    type: 'featured',
    quote: [
      'Bardzo fajny gość. Ma wiedze ale przede wszystkim ',
      { highlight: 'osobowość' },
      '. Z pełnym przeświadczeniem ',
      { highlight: 'właściwa osoba na właściwym miejscu' },
      '. Nie dajcie mu odejść.',
    ],
    author: 'Adam Aniola',
    location: '',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'featured',
    quote: [
      'Excellent. This course provided me confidence to create and manage a collaborative site. ',
      { highlight: 'Instructor absolutely fantastic' },
      '. Spoke clearly and with passion for the subject.',
    ],
    author: 'Robert Anderson',
    location: 'US Army Civilian, USARAF',
    flag: '🇺🇸',
    country: 'us',
    badge: '🇺🇸 US Military',
  },
  {
    type: 'featured',
    quote: [
      'Very satisfied with the course, ',
      { highlight: 'provided more than what was expected' },
      '. Instructor was awesome, very detailed explanations and demonstrations on every module of the course.',
    ],
    author: 'Hector Cruz',
    location: 'US Military',
    flag: '🇺🇸',
    country: 'us',
    badge: '🇺🇸 US Military',
  },
  {
    type: 'compact',
    quote: [
      'Ludwis was very professional, polite, to the point and also funny. Easy to talk to and ',
      {
        highlight: 'could answer any question regarding any subject of SQL Server',
      },
      '. I would highly recommend him.',
    ],
    author: 'Johnny - Norwegia',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote: [
      'Całkiem przyjemny trener. Zabawny, wesoły ale i kompetentny, dostarczający rzetelnych informacji. Tak zwana ',
      { highlight: '"petarda"' },
      '.',
    ],
    author: 'D. Szymczyk',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'compact',
    quote: [
      "Great instructor! Would easily recommend Ludwik to anyone wanting to learn Transact-SQL, or any other Microsoft product for that matter, as he's energetic, knowledgeable, competent and great at teaching. ",
      { highlight: '10/10' },
      '.',
    ],
    author: 'Uczestnik szkolenia w Londynie',
    flag: '🇬🇧',
    country: 'uk',
  },
  {
    type: 'compact',
    quote:
      'duża wiedza merytoryczna połączona ze zdolnościami dydaktycznymi i kulturą osobistą',
    author: 'Gosia B.',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'compact',
    quote:
      'The instructor was very professional, competent and trustworthy. His knowledge of the subject was displayed everyday of the course. His "hand on" explanation of the problem and dissection of the same problem gave me a better understanding of it.',
    author: 'Goncalo Marques - Bergen',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote:
      'I found the instructor to be very present and eager to pass knowledge on any of the covered subjects. The pace of the course was great and every question we had was answered with very good explanation.',
    author: 'Endre Norekval Tillung - Norwegia',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote: [
      'The instructor clearly knows the material inside and out. He was very well versed and ',
      { highlight: 'there was not a question he could not answer' },
      '. I especially liked that he gave many practical examples to give us a clearer understanding. He also presented the material in a logical flow so that it was easier to keep up with him.',
    ],
    author: 'Lisa Vaughn - US Army Civilian, Wiesbaden',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'compact',
    quote:
      'Ludwik has a great and expansive knowledge of the subject matter. He presents the information very enthusiastically.',
    author: 'Uczestnik szkolenia, USARAF',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'compact',
    quote:
      'Very happy with Ludwik. Bundled the relevant modules together in order to get the whole picture. Had a good mix of slides and drawing in order to explain the material.',
    author: 'Matias Dombestein - Norwegia',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'micro',
    quote: 'best instructor i ever have',
    author: 'M.B.',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'micro',
    quote: 'Great class and even better instructor!!!',
    author: 'Eric Buenavente - US Military',
    flag: '🇺🇸',
    country: 'us',
  },

  // CTA #2
  {
    type: 'cta',
    theme: 'light',
    text: 'Jeszcze nie gotowy? Zacznij od kursu.',
    buttonText: 'Zobacz Aplikacje Mentalne →',
    link: '/mental-software-update',
  },

  // SEKCJA 4: EXPLAINS WELL + TEACHING SKILL (31-48)
  {
    type: 'compact',
    quote: 'Easy to understand, clear explanations and a nice teaching personality.',
    author: 'Yasith Navoda - Norwegia',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote: [
      'At the end of every day Ludwik reviewed the material we covered, as well as during the beginning of the following day. Each of the exercises helped re-enforce what we had previously covered. I am appreciative that he also included both HTML and CSS as part of the class. ',
      { highlight: "Certainly one of the better classes I've been a part of" },
      '.',
    ],
    author: 'Uczestnik szkolenia, USARAF',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'compact',
    quote: [
      'The course was very informative and gave me a much better understanding and comfort level with using SharePoint. I am very glad I attended this course and am anxious to get back to practice what I have learned. ',
      { highlight: 'Ludwik is a very impressive young man and an awesome instructor' },
      '.',
    ],
    author: 'Lisa Vaughn - US Army Civilian',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'compact',
    quote:
      'The instructor performed very well, and willingly answered additional questions outside the main scope. He had lots of knowledge and presented it in a very understandable way.',
    author: 'Uczestnik szkolenia w Bergen',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote:
      'Great presentation and really engaged during the lecture. Did not follow the powerpoint but still covered the topics in a great way.',
    author: 'Jon Martin Mikalsen - Norwegia',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote: 'Really good at explaining and easy to understand.',
    author: 'Uczestnik szkolenia w Warszawie',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'compact',
    quote:
      'The instructor was very good and presented the material in a perfect and understandable way.',
    author: 'Anders Nomme - Norwegia',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote: 'The instructor was great! I learned a lot.',
    author: 'Jose Rodriguez - US Military',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'compact',
    quote: [
      'This was an extremely useful course and ',
      {
        highlight:
          'I learned much more than I thought I would. It exceeded my objectives',
      },
      ' - I am so grateful to have been introduced to HTML basics, and I feel confident in my abilities.',
    ],
    author: 'Dallas Shultz - US Army Civilian',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'compact',
    quote: 'The instructor was super knowledgeable and helpful through out the course.',
    author: 'Kim Shumpert - US Army Civilian, USARAF',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'compact',
    quote: [
      'the instructor was very knowledgeable and ',
      {
        highlight:
          'I was able to learn things about SharePoint that I did not know was possible to do',
      },
      '. Something I will put in my toolkit and keep with me for a long time. GREAT CLASS...good job Ludwik',
    ],
    author: 'Lorenzo Thompson - US Military, USARAF',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'micro',
    quote: 'good pace and really good at explaining',
    author: 'Hilde Mykland Pihl',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'micro',
    quote: 'great to explain the subjects',
    author: 'John Henning Aarsheim Paulsen',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'micro',
    quote: 'Duża wiedza i umiejętności jej przekazania',
    author: 'M. Gołczyński',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'micro',
    quote: 'excellent instructor - excellent teaching skill on top of knowledge',
    author: 'Jutta Bettinger - Wiesbaden',
    flag: '🇺🇸🇩🇪',
    country: 'us',
  },
  {
    type: 'micro',
    quote: 'extremely professional, top score',
    author: 'Ane Zakariassen',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'micro',
    quote: 'The instructor explain examples perfectly at the course',
    author: 'Rayner Jacobsen',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'micro',
    quote: 'Higly skillful, flexible, pedagogic.',
    author: 'Duc Dung Lam',
    flag: '🇻🇳',
    country: 'vn',
  },

  // CTA #3
  {
    type: 'cta',
    theme: 'dark',
    text: 'Wciąż czytasz? To dobry znak.',
    buttonText: 'Porozmawiajmy →',
    link: '/umow-rozmowe',
  },

  // SEKCJA 5: ADAPTABILITY + SHORT PUNCHY + REMAINING (49-70+)
  {
    type: 'featured',
    quote: [
      'He was thorough, well paced, and over all patient with the numerous issues we ran into. ',
      {
        highlight:
          'He found creative and effective solutions for problems ranging from power outages to hyper-v domain controller issues and even running out of wi-fi data before Friday',
      },
      '.',
    ],
    author: 'Uczestnik szkolenia w Londynie',
    location: '',
    flag: '🇬🇧',
    country: 'uk',
  },
  {
    type: 'featured',
    quote: [
      {
        highlight:
          "From not ever playing with SharePoint before this class, I can say that I'm very comfortable with the site",
      },
      '. Over achieved what I was expecting. Ludwik was a great instructor, with a lot of knowledge.',
    ],
    author: 'Sergio',
    location: 'US Military, USARAF',
    flag: '🇺🇸',
    country: 'us',
    badge: '🇺🇸 US Military',
  },
  {
    type: 'compact',
    quote: 'The instructor adapted the course to the class which was very nice.',
    author: 'Elsa Bjerregaard - Norwegia',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote:
      'Because it was online, we miss the classroom discussion. But Ludwik did a great job facilitating it!',
    author: 'Roger Pedersen - Norwegia',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote: [
      {
        highlight:
          "I wasn't quite sure what to expect from this course seeing that I knew nothing of PowerShell prior to coming. I learned a lot",
      },
      '. Instructor was awesome and really really smart.',
    ],
    author: 'Michael - US Military',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'compact',
    quote: 'Strong technical explanation and support.',
    author: 'Tory Johnson - US Army Civilian, USARAF',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'compact',
    quote:
      'Instructor was outstanding and presented the material in a very logical order. Great course and I would recommend this course to others.',
    author: 'Phillip Vaughn - US Army Civilian, Wiesbaden',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'compact',
    quote:
      'Another great instructor from Glasspaper range. Good english, easy to understand, great knowledge.',
    author: 'Orjan Kinsarvik - Norwegia',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote:
      'Very good at understanding the students issues and questions and subsequently explaining to fill any gaps and concerns.',
    author: 'Uczestnik szkolenia w Oslo',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote: [
      { highlight: 'The best trainer I had pleasure working with' },
      '. Top notch knowledge and contact.',
    ],
    author: 'Uczestnik szkolenia w Warszawie',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'compact',
    quote:
      'The course is very good. The instructor knows the material very well. Overall the course was outstanding.',
    author: 'Dennis Starks - US Army Contractor',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'compact',
    quote:
      'the course was great and the Instructor. YES, the course was comprehensive, great hands on labs and book.',
    author: 'Aizhan Rivera - US Military',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'micro',
    quote: 'ZMIANA, OSTATNI DZIEN BYL MEGA!!!!',
    author: 'Uczestnik szkolenia w Warszawie',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'micro',
    quote: 'swój chłop :)',
    author: 'A. Harasimiuk',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'micro',
    quote: 'super',
    author: 'P. Starko',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'micro',
    quote: 'Outstanding :-) May talk a little fast, though',
    author: 'Uczestnik szkolenia w Bergen',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'micro',
    quote: 'Very good, very happy!',
    author: 'Casey',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'micro',
    quote: 'Ludwik C. Siadlak did a fantastic job.',
    author: 'Egil Jostein Ueland',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'micro',
    quote: 'Very friendly, good learner and good pace through the program',
    author: 'Oivind Sletner',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'micro',
    quote: 'Great class!',
    author: 'SGM David Myers - US Army',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'micro',
    quote: 'Good!!!',
    author: 'Terje Christensen',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'micro',
    quote: 'Great instructor and useful information.',
    author: 'Gerald Job - USARAF',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'micro',
    quote: 'Keep up the good work.',
    author: 'Walter Bailey - US Army Civilian',
    flag: '🇺🇸',
    country: 'us',
  },

  // SEKCJA 6: HONEST FEEDBACK (73-78)
  {
    type: 'constructive',
    quote: [
      { highlight: 'His knowledge and ability to teach is outstanding' },
      ', but he talks a bit too much and could be showing more practical examples of tool usage a bit slower.',
    ],
    author: 'Helge Vestoyl - Norwegia',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'constructive',
    quote:
      "Instructor was very clear and easy to understand, though I think it can be useful to take a couple of seconds break one in a while, in order to let the information sink in. (I'm not 20 anymore ;-) )",
    author: 'Tone Skogsbakken - Norwegia',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'constructive',
    quote: [
      "Slow down a little when you're showing us how to do something on screen. It can be difficult following along when you move fast. ",
      {
        highlight:
          'Terrific job of dealing with unexpected server downtime by having additional material to cover',
      },
      '.',
    ],
    author: 'Steve - Wiesbaden',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'constructive',
    quote: [
      'The first day was a lot of talk and not so relevant. But then, when we started the labs and got help during the training, ',
      { highlight: 'the trainer was gooood!!!' },
    ],
    author: 'Stine Andreassen Sydhagen - Norwegia',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'constructive',
    quote:
      "Instructor's attitude, knowledge and professionalism made the class bearable. However, one week for this training is far too long. I could have learned what I did on my own in far fewer hours.",
    author: 'Uczestnik szkolenia, USARAF',
    flag: '🇺🇸',
    country: 'us',
  },

  // CTA #4
  {
    type: 'cta',
    theme: 'light-bordered',
    text: 'Alex Hormozi twierdzi, że ludzie, którzy czytają wszystkie opinie, to najlepsi klienci. Mam nadzieję, że ma rację.',
    buttonText: 'Umów rozmowę →',
    link: '/umow-rozmowe',
  },

  // SEKCJA 7: REMAINING (79-końca)
  {
    type: 'compact',
    quote:
      'Brak uwag. Bardzo dobry kontakt, sposób przekazywania informacji, kultura osobista.',
    author: 'Uczestnik szkolenia w Warszawie',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'compact',
    quote: 'Trener super. Ma bardzo dobre czytelne przykłady. Świetny gość.',
    author: 'Uczestnik szkolenia w Warszawie',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'compact',
    quote:
      'The instructor was very knowledgeable on the subject and always kept the class professional and on task.',
    author: 'Denny R. Hargrave',
    flag: '🇬🇧',
    country: 'uk',
  },
  {
    type: 'compact',
    quote:
      'Thanks for your enthusiastic presentations these days! It has been a pleasure to be on your course.',
    author: 'Uczestnik szkolenia w Oslo',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote: 'Did know the material, and used a lot of real life examples',
    author: 'Uczestnik szkolenia w Oslo',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote: 'Great instructor! Friendly and very knowledgeable',
    author: 'Morten Aabakken',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote: 'Helpful and insightful with knowledge',
    author: 'Uczestnik szkolenia w Oslo',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote: 'Very skilled Instructor.',
    author: 'Uczestnik szkolenia w Oslo',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote:
      'Very energic and knowledgeable teacher. Fun guy as well. He truly do know what he is talking about.',
    author: 'Uczestnik szkolenia w Oslo',
    flag: '🇳🇴',
    country: 'no',
  },
  {
    type: 'compact',
    quote:
      'good knowledge, flexibility to answer any questions in SQL theme, high level of communication',
    author: 'Jerzy Gebler',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'compact',
    quote: "Excelent Instructor, I'd recommend him to anyone!",
    author: 'Uczestnik szkolenia w Warszawie',
    flag: '🇵🇱',
    country: 'pl',
  },
  {
    type: 'micro',
    quote: 'well worth the time. absolutely - exceeded my expectations',
    author: 'Jutta Bettinger - Wiesbaden',
    flag: '🇺🇸🇩🇪',
    country: 'us',
  },
  {
    type: 'micro',
    quote: 'Very informative. Good and informative.',
    author: 'Uczestnik szkolenia, USARAF',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'micro',
    quote: 'very good trainer',
    author: 'Dietz - Wiesbaden',
    flag: '🇩🇪',
    country: 'de',
  },
  {
    type: 'micro',
    quote: 'Ludwik is a very professional and knowledgeable instructor!',
    author: 'Mike Polk - US Military',
    flag: '🇺🇸',
    country: 'us',
  },
  {
    type: 'micro',
    quote: 'It was a good course. The fast pace was good.',
    author: 'Thomas Zwack - Wiesbaden',
    flag: '🇩🇪',
    country: 'de',
  },
  {
    type: 'micro',
    quote: 'Very informative, good samples and hints. Good course.',
    author: 'Stephan Wolf - Wiesbaden',
    flag: '🇩🇪',
    country: 'de',
  },
];

// Helper function to render quote segments with highlights
const renderQuote = (quote: string | QuoteSegment[]) => {
  if (typeof quote === 'string') {
    return <span dangerouslySetInnerHTML={{ __html: quote }} />;
  }

  return (
    <>
      {quote.map((segment, idx) => {
        if (typeof segment === 'string') {
          return <span key={idx} dangerouslySetInnerHTML={{ __html: segment }} />;
        }
        return (
          <span key={idx} className="testimonial-highlight">
            {segment.highlight}
          </span>
        );
      })}
    </>
  );
};

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < testimonials.length) {
          setIsLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + 12, testimonials.length));
            setIsLoading(false);
          }, 300);
        }
      },
      { rootMargin: '200px' }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [visibleCount]);

  const renderCard = (item: Testimonial, index: number) => {
    if (item.type === 'cta') {
      return (
        <div key={index} className={`cta-block ${item.theme}`}>
          <div className="cta-text">{item.text}</div>
          <Link to={item.link} className="cta-button">
            {item.buttonText}
          </Link>
        </div>
      );
    }

    if (item.type === 'hero') {
      return (
        <div key={index} className="testimonial-card card-hero">
          <div className="quote">{renderQuote(item.quote)}</div>
          <div className="author">
            - {item.author} {item.flag}
          </div>
        </div>
      );
    }

    if (item.type === 'featured') {
      return (
        <div
          key={index}
          className={`testimonial-card card-featured country-${item.country}`}
        >
          <div className="quote">{renderQuote(item.quote)}</div>
          <div className="author">
            {item.author} {item.flag}
          </div>
          {item.location && <div className="location">{item.location}</div>}
          {item.badge && <div className="badge">{item.badge}</div>}
        </div>
      );
    }

    if (item.type === 'constructive') {
      return (
        <div key={index} className="testimonial-card card-constructive">
          <div className="label">Honest feedback</div>
          <div className="quote">{renderQuote(item.quote)}</div>
          <div className="author">
            {item.author} {item.flag}
          </div>
        </div>
      );
    }

    // Will be handled by grid rendering
    return null;
  };

  const renderTestimonials = () => {
    const visibleItems = testimonials.slice(0, visibleCount);
    const rendered: JSX.Element[] = [];
    let compactBuffer: CompactTestimonial[] = [];
    let microBuffer: MicroTestimonial[] = [];

    visibleItems.forEach((item, i) => {
      // Handle compact cards in grid
      if (item.type === 'compact') {
        compactBuffer.push(item);
        return;
      }

      // Flush compact buffer if needed
      if (compactBuffer.length > 0 && (item as Testimonial).type !== 'compact') {
        rendered.push(
          <div key={`compact-grid-${i}`} className="testimonials-grid">
            {compactBuffer.map((card, idx) => (
              <div key={idx} className="testimonial-card card-compact">
                <div className="quote">{renderQuote(card.quote)}</div>
                <div className="author">
                  {card.author} {card.flag}
                </div>
              </div>
            ))}
          </div>
        );
        compactBuffer = [];
      }

      // Handle micro cards in grid
      if (item.type === 'micro') {
        microBuffer.push(item);
        return;
      }

      // Flush micro buffer if needed
      if (microBuffer.length > 0 && (item as Testimonial).type !== 'micro') {
        rendered.push(
          <div key={`micro-grid-${i}`} className="testimonials-micro-grid">
            {microBuffer.map((card, idx) => (
              <div
                key={idx}
                className={`testimonial-card card-micro country-${card.country}`}
              >
                <div className="quote">{renderQuote(card.quote)}</div>
                <div className="author">
                  {card.author} {card.flag}
                </div>
              </div>
            ))}
          </div>
        );
        microBuffer = [];
      }

      // Render single cards
      const card = renderCard(item, i);
      if (card) rendered.push(card);
    });

    // Flush remaining buffers
    if (compactBuffer.length > 0) {
      rendered.push(
        <div key="compact-grid-final" className="testimonials-grid">
          {compactBuffer.map((card, idx) => (
            <div key={idx} className="testimonial-card card-compact">
              <div className="quote">{renderQuote(card.quote)}</div>
              <div className="author">
                {card.author} {card.flag}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (microBuffer.length > 0) {
      rendered.push(
        <div key="micro-grid-final" className="testimonials-micro-grid">
          {microBuffer.map((card, idx) => (
            <div
              key={idx}
              className={`testimonial-card card-micro country-${card.country}`}
            >
              <div className="quote">{renderQuote(card.quote)}</div>
              <div className="author">
                {card.author} {card.flag}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return rendered;
  };

  return (
    <Layout>
      <SEO {...getSEOConfig('/testimonials')} />

      <header className="testimonials-header">
        <div className="header-inner">
          <h1>100+ opinii od uczestników z 12 krajów</h1>
          <p className="subheadline">
            Żołnierze US Army, Navy i Marines, inżynierowie z Fortune 500, menedżerowie z NATO,
            przedsiębiorcy z Polski i Norwegii. Nie mówię Ci, że jestem dobry. Niech
            pokażą Ci to doświadczenia moich Klientów.
          </p>
          <p className="testimonials-stats">
            <strong>10 000+</strong> uczestników · <strong>19</strong> lat ·{' '}
            <strong>12+</strong> krajów ·{' '}
            <strong>US Department of Defense · EY · PWC · NATO · Microsoft</strong>
          </p>
        </div>
      </header>

      <div className="testimonials-container">{renderTestimonials()}</div>

      {isLoading && (
        <div className="loading-more">Ładowanie kolejnych opinii...</div>
      )}

      <div ref={observerRef} style={{ height: '1px' }} />

      {visibleCount >= testimonials.length && (
        <footer className="testimonials-footer">
          <p className="footer-text">Dobra, wystarczy. Możesz tak scrollować bez końca.</p>
          <p className="footer-subtext">Albo weźmiesz sprawy w swoje ręce i dołączysz do tego niesamowitego grona:</p>
          <Link to="/umow-rozmowe" className="cta-button">
            Umów Sesję Discovery →
          </Link>
        </footer>
      )}
    </Layout>
  );
};

export default Testimonials;
