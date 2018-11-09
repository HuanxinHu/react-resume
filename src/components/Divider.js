import React, { Component } from 'react';

const dividerStyle = {
  borderTop: '1px solid #999999a8',
  margin: '16px auto',
  width: 190
}

export default class Divider extends Component {

  render() {
    return (
      <div style={dividerStyle}></div>
    );
  }
}

