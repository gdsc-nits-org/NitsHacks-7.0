import { useState } from "react";
import { Home } from "./Pages";
import { Preview } from "./Components";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  return loaded ? <Home /> : <Preview setLoaded={setLoaded} />;
};

export default App;
