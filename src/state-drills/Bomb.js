import React, { Component } from 'react'

export default class Bomb extends Component {
  state = { // set default state
    count: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => { // set this.interval sing the default function setInterval
      this.setState({ // change the state of this (Bomb class)
        count: this.state.count + 1 // add 1 to this.state.count
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval) // clean up after yourself if a component gets unmounted. 
  }

  renderDisplay() {
    const { count } = this.state // count is this.state
    if (count >= 8) {
      clearInterval(this.interval)
      return 'BOOM!!!!'
    } else if (count % 2 === 0) {
      return 'tick'
    } else {
      return 'tock'
    }
  }

  render() {
    return (
      <div className='CountdownBomb'>
        {this.renderDisplay()}
      </div>
    )
  }
}