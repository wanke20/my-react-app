// import logo from "./logo.svg";
import "./App.css";
import { Greeting } from "./Greeting";
import { PeopleList } from "./PeopleList";
import React from "react";

const people = [{
  name: 'John',
  age: 40,
  hairColor: 'brown',
}, {
  name: 'Helga',
  age: 25,
  hairColor: 'red',
}, {
  name: 'Dwayne',
  age: 55,
  hairColor: 'blonde',
}]

function App() {
  let adjective = "cool";
  let url = "https://reactjs.org";

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
