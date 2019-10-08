import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Word from './component/Word';
import LetterGuesses from './component/LetterGuesses'
import GuessCountDown from './component/GuessCountDown'

const axios = require('axios');
const numGuessesGiven = 5;

class App extends Component{
  state =
  {
    word: [],
    guessesRemaining: numGuessesGiven,
    alphabet : ['A','B','C','D','E','F','G','H','I','J',
    'K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  }

  getNewWord = (e) => {
    axios.get('/api/word?category=hard')
    .then( (response) => {
      //console.log(response);
      this.setState({
        word : response.data.word,
        guessesRemaining : numGuessesGiven
      });
      document.getElementById("gameArea").style.visibility = "visible"; 
    })
    .catch((error) => {
      console.log(error);
    })
  }

  //Make letters visible if they match guessed letter
  makeGuess = (guessLetter) => {
    if (this.state.guessesRemaining === 0){
      //TODO: Make this alert prettier
      alert("No more guesses! Click the button to get a new word.")
      return
    }
    var prevGuessesRemaining = this.state.guessesRemaining;
    var wasCorrectGuess = false;
    this.setState({
      word: this.state.word.map(function(letter) {
        if(letter.character === guessLetter) {
          letter.wasGuessed = true;
          wasCorrectGuess = true;
        }
        return letter;
      }),
      //TODO: fix behavior - you can still make guesses even if there are no remaining letters to be guessed
      guessesRemaining: !wasCorrectGuess ? (prevGuessesRemaining === 0 ? 0 :  prevGuessesRemaining-1) : prevGuessesRemaining
    });
}

//TODO: render gameArea div hidden until first word is loaded
  render() {
    return (
      <div className="App">
        <h1>Can you guess the word?</h1>
        <div>
            <button onClick={this.getNewWord}>Give me a word!</button>          
          <div id='gameArea' style={{visibility : 'hidden'}}>
              <GuessCountDown guessesRemaining={this.state.guessesRemaining}/>
            <div>
              <Word word={this.state.word}/>
            </div>
            <div>
              <LetterGuesses letterGuesses={this.state.alphabet} makeGuess={this.makeGuess} />
            </div>
          
          </div>
         
      </div>
      </div>
    );
  }
}

export default App;
