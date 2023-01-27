import { Contact } from './components/sections/contact';
import { Contributions } from './components/sections/contributions';
import { CoreValues } from './components/sections/core-values';
import { CoursesAndConferences } from './components/sections/courses-and-conferences';
import { ExperienceAndEducation } from './components/sections/experience-and-education';
import { Facts } from './components/sections/facts';
import { Header } from './components/sections/header';
import { Languages } from './components/sections/languages';
import { Skills } from './components/sections/skills';

export function App() {
  return (
    <div className="text-base font-normal">
      <div className="max-w-[1140px] flex flex-col mx-auto p-6">
        <Header />
        <Facts />
        <Skills />
        <CoreValues />
        <ExperienceAndEducation />
        <Languages />
        <CoursesAndConferences />
        <Contributions />
        <Contact />
      </div>
    </div>
  );
}
