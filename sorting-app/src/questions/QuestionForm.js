import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react';

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAnswer: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.shuffle = this.shuffle.bind(this)
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  handleChange(e, { value }) {
    this.props.addPts(1, 4)
    this.setState({ selectedAnswer: value })
  }

  // fisher yates shuffle algorithm
  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  render() {
    const { question, sly, rav, huf, gry } = this.props;

    let choices = this.shuffle([['0', gry],['1', rav],['2', sly],['3', huf]])
    return (
      <div>
        <Header>
          Question: {question}
        </Header>

        <Form>
          <Form.Group>
            <Form.Radio
              toggle
              label={choices[0][1]}
              name='radioGroup'
              value={choices[0][0]}
              checked={this.state.selectedAnswer === choices[0][0]}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Radio
              toggle
              label={choices[1][1]}
              name='radioGroup'
              value={choices[1][0]}
              checked={this.state.selectedAnswer === choices[1][0]}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Radio
              toggle
              label={choices[2][1]}
              name='radioGroup'
              value={choices[2][0]}
              checked={this.state.selectedAnswer === choices[2][0]}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Radio
              toggle
              label={choices[3][1]}
              name='radioGroup'
              value={choices[3][0]}
              checked={this.state.selectedAnswer === choices[3][0]}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default QuestionForm;
