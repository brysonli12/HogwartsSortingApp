import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './questions/Introduction'
import Question from './questions/QuestionForm'
import { Button, Icon } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gryffindor: 0,
    	ravenclaw: 0,
    	slytherin: 0,
    	hufflepull: 0,
    	currentQuestion: 1,
    }
    this.handleNext = this.handleNext.bind(this)
  }
  componentDidUpdate()
  {
    //console.log(this.state);
  }
  handleNext(e) {
    //console.log(this.state.currentQuestion);
    this.setState({currentQuestion: (this.state.currentQuestion + 1) % 3 })
  }

  renderQuestion() {
    switch (this.state.currentQuestion) {
      case 0:
        return <Introduction/>
      case 1:
        return <Question question="Which cat is best?"/>
      default:
      return "test"

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.renderQuestion()}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button onClick={this.handleNext}>Next</Button>
        </header>
      </div>
    );
  }
}

export default App;
