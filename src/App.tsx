import { Facts } from './components/facts';
import { Title } from './components/title';
import { Skills } from './components/skills';
import { Contact } from './components/contact';
import { CoursesAndConferences } from './components/courses-and-conferences';

export function App() {
  return (
    <div className="text-base font-normal">
      <div className="max-w-[1140px] flex flex-col mx-auto">
        <Title />
        <Facts />
        <Skills />
        <CoursesAndConferences />
        <Contact />
      </div>
    </div>
  );
}
