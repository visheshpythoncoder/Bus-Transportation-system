import React from 'react';


class FullScreenButton extends React.Component {
  toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  render() {
    return (
      <button onClick={this.toggleFullScreen}>
              
        <img src="src/images/full.webp" width="25" height="25" alt="Icon 01" />

      </button>
    );
  }
}

export default FullScreenButton;
