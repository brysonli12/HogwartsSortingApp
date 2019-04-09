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

  // use a callback function here maybe to allow for QuestionForm to get updated
  // details on which question was pressed (to update)
  // It's probably a good idea for QuestionForm to have the state of the choices
  // which are passed to components (to simplify handleClick logic)
  // but each QuestionChoice will have a QuestionOrder# or House# or something else
  //      to identify the unique choice
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
