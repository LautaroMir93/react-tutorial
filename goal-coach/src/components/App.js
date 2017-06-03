import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="App" style={{margin: '5px'}}>
        <div>
          <h3>Goal Coach</h3>
          <AddGoal />
          <hr/>
          <h4>Goals</h4>
          <hr/>
          <GoalList />
        </div>
        <button className="btn btn-danger" onClick={() => this.signOut()}>Sign out</button>
      </div>
    );
  }
}

function mapStateToProps(state){
    return{}
}

export default connect(mapStateToProps)(App);
