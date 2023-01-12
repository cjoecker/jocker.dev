import 'mapbox-gl/dist/mapbox-gl.css';
import { Facts } from './components/facts';
import { Title } from './components/title';
import { Skills } from './components/skills';

export function App() {
  return (
    <div className="text-base font-normal">
      <div className="max-w-[1140px] flex flex-col mx-auto">
        <Title />
        <Facts />
        <Skills />
      </div>
    </div>
  );
}
