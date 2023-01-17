import { Contact } from './components/contact';
import { CoursesAndConferences } from './components/courses-and-conferences';
import { Facts } from './components/facts';
import { Header } from './components/header';
import { Skills } from './components/skills';

export function App() {
  return (
    <div className="text-base font-normal">
      <div className="max-w-[1140px] flex flex-col mx-auto p-6">
        <Header />
        <Facts />
        <Skills />
        <CoursesAndConferences />
        <Contact />
      </div>
    </div>
  );
}
