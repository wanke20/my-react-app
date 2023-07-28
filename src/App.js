import "./App.css";
// import { CongratulationsMessage } from "./CongratulationsMessage";
// import { CounterButton } from "./CounterButton";
// import { Greeting } from "./Greeting";
// import { PeopleList } from "./PeopleList";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  HomePage,
  CounterButtonPage,
  PeopleListPage,
  NotFoundPage,
  ProtectedPage,
  ControlledFormPage,
  UncontrolledFormPage,
  UserProfilePage,
} from "./pages";
import { NavBar } from "./pages/NavBar";
import { FormsNavBar } from "./pages/FormsNavBar";

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="App-header">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/counter" element={<CounterButtonPage />} />
            <Route path="/people-list" element={<PeopleListPage />} />
            <Route path="/protected" element={<ProtectedPage />} />
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/forms" element={<FormsNavBar />} >
              <Route path="controlled" element={<ControlledFormPage />} />
              <Route path="uncontrolled" element={<UncontrolledFormPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
