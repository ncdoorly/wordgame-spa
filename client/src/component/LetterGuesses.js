import React, { Component } from 'react';
import LetterGuess from './LetterGuess'
import PropTypes from 'prop-types'

class LetterGuesses extends Component {

  render() {
    return this.props.letterGuesses.map((letterGuess) => (
        <LetterGuess letterGuess={letterGuess} makeGuess={this.props.makeGuess}/>
    ));
  
  }
}

LetterGuesses.propTypes = {
  letterGuesses : PropTypes.array.isRequired
}

export default LetterGuesses;
