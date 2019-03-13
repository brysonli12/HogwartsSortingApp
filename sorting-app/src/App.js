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
    // console.log(this.state);
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
      return <Question addPts={this.addPointsToHouse}
        question={QuestionData[questionNumber]} handleNext={this.handleNext} />
    } else {
      return <RevealHouse houseScores={houseScores} />
    }
  }

  addPointsToHouse(houseNum, pointsToAdd) {
    const { houseScores: { gry, rav, sly, huf } } = this.state;
    switch (houseNum) {
      case '0':
        this.setState({ houseScores: { gryffindor: gry + pointsToAdd } })
        break;
      case '1':
        this.setState({ houseScores: { ravenclaw: rav + pointsToAdd } })
        break;
      case '2':
        this.setState({ houseScores: { slytherin: sly + pointsToAdd } })
        break;
      default:
        this.setState({ houseScores: { hufflepull: huf + pointsToAdd } })
    }
    // possible that we automatically advance the question
    // then we don't need the button and don't have to check whether
    // or not the user made a choice (a choice --> advance [no redos])
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
