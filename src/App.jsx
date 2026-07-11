import { Header, MainGoal, CoreConcept } from "./Parts"
import components from './assets/components.png';
import jsxui from './assets/jsx-ui.png';
import statemgmt from './assets/state-mgmt.png';
import config from './assets/config.png';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts" />
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept />
          <CoreConcept />
          <CoreConcept />
          <CoreConcept />
        </ul>
      </main>
      <MainGoal />
    </div>
  );
}

export default App;
