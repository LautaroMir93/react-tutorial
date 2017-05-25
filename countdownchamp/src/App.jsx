import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      countdown: '00:20:20',
      newCountdown: '',
      countdownChanged:false,
    }
  }

  changeCountdown(){
    this.setState({
      countdown: this.state.newCountdown,
      countdownChanged:true,
    })
  }

  countdownChangedToFalse(){
    this.setState({
      countdownChanged:false,
    })
  }


  render(){
    return(
      <div className='App'>
        <div className='App-title'>Countdown to {this.state.countdown}</div>
        <Stopwatch countdown={this.state.countdown} countdownChanged={this.state.countdownChanged} countdownChangedToFalse={ () => this.countdownChangedToFalse()}/>
        <Form inline>
          <FormControl className="deadlineInput" placeholder="00:00:00" onChange={event => this.setState({newCountdown:event.target.value})}/>
        <Button onClick={() => this.changeCountdown()}>Submit</Button>
      </Form>
      </div>
    )
  }
}

export default App;
