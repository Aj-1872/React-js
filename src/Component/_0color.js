import React, { Component } from 'react';

class _0color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      backgroundColors: ['white', 'black', 'blue', 'green', 'red'],
      currentColorIndex: 0,
    };
  }

  handleClick() {
    const { clickCount, backgroundColors } = this.state;
    const nextColorIndex = (clickCount + 1) % backgroundColors.length;

    console.log(backgroundColors.length);
    console.log(clickCount + 1);
    console.log(nextColorIndex);

    this.setState(prevState => ({
      clickCount: prevState.clickCount + 1,
      currentColorIndex: nextColorIndex,
    }));
  }

  render() {
    const { backgroundColors, currentColorIndex } = this.state;
    const backgroundColor = backgroundColors[currentColorIndex];

    return (
      <div style={{ background: backgroundColor }}>
        <p>Background Color: {backgroundColor}</p>
        <button onClick={() => this.handleClick()}>Change Color</button>
      </div>
    );
  }
}

export default _0color;
