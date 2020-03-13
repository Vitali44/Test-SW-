import React, { Component, Fragment } from 'react'
import "./Persons.css"

export default class Persons extends Component{

  constructor(){
    super()

    this.state = {
      cast: [],
    }
  }

  componentDidMount(){
    this.getAllPersonInfo();
    // this.getPersonalInfo();
  }
  
  getAllPersonInfo = (url) => {
    fetch(url || 'https://swapi.co/api/people')
      .then(response => response.json())
      .then(response => {
        console.log('response', response);
        this.setState({
          next: response.next,
          prev: response.previous,
          cast: response.results,
        })
      })
  }

  getPersonalInfo = (id) => {
    fetch(`https://swapi.co/api/people/${id}/`)
    .then(response => response.json())
    .then(response => this.setState({cast: response.results}))
  }

  moveForward = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }), () => {
      this.getAllPersonInfo(this.state.page);
    })
  }

  render() {
  
    return(
      <ul className='list-group list-group-flush'>
        {this.state.cast.map((pers, index) => {
          return (
            <div className="card text-white bg-dark rounded">
              <div className="photo">
                <img className="card-img-top" src="https://starwars-visualguide.com/assets/img/characters/1.jpg"/>
              </div>
              <div>
              <div className='card-header'>{pers.name}</div>
              <Fragment>
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
              </Fragment>
              </div>
            </div>
          )
        })}
      </ul>
    )
  };
};
