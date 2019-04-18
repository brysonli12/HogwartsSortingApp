import React, { Component } from 'react';

class QuestionChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    }
    this.findClassNames = this.findClassNames.bind(this);
  }

  componentDidUpdate() {
    // console.log(this.props.value);
    // console.log(this.props.selected);
  }

  handleClick(){
    this.props.handleClick(this.props.value);
  }
  findClassNames() {
    let res = "qchoice"
    if (this.props.selected)
      res += " qselected"
    return res
  }

  render() {
    return (
          <div className={this.findClassNames()}
               onClick={this.handleClick.bind(this)}
               data-value={this.props.value}>
          {this.props.label}</div>
    )
  }
}

export default QuestionChoice;
