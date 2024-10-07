import { Routes, Route } from "react-router-dom";

import { Home, Error, Event, Faq, Team } from "./Pages";
import AboutNits from "./Components/About/NitsHacks/NitsHacks";
import AboutTech from "./Components/About/Tecno/Tecno";
import EventSection from "./Components/Event/Event";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/:id" element={<Event />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/team" element={<Team />} />
      <Route path="*" element={<Error />} />
      <Route path="/AboutNits" element={<AboutNits />} />
      <Route path="/AboutTech" element={<AboutTech />} />
      <Route path="/eventSection" element={<EventSection />} />
    </Routes>
  );
};

export default App;
