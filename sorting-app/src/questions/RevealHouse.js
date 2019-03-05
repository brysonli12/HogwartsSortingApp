import React, { Component } from 'react';
import _ from 'lodash';
// import { Form, Radio } from 'semantic-ui-react';

class RevealHouse extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    console.log('revealhouse' + this.props.houseScores);
  }
  handleChange(e) {
  }

  render() {
    const { houseScores } = this.props;
    const maxKey = _.max(Object.keys(houseScores), house => houseScores[house]);
    console.log(houseScores)
    console.log(maxKey)
    return (
      <div>Final Scores reveal that you are in the house...:
        {maxKey}
      </div>
    )
  }
}

export default RevealHouse;
