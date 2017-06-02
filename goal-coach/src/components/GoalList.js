import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';
import { setGoals } from '../actions';

class GoalList extends Component{
  componentDidMount(){
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach( goal => {
        const {email, title} = goal.val();
        goals.push({email, title});
      })
      this.props.setGoals(goals);
    })
  }

  render(){
    return (
      <div>Goal List</div>

    )
  }
}

export default connect(null, { setGoals })(GoalList);
