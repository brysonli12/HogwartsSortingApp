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
      gryffindor: 0,
      ravenclaw: 0,
      slytherin: 0,
      hufflepull: 0,
      currentQuestion: 0,
      nextDisabled: false,
      totalNum: QuestionData["count"],
    }
    this.handleNext = this.handleNext.bind(this)
    this.addPointsToHouse = this.addPointsToHouse.bind(this)
  }
  componentDidUpdate() {
    // console.log(this.state);
  }
  handleNext(e) {
    //console.log(this.state.currentQuestion);
    this.setState({ currentQuestion: (this.state.currentQuestion + 1) % (QuestionData["count"]+2) })
  }

  renderQuestion() {
    let qnum = this.state.currentQuestion
    console.log(QuestionData[qnum])
    if (this.state.currentQuestion === 0) {
      return <Introduction />
    } else if (this.state.currentQuestion < QuestionData["count"] + 1) {
      return <Question addPts={this.addPointsToHouse}
        question={QuestionData[qnum]["question"]}
        sly={QuestionData[qnum]["sly"]}
        rav={QuestionData[qnum]["rav"]}
        huf={QuestionData[qnum]["huf"]}
        gry={QuestionData[qnum]["gry"]}
        order={QuestionData[qnum]["order"]} />
    } else {
        return <RevealHouse sly={this.state.slytherin} rav={this.state.ravenclaw}
          huf={this.state.hufflepull} gry={this.state.gryffindor} />
    }
  }

  addPointsToHouse(houseNum, pointsToAdd) {
    switch (houseNum) {
      case 0: case '0':
        this.setState({ gryffindor: this.state.gryffindor + pointsToAdd })
        break;
      case 1: case '1':
        this.setState({ ravenclaw: this.state.ravenclaw + pointsToAdd })
        break;
      case 2: case '2':
        this.setState({ slytherin: this.state.slytherin + pointsToAdd })
        break;
      default:
        this.setState({ hufflepull: this.state.hufflepull + pointsToAdd })
    }
    // possible that we automatically advance the question
    // then we don't need the button and don't have to check whether
    // or not the user made a choice (a choice --> advance [no redos])
  }
  render() {
    let nextButton;
    if (this.state.nextDisabled)
      nextButton = <Button disabled>Next</Button>
    else
      nextButton = <Button onClick={this.handleNext}>Next</Button>
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
