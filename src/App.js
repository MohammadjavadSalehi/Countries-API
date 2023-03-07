import './App.css';
import React  from 'react';
import Home from "./components/Home"
import Cards from "./components/Cards"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {

  const [country, setCountry] = useState([]);

  return (
    
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:r" element={<Cards country={country} />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
