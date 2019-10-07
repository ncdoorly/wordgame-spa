import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Letter extends Component {

   getStyle = () => {
       return {
        display: 'inline-block',
        visibility: this.props.letter.wasGuessed ? 'visible' : 'hidden'
    }
   } 

  render() {
    return (
      //TODO: extract out inline styles
      <span style={{display: 'inline-block', borderStyle: 'none none solid none', 
        margin: '10px', width: '40px'
        }}>
        <span style={this.getStyle()}>
           <h1 style={{margin: 0}}>{this.props.letter.character}</h1>
        </span>
        </span>
    )
  }
}

Letter.propTypes = {
    letter: PropTypes.object.isRequired
}

export default Letter;