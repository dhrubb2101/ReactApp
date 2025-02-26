import React, { Component } from 'react';
import staticdata from '../shared/constant/constantData';

class ToggleImgComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
    };
    this.toggleImage = this.toggleImage.bind(this);
  }

  toggleImage() {
    this.setState((prevState) => ({
      isToggled: !prevState.isToggled,
    }));
  }

  render() {
    const imageOne = {
      src: staticdata.samosa13,
      alt: 'Image One',
    };

    const imageTwo = {
      src: staticdata.samosa7,
      alt: 'Image Two',
    };

    const { isToggled } = this.state;
    const currentImage = isToggled ? imageTwo : imageOne;

    return (
      <div style={{ textAlign: 'center' }}>
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          style={{ marginBottom: '20px' }}
        />
        <br />
        <button
          onClick={this.toggleImage}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Toggle Image
        </button>
      </div>
    );
  }
}

export default ToggleImgComp;
