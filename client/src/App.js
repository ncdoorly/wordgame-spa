import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Word from './component/Word';
import LetterGuesses from './component/LetterGuesses'

const axios = require('axios');

class App extends Component{
  state =
  {
    word: [],
    totalGuesses: 0,
    alphabet : ['A','B','C','D','E','F','G','H','I','J',
    'K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  }

  handleClick = (e) => {
    axios.get('/api/word')
    .then( (response) => {
      console.log(response);
      this.setState({
        word : response.data.word
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally( () => {
    });
    
  }

  //Make letters visible if they match guessed letter
  makeGuess = (guessLetter) => {
    this.setState({
      word: this.state.word.map(letter => {
        if(letter.character === guessLetter) {
          letter.wasGuessed = true;
        }
        return letter;
      })
    });
}
  render() {
    return (
      <div className="App">
        <h1>Can you guess the word?</h1>
        <div>
            <button onClick={this.handleClick}>Get a new word!</button>
          </div>
          <div style={{height: '60px'}}>
            <Word word={this.state.word}/>
          </div>
          <div>
            <LetterGuesses letterGuesses={this.state.alphabet} makeGuess={this.makeGuess} />
          </div>
         
      </div>
    );
  }

}

export default App;
