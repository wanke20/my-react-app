import "./App.css";
// import { CongratulationsMessage } from "./CongratulationsMessage";
// import { CounterButton } from "./CounterButton";
// import { Greeting } from "./Greeting";
// import { PeopleList } from "./PeopleList";
import React from "react";
// import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HomePage, CounterButtonPage, PeopleListPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/counter">Go to Counter Page</Link>
        <Link to="/people-list">Go to People List Page</Link>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/counter" element={<CounterButtonPage />} />
          <Route path="/people-list" element={<PeopleListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
