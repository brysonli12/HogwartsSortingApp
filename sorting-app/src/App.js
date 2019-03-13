import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './questions/Introduction'
import Question from './questions/QuestionForm'
import RevealHouse from './questions/RevealHouse'
import QuestionData from './questions/QuestionData'
import { Button } from 'semantic-ui-react'; // Icon

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houseScores: {
        gryffindor: 0,
        ravenclaw: 0,
        slytherin: 0,
        hufflepull: 0,
      },
      currentQuestion: 0,
      nextDisabled: false,
      totalNumberOfQuestions: Object.keys(QuestionData).length,
    }
    this.handleNext = this.handleNext.bind(this)
    this.handleNextStart = this.handleNextStart.bind(this)
    this.addPointsToHouse = this.addPointsToHouse.bind(this)
  }
  componentDidUpdate() {
    console.log(this.state.houseScores);
  }

  handleNextStart(e) {
    // hide the introduction Next button and reset scores
    this.setState({ houseScores: {
      gryffindor: 0,
      ravenclaw: 0,
      slytherin: 0,
      hufflepull: 0,
    }, nextDisabled: true, currentQuestion: (this.state.currentQuestion + 1) % (this.state.totalNumberOfQuestions + 2) })
  }

  handleNext(e) {
    // to be used only by QuestionForm to go to next question
    this.setState({ currentQuestion: (this.state.currentQuestion + 1) % (this.state.totalNumberOfQuestions + 2) })
  }

  renderQuestion() {
    const questionNumber = this.state.currentQuestion;
    const { houseScores } = this.state;

    if (this.state.currentQuestion === 0) {
      return <Introduction />
    } else if (this.state.currentQuestion < this.state.totalNumberOfQuestions + 1) {
<<<<<<< HEAD
        question={QuestionData[questionNumber]} />
=======
      return <Question addPts={this.addPointsToHouse}
=======
      return <Question addPts={this.addPointsToHouse}
        question={QuestionData[questionNumber]} handleNext={this.handleNext} />
>>>>>>> 17f15008bc3438cafd2e1d97d7a2382b1d53419d
    } else {
      return <RevealHouse houseScores={houseScores} />
    }
  }

  addPointsToHouse(houseNum, pointsToAdd) {
    const { houseScores: { gryffindor: gry, ravenclaw: rav, slytherin: sly, hufflepull: huf } } = this.state;
    switch (houseNum) {
      case '0':
        this.setState({ houseScores: { gryffindor: gry + pointsToAdd,
        ravenclaw: rav, slytherin: sly, hufflepull: huf } })
        break;
      case '1':
        this.setState({ houseScores: { ravenclaw: rav + pointsToAdd,
         gryffindor: gry, slytherin: sly, hufflepull: huf } })
        break;
      case '2':
        this.setState({ houseScores: { slytherin: sly + pointsToAdd,
        gryffindor: gry, ravenclaw: rav, hufflepull: huf } })
        break;
      default:
        this.setState({ houseScores: { hufflepull: huf + pointsToAdd,
        gryffindor: gry, ravenclaw: rav, slytherin: sly } })
    }
  }

  render() {
    let nextButton;
    if (this.state.nextDisabled)
      nextButton = <div></div> //<Button disabled>Next</Button>
    else
      nextButton = <Button onClick={this.handleNextStart}>Next</Button>
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.renderQuestion()}
          {nextButton}
        </header>
      </div>
    );
  }
}

export default App;
