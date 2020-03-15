import React, { Component, Fragment } from 'react'
import "./Persons.css"
import Spinner from '../Spinner/Spinner';

export default class Persons extends Component{

  constructor(){
    super()

    this.state = {
      cast: [],
      next: undefined,
      prev: undefined,
      loading: true,
    }
  }

  componentDidMount(){
    this.getAllPersonInfo();
  }
  
  getAllPersonInfo = (url) => {
    fetch(url || 'https://swapi.co/api/people')
      .then(response => response.json())
      .then(response => {
        this.setState({
          next: response.next,
          prev: response.previous,
          cast: response.results,
          loading: false,
        })
      })
  }

  getPersonalInfo = (id) => {
    fetch(`https://swapi.co/api/people/${id}/`)
    .then(response => response.json())
    .then(response => this.setState({cast: response.results}))
  }

  moveForward = () => this.getAllPersonInfo(this.state.next)

  moveBack = () => this.getAllPersonInfo(this.state.prev)

  render() {

    const { loading } = this.state;

    if(loading) {
      return <Spinner/>
    }
  
    return(
      <Fragment>
        <>
          <ul className='list-group list-group-flush'>
            {this.state.cast.map((pers, index) => {
              return (
                <div className="card text-white bg-dark rounded">
                  <div className="photo">
                    <img className="card-img-top" src="https://starwars-visualguide.com/assets/img/characters/1.jpg"/>
                  </div>
                  <div>
                  <div className='card-header'>{pers.name}</div>
                    <ul className="card-body">
                      <li className="card-text">
                        <span className="term">Birth Year: </span>
                        <span>{pers.birth_year}</span>
                      </li>                
                      <li className="card-text">
                        <span className="term">Gender: </span>
                        <span>{pers.gender}</span>
                      </li>
                      <li className="card-text">
                        <span className="term">Height: </span>
                        <span>{pers.height}</span>
                      </li>
                      <li className="card-text">
                        <span className="term">Weigth: </span>
                        <span>{pers.mass}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )
            })}
          </ul>
        </>
      <div className="button btn-lg text-center">
        <button type="button"
                className="btn btn-primary btn-lg"
                onClick={this.moveBack}>Prev</button>
        <button type="button"
                className="btn btn-primary btn-lg"
                onClick={this.moveForward}>Next</button>
      </div>

      </Fragment>
    )
  };
};
