import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Letter extends Component {

   getStyle = () => {
       return {
        display: 'inline-block',
        margin: '10px',
        visibility: this.props.letter.wasGuessed ? 'visible' : 'hidden'
    }
   } 

  render() {
    return (
        <span style={this.getStyle()}>
           <h1>{this.props.letter.character}</h1>
        </span>
    )
  }
}

Letter.propTypes = {
    letter: PropTypes.object.isRequired
}

export default Letter;