import React, { Component } from 'react';
import staticdata from '../shared/constant/constantData';

class Trial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // activeButton stores the index of the toggled image,
      // or null if the original image should be displayed.
      activeButton: null,
    };
    // Bind the toggleImage method if not using arrow function syntax.
    this.toggleImage = this.toggleImage.bind(this);
  }

  // This method toggles the active button.
  toggleImage(index) {
    this.setState((prevState) => ({
      // If the clicked button is already active, set to null (original image)
      // Otherwise, set the clicked button's index as active.
      activeButton: prevState.activeButton === index ? null : index,
    }));
  }

  render() {
    // Define the original image details.
    const originalImage = {
      src: staticdata.samosa12,
      alt: 'Shinchan',
    };

    // Define an array of alternative images with their alt texts.
    const alternativeImages = [
      { src: staticdata.samosa13, alt: 'Blake' },
      { src: staticdata.samosa7, alt: 'Disha' },
      { src: staticdata.samosa9, alt: 'Modi' },
      { src: staticdata.samosa10, alt: 'MsDhoni' },
      { src: staticdata.samosa11, alt: 'Samay' },
    ];

    // Determine which image to display based on the state.
    const { activeButton } = this.state;
    const currentImage =
      activeButton !== null ? alternativeImages[activeButton] : originalImage;

    return (
      <div style={{ textAlign: 'center' }}>
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          style={{ marginBottom: '20px' }}
        />
        <div>
          {alternativeImages.map((image, index) => (
            <button
              key={index}
              onClick={() => this.toggleImage(index)}
              style={{ margin: '5px', padding: '10px 20px', cursor: 'pointer' }}
            >
              Toggle {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Trial;