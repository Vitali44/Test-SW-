import React from "react";
import { Route, Switch } from "react-router-dom";
import Persons from "../src/Components/Persons/Persons";
import "./App.css";
import PersonInfo from "./Components/PersonInfo/PersonInfo";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <>
            <Switch>
              <Route path="/" exact component={Persons}/>>
              <Route path="/info/:name" component={PersonInfo} />>
            </Switch>
          </>
        </div>
      </>
    );
  }
}

export default App;
