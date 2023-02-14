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
    <div className="text-base font-normal">
      <Header />
      <div className="w-full flex flex-col">
        <div className="mx-6">
          <ServiceOffer />
          <Facts />
          {/*<ServiceOffer />*/}
          {/*<Skills />*/}
          {/*<CoreValues />*/}
          {/*<ExperienceAndEducation />*/}
          {/*<Languages />*/}
          {/*<Testimonials />*/}
          {/*<Contributions />*/}
          {/*<CoursesAndConferences />*/}
          {/*<AboutMe />*/}
          {/*<Contact />*/}
        </div>
      </div>
    </div>
  );
}
