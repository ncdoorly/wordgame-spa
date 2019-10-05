import React, { Component } from 'react';
import Letter from './Letter'
import PropTypes from 'prop-types'

class Word extends Component {

  render() {
    return this.props.word.map((letter) => (
        <Letter key={letter.id} letter={letter}/>
    ));
  
  }
}

Word.propTypes = {
  word : PropTypes.array.isRequired
}

export default Word;
