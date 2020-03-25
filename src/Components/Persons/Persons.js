import React, { Component, Fragment } from "react";
import "./Persons.css";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import PersonInfo from "../PersonInfo/PersonInfo";

export default class Persons extends Component {
  constructor() {
    super();

    this.state = {
      cast: [],
      next: undefined,
      prev: undefined,
      loading: true
    };
  }

  componentDidMount() {
    this.getAllPersonInfo();
  }

  getAllPersonInfo = url => {
    fetch(url || "https://swapi.co/api/people")
      .then(response => response.json())
      .then(response => {
        this.setState({
          next: response.next,
          prev: response.previous,
          cast: response.results,
          loading: false
        });
      });
  };

  moveForward = () => this.getAllPersonInfo(this.state.next);

  moveBack = () => this.getAllPersonInfo(this.state.prev);

  render() {
    const { loading } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <>
          <ul className="list-group list-group-flush">
            {this.state.cast.map(pers => {
              return (
                <div
                  className="card text-white bg-dark rounded"
                  key={pers.name}
                  to={pers.name}
                >
                  <div className="photo">
                    <img
                      className="card-img-top"
                      src={`https://starwars-visualguide.com/assets/img/characters/${
                        pers.url.match(/\/([0-9]*)\/$/)[1]
                      }.jpg`}
                      alt={pers.name}
                    />
                  </div>
                  <div>
                    <Link
                      to={`/info/${pers.name}`}
                      className="card-header font-weight-bold"
                    >
                      {pers.name}
                    </Link>
                    <ul className="card-body list-group list-group-flush ">
                      <li className="card-text">
                        <span className="term ">Birth Year: </span>
                        <span className="font-italic">{pers.birth_year}</span>
                      </li>
                      <li className="card-text">
                        <span className="term">Gender: </span>
                        <span className="font-italic">{pers.gender}</span>
                      </li>
                      <li className="card-text">
                        <span className="term">Height: </span>
                        <span className="font-italic">{pers.height}</span>
                      </li>
                      <li className="card-text">
                        <span className="term">Weigth: </span>
                        <span className="font-italic">{pers.mass}</span>
                      </li>
                      <li className="card-text">
                        <span className="term">Eye Color: </span>
                        <span className="font-italic">{pers.eye_color}</span>
                      </li>
                      <li className="card-text">
                        <span className="term">Hair Color: </span>
                        <span>{pers.hair_color}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </ul>
        </>
        <div className="button btn-lg text-center">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={this.moveBack}
          >
            Prev
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={this.moveForward}
          >
            Next
          </button>
        </div>
      </Fragment>
    );
  }
}
