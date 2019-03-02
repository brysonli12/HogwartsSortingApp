import React, { Component } from 'react';
import { Form, Radio } from 'semantic-ui-react';

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAnswer:0
    }

    this.handleChange = this.handleChange.bind(this)
  }
componentDidUpdate()
{
  console.log(this.state);
}
  handleChange(e) {
    this.props.addPts(1, 4)
    this.setState({selectedAnswer: e.target.value })
  }

  render() {
    const { question } = this.props;

    return(
      <div>Question:
        {question}

      <Form>
        <Form.Field>
          <Radio
            label='Yes'
            name='radioGroup'
            value='1'
            checked={this.state.selectedAnswer === '1'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='No'
            name='radioGroup'
            value='2'
            checked={this.state.selectedAnswer === '2'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
      </div>
    )
  }
}

export default QuestionForm;
