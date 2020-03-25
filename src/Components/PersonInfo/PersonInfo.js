import React, { Component } from "react";
import "./PersonInfo.css";
import { Link } from "react-router-dom";

export default class PersonInfo extends Component {

  componentDidMount() {
    console.log("Boo");
  }

  render() {
    return (
      <div>
        <h1>More info</h1>
        <Link to='/'>
          <button type="button">Back to List</button>
        </Link>
      </div>
    );
  }
}
