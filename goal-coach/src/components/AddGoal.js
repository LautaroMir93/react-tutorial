import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';

class AddGoal extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal(){
    const { title } = this.state;
    const { email } = this.props.userReducer;
    goalRef.push({email, title});
  }

  render(){
    return(
      <div className="form-inline">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="" style={{marginRight: '5px'}} onChange={(event) => this.setState({title:event.target.value})}/>
          <button className="btn btn-success" type="button" onClick={() => this.addGoal()}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {userReducer} = state;
  return {
    userReducer
  }
}

export default connect(mapStateToProps,null)(AddGoal);
