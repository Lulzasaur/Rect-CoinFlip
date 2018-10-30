import React, { Component } from 'react';

class Coin extends Component {

  render() {
   
    return (
      <div >
        <img src={this.props.coin} alt='coin'/>
      </div>
    )
  }
}

export default Coin;