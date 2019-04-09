import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import QuestionChoice from './QuestionChoice'
/*
Form
<QuestionChoice choice={ {choice_text: "A choice test", selected: false }}/>
*/

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAnswer: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  handleChange(value) { //e, { value }) {
    //console.log(e);
    if (this.state.selectedAnswer === value)
      this.setState({ selectedAnswer: null })
    else
      this.setState({ selectedAnswer: value })
  }
  handleNextQuestion() {
    this.props.addPts(this.state.selectedAnswer, 4);
    this.setState( {selectedAnswer: null} );
    this.props.handleNext();
  }
  handleChoice(e) {
    console.log('handling choice');
    console.log(e);
  }
  render() {
    let question, sly, rav, huf, gry, order;
    ( { question, sly, rav, huf, gry, order }  = this.props.question );
    const questions = [['0', gry],['1', rav],['2', sly],['3', huf]]
    return (
      <div>
        <Header style={{position: 'fixed', top: '25%',left: '5%', width: '30%', fontSize: '50'}}>
          Question: {question}
        </Header>
        <div style={{position: 'fixed', top: '0px',right: '0px', width: '30%', fontSize: '50'}}>
          <QuestionChoice
            label={questions[order[0]][1]}
            name='radioGroup'
            value={questions[order[0]][0]}
            selected={this.state.selectedAnswer === questions[order[0]][0]}
            handleClick={this.handleChange}
          />
        <QuestionChoice
            label={questions[order[1]][1]}
            name='radioGroup'
            value={questions[order[1]][0]}
            selected={this.state.selectedAnswer === questions[order[1]][0]}
            handleClick={this.handleChange}
          />
          <QuestionChoice
              label={questions[order[2]][1]}
              name='radioGroup'
              value={questions[order[2]][0]}
              selected={this.state.selectedAnswer === questions[order[2]][0]}
              handleClick={this.handleChange}
          />
          <QuestionChoice
              label={questions[order[3]][1]}
              name='radioGroup'
              value={questions[order[3]][0]}
              selected={this.state.selectedAnswer === questions[order[3]][0]}
              handleClick={this.handleChange}
          />
        </div>
        <Button onClick={this.handleNextQuestion}>
          Next
        </Button>
      </div>
    )
  }
}

export default QuestionForm;
