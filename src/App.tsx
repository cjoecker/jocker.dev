import { Contact } from './components/contact';
import { CoursesAndConferences } from './components/courses-and-conferences';
import { Facts } from './components/facts';
import { Skills } from './components/skills';
import { Title } from './components/title';

export function App() {
  return (
    <div className="text-base font-normal">
      <div className="max-w-[1140px] flex flex-col mx-auto p-6">
        <Title />
        <Facts />
        <Skills />
        <CoursesAndConferences />
        <Contact />
      </div>
    </div>
  );
}
