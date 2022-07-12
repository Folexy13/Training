import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About } from "./Pages";
import { ROUTES } from "./Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Home />} />
          <Route exact path={ROUTES.ABOUT} element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
