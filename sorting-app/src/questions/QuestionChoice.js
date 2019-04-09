import React, { Component } from 'react';

class QuestionChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  componentDidUpdate() {
    // console.log(this.props.value);
    // console.log(this.props.selected);
  }

  handleClick(){
    this.props.handleClick(this.props.value);
  }


  render() {
    return (
          <div className={this.props.selected ? "qchoice qselected" : "qchoice"} onClick={this.handleClick.bind(this)} data-value={this.props.value}>{this.props.label}</div>
    )
  }
}

export default QuestionChoice;
