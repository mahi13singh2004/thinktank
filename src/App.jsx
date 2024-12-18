import React from "react";
import Navbar from "./components/Navbar";
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Team from './pages/Team.jsx'

import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/team" element={<Team/>}/>
      </Routes>
    </>
  );
};

export default App;
