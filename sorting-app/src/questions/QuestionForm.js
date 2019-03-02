import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react';

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAnswer: 0
    }

    this.handleChange = this.handleChange.bind(this)
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  handleChange(e, { value }) {
    this.props.addPts(1, 4)
    this.setState({ selectedAnswer: value })
  }

  render() {
    const { question } = this.props;

    return (
      <div>
        <Header>
          Question: {question}
        </Header>

        <Form>
          <Form.Group>
            <Form.Radio
              toggle
              label='Yes'
              name='radioGroup'
              value='1'
              checked={this.state.selectedAnswer === '1'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Radio
              toggle
              label='No'
              name='radioGroup'
              value='2'
              checked={this.state.selectedAnswer === '2'}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default QuestionForm;
