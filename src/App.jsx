import { Routes, Route } from "react-router-dom";

import { Home, Error, Event, Faq, Team } from "./Pages";
import EventSection from "./Components/Event/Event";
import Testimonial from "./Components/Testimonial/Testimonial";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/:id" element={<Event />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/team" element={<Team />} />
      <Route path="*" element={<Error />} />
      <Route path="/eventSection" element={<EventSection />} />
      <Route path="/testimonial" element={<Testimonial />} />
    </Routes>
  );
};

export default App;
