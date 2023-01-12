import 'mapbox-gl/dist/mapbox-gl.css';
import { Facts } from './components/facts';
import { Title } from './components/title';

export function App() {
  return (
    <div className="text-base">
      <Title />
      <Facts />
    </div>
  );
}
