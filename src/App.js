import "./App.css";
// import { CongratulationsMessage } from "./CongratulationsMessage";
// import { CounterButton } from "./CounterButton";
// import { Greeting } from "./Greeting";
// import { PeopleList } from "./PeopleList";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, 
  ProtectedPage } from "./pages";

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <Router>
        <Link to="/counter">Go to Counter Page</Link>
        <Link to="/people-list">Go to People List Page</Link>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/counter" element={<CounterButtonPage />} />
          <Route path="/people-list" element={<PeopleListPage />} />
          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
