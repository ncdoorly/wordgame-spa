import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Word from './component/Word';
import LetterGuesses from './component/LetterGuesses'

class App extends Component{
  state =
  {
    word: [
      {
        id : 1,
        character : 'H',
        wasGuessed : false
      },
      {
        id : 2,
        character : 'E',
        wasGuessed : false
      },
      {
        id : 3,
        character : 'L',
        wasGuessed : false
      },
      {
        id : 4,
        character : 'L',
        wasGuessed : false
      },
      {
        id : 5,
        character : 'O',
        wasGuessed : false
      }
    ],
    alphabet : ['A','B','C','D','E','F','G','H','I','J',
    'K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  }

  // componentDidMount() {
  //   //TODO: update state here from mongodb
  //   console.log("loaded app")
  // }

  //Make letters visible if they match guessed letter
  makeGuess = (guessLetter) => {
    //console.log(guessLetter);
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
