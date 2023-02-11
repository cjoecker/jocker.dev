import { AboutMe } from './components/sections/about-me';
import { Contact } from './components/sections/contact';
import { Contributions } from './components/sections/contributions';
import { CoreValues } from './components/sections/core-values';
import { CoursesAndConferences } from './components/sections/courses-and-conferences';
import { ExperienceAndEducation } from './components/sections/experience-and-education';
import { Facts } from './components/sections/facts';
import { Header } from './components/sections/header';
import { Languages } from './components/sections/languages';
import { ServiceOffer } from './components/sections/service-offer';
import { Skills } from './components/sections/skills';
import { Testimonials } from './components/sections/testimonials';

export function App() {
  return (
    <div className="text-base font-normal h-full">
      <Header />
      <div className="max-w-[1140px] flex flex-col mx-auto p-6 overflow-x-hidden">
        <Facts />
        <ServiceOffer />
        <Skills />
        <CoreValues />
        <ExperienceAndEducation />
        <Languages />
        <Testimonials />
        <Contributions />
        <CoursesAndConferences />
        <AboutMe />
        <Contact />
      </div>
    </div>
  );
}
