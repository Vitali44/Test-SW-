import React, { Component } from 'react'
import "./Persons.css"

export default class Persons extends Component{

  constructor(){
    super()

    this.state = {
      'cast': []
    }
  }

  componentDidMount(){
    this.getPersonInfo();
  }
  
  getPersonInfo () {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(response => this.setState({cast: response.results}))
  }

  render() {
  
    return(
      <ul className='list-group'>
        {this.state.cast.map((pers, index) => {
          return (
            <div className="card text-white bg-dark rounded"></div>
          )
        })}
      </ul>
      // <div className="card text-white bg-dark rounded">
      //   <div class="card-header">{name}</div>
      //   <button className="btnFind" 
      //           onClick={this.getPersonInfo}>
      //           Get Info
      //   </button>
      //   <ul class="card-body">
      //     <li className="card-text">
      //       <span className="term">Gender: </span>
      //       <span>{gender}</span>
      //     </li>
      //     <li className="card-text">
      //       <span className="term">Height: </span>
      //       <span>{height}</span>
      //     </li>
      //     <li className="card-text">
      //       <span className="term">Weigth: </span>
      //       <span>{weigth}</span>
      //     </li>
      //     <li className="card-text">
      //       <span className="term">Age: </span>
      //       <span>{age}</span>
      //     </li>
      //   </ul>
      // </div>
    )
  };
};
