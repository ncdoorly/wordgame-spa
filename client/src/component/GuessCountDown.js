import React, { Component } from 'react';
//import PropTypes from 'prop-types'

class GuessCountDown extends Component {

  render() {
    return (
     <h2>Guesses remaining: {this.props.guessesRemaining}</h2>
    )
  }
}

//TODO: add prop type

export default GuessCountDown;