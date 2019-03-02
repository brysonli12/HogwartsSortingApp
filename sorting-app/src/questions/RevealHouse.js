import React, { Component } from 'react';
import { Form, Radio } from 'semantic-ui-react';

class RevealHouse extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }
  componentDidUpdate()
  {
    console.log('revealhouse' + this.state);
  }
  handleChange(e) {
  }

  render() {
    const { sly, rav, huf, gry } = this.props;

    return(
      <div>Final Scores reveal that you are in the house...:
        {sly}|{rav}|{huf}|{gry}
      </div>
    )
  }
}

export default RevealHouse;
