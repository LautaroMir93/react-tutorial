import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';
import { setGoals } from '../actions';
import { GoalItem } from './GoalItem';

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
    console.log('this.props.goals', this.props.goals);
    return (
      <div>
        {/* {
          this.props.goals.map((goal, index) => {
            return(
              <GoalItem key={index} goal={goal} />
            )
          })
        } */}
      </div>
    )
  }
}

export default connect(null, { setGoals })(GoalList);
