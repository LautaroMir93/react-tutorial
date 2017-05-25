import React, { Component } from 'react'
import './App.css'

class Stopwatch extends Component{
  constructor(props){
    super(props);
    const timeArray = this.props.countdown.split(':');
    let hours = Number.parseInt(timeArray[0], 10);
    let minutes = Number.parseInt(timeArray[1], 10);
    let seconds = Number.parseInt(timeArray[2], 10);
    this.state = {
      hours:hours,
      minutes:minutes,
      seconds:seconds,
    }
  }

  componentDidMount(){
    setInterval( () => this.getTimeUntilZero(this.props.countdown), 1000);
  }

  componentWillMount(){
    this.getTimeUntilZero(this.props.countdown);
  }

  leading0(num){
    return (num<10) ? '0' + num : num;
  }

  getTimeUntilZero(countdown){
    let hours;
    let minutes;
    let seconds;
    if (this.props.countdownChanged){
      const timeArray = this.props.countdown.split(':');
      hours = Number.parseInt(timeArray[0], 10);
      minutes = Number.parseInt(timeArray[1], 10);
      seconds = Number.parseInt(timeArray[2], 10);
      this.props.countdownChangedToFalse();
    }else{
      hours = this.state.hours;
      minutes = this.state.minutes;
      seconds = this.state.seconds;
    }
    if (hours!==0 ||  minutes!==0 || seconds!==0){
      seconds--;
      if(seconds<0){
        seconds=60;
        minutes--;
        if (minutes<0){
          minutes=60;
          hours--;
        }
      }
      this.setState({hours,minutes,seconds});
    }
  }

  render(){
    return(
      <div>
        <div className='Clock-hours'>{this.state.hours} Hours</div>
        <div className='Clock-minutes'>{this.state.minutes} Minutes</div>
        <div className='Clock-seconds'>{this.state.seconds} Seconds</div>
      </div>
    );

  }
}

export default Stopwatch;
