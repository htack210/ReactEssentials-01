import { useState } from 'react';

import Header from "./components/header"
import MainGoal from "./components/mainGoal";
import CoreConcept from "./components/coreConcept"
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./components/TabButton";
import Tabs from './components/Tabs';
import Section from "./components/Section"

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <Header />
      <MainGoal />
      <main>
        <Section id="core-concepts" title="Core Concepts">
          <ul>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept key={concept.title} {...concept} />
          ))}
          </ul>
        </Section>
        <Section id="examples" title="Examples">
          <Tabs buttons={<>{Object.keys(EXAMPLES).map((topic) => (
              <TabButton key={topic} isSelected={selectedTopic === topic} onSelect={() => handleSelect(topic)}>
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </TabButton>
            ))}</>}>
             
          </Tabs>
          {/* <menu>
            {Object.keys(EXAMPLES).map((topic) => (
              <TabButton key={topic} isSelected={selectedTopic === topic} onSelect={() => handleSelect(topic)}>
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </TabButton>
            ))}
          </menu> */}
          {!selectedTopic && <h3>Please select a topic...</h3>}
          {selectedTopic && (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)
          }
        </Section>
      </main>
    </>
  );
}

export default App;
