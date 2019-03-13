import React, { Component } from 'react';
import _ from 'lodash';
// import { Button } from 'semantic-ui-react';

class RevealHouse extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
  }

  render() {
    const { houseScores } = this.props;
    const sortedHouse = _.maxBy(Object.keys(houseScores), house => houseScores[house]);
    return (
      <div>Final Scores reveal that you are in the house...:
        {sortedHouse}
      </div>
    )
  }
}

export default RevealHouse;
