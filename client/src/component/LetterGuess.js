import React, { Component } from 'react';
import PropTypes from 'prop-types'

class LetterGuess extends Component {
  
  render() {
    return (
      //TODO: render button as disabled if was clicked once 
        <button onClick={this.props.makeGuess.bind(this,this.props.letterGuess) }>
        {this.props.letterGuess}</button>
    )
  }
}

LetterGuess.propTypes = {
    letterGuess: PropTypes.string.isRequired
}

export default LetterGuess;