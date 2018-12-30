import React, { Component } from 'react';
import moment from 'moment';

interface TimerProps {
  timerStyle?: any;
}

export default class Timer extends Component<TimerProps, any> {
  timer: any = null;

  public state = {
    currentTime: moment().valueOf(),
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({ currentTime: moment().valueOf() })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <span className={this.props.timerStyle}>
        {moment(this.state.currentTime).format('MMMM DD YYYY HH:mm:ss')}
      </span>
    )
  }
}
