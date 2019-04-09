import React, { Component } from 'react';

class QuestionChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  componentDidUpdate() {
    // console.log(this.state);
  }

  handleClick(){
    this.props.handleClick(this.props.value);
  }


  render() {
    return (
      <div className="qchoice" onClick={this.handleClick.bind(this)}>
          <div className={this.props.selected ? "qchoice selected" : "qchoice"} data-value={this.props.value}>{this.props.label}</div>
      </div>
    )
  }
}

export default QuestionChoice;
