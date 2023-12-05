import React from "react";
import Navbar from "./Componenet/Navbar";
import Home from "./Componenet/Home";
import Satellite from "./Componenet/Satellite";
import Launches from "./Componenet/Launches";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Astronomy from "./Componenet/Astronomy";

export default function App() {

  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
            <Route exact path="/The-Cosmonaut" element={<Home />}/>
              
            <Route exact path="/The-Cosmonaut/satellites" element={<Satellite />}/>
              
            <Route exact path="/The-Cosmonaut/missons" element={<Launches />}/>
              
            <Route exact path="/The-Cosmonaut/astronomy" element={<Astronomy />}/>

          </Routes>
      </Router>
    </div>
  );
}
