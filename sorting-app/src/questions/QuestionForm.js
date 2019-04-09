import React, { Component } from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
// import QuestionChoice from './questions/QuestionChoice'
/*

<QuestionChoice choice={ {choice_text: "A choice test", selected: false }}/>
*/

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAnswer: null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleNextQuestion = this.handleNextQuestion.bind(this)
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  handleChange(e, { value }) {

    this.setState({ selectedAnswer: value })
  }
  handleNextQuestion() {
    this.props.addPts(this.state.selectedAnswer, 4);
    this.setState( {selectedAnswer: null} );
    this.props.handleNext();
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

        <Form  style={{position: 'fixed', top: '25%',right: '5%', width: '30%', fontSize: '50'}}>
          <Form.Group>
            <Form.Radio
              toggle
              label={questions[order[0]][1]}
              name='radioGroup'
              value={questions[order[0]][0]}
              checked={this.state.selectedAnswer === questions[order[0]][0]}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Radio
              toggle
              label={questions[order[1]][1]}
              name='radioGroup'
              value={questions[order[1]][0]}
              checked={this.state.selectedAnswer === questions[order[1]][0]}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Radio
              toggle
              label={questions[order[2]][1]}
              name='radioGroup'
              value={questions[order[2]][0]}
              checked={this.state.selectedAnswer === questions[order[2]][0]}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Radio
              toggle
              label={questions[order[3]][1]}
              name='radioGroup'
              value={questions[order[3]][0]}
              checked={this.state.selectedAnswer === questions[order[3]][0]}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
        <Button onClick={this.handleNextQuestion}>
          Next
        </Button>
      </div>
    )
  }
}

export default QuestionForm;
