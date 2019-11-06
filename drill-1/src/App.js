import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {addGuest, removeGuest, handleChange, toggleEdit} from './ducks/guestList'

  class App extends Component {
    
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.list.map((guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{guest.name}</li>
                <input hidden={!guest.showEdit} onChange={this.props.handleChange}/>
                <button onClick={() => this.props.toggleEdit(i)}>Edit</button>
                <button onClick={() => this.props.removeGuest(i)}>
                  Remove
                </button>
              </div>
            )
          })}
        </ul>
        <div className="add-guest">
          Add guest:{" "}
          <input value={this.props.guest} onChange={e => this.props.handleChange(e.target.value)} />
          <button onClick={() => this.props.addGuest(this.props.guest)}>
            Add
          </button>
        </div>
      </div>
    )
  }

}
   const mapStateToProps = (state) => {
    return {
      list: state.guests,
      guest: state.newGuest
    }
  
  }
export default connect(mapStateToProps, {addGuest, removeGuest, handleChange, toggleEdit} ) (App);
