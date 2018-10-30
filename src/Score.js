import React, { Component } from 'react';

class Score extends Component {

  render() {
   
    return (
      <div >
        <p>Out of {this.props.numHeads + this.props.numTails} flips, there have been {this.props.numHeads} heads and {this.props.numTails} tails.</p>
      </div>
    )
  }
}

export default Score;