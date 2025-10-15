import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { Home } from "./Pages";
import { Preview } from "./Components";
import LandingPage from './LandingPage';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("G-VVX3QJCVSM");
    ReactGA.send("pageview", location.pathname + location.search);
  }, [location]);
  
  return <LandingPage />;
};

export default App;
