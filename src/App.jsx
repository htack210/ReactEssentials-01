import Header from "./components/header"
import MainGoal from "./components/mainGoal";
import CoreConcept from "./components/coreConcept"
import CORE_CONCEPTS from "./data";
import TabButton from "./components/TabButton";

function App() {
  function handleSelect(selectedButton) {
    console.log(selectedButton + " selected!");
  }

  return (
    <div>
      <Header />
      <MainGoal />
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
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>
              JSX
            </TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>
              Props
            </TabButton>
            <TabButton onSelect={() => handleSelect('State')}>
              State
            </TabButton>
          </menu>
          Dynamic content
        </section>
      </main>
    </div>
  );
}

export default App;
