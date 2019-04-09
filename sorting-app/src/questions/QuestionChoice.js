import React, { Component } from 'react';
// import { Form, Header, Button } from 'semantic-ui-react';

class QuestionChoice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.choice.selected,
      text: this.props.choice.choice_text,
    }

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  /*handleChange(e, { value }) {
    this.setState({ selectedAnswer: value })
  }*/
  handleClick(){
    console.log('choice was clicked');
    this.setState({ selected: !this.state.selected});
  }

  renderChoice() {
    if (this.state.selected) {

    return <div className="qchoice qselected" onClick={this.handleClick}>
      {this.state.text}

      </div>
    }
    else {

        return <div className="qchoice" onClick={this.handleClick}>
          {this.state.text}

      </div>
    }
  }

  render() {
    return (
      <div>
        {this.renderChoice()}
      </div>
    )
  }
}

export default QuestionChoice;
