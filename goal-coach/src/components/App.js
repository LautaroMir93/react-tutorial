import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import AddGoal from './AddGoal';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        <div>
          <h3>Goals</h3>
          <AddGoal></AddGoal>
          <div>Goal List</div>
        </div>
        <button className="btn btn-danger" onClick={() => this.signOut()}>Sign out</button>
      </div>

    );
  }
}

function mapStateToProps(state){
    console.log('state', state);
    return{}
}

export default connect(mapStateToProps)(App);
