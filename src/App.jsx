import { Header, MainGoal, CoreConcept } from "./Parts"
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Keeping to show alternative way to render */}
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            {/* Use spreader to get key-value pairs */}
            <CoreConcept{...CORE_CONCEPTS[1]} />
            <CoreConcept{...CORE_CONCEPTS[2]} />
            <CoreConcept{...CORE_CONCEPTS[3]} />
          </ul>

        </section>
      </main>
      <MainGoal />
    </div>
  );
}

export default App;
