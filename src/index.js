import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // constructor function is the very first function that is going to be called any time an instance of this class is created
  // when we define the constructor method it's going to be automatically called with the prop's object
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      err =>
        this.setState({
          errorMessage: err.message
        })
    );
  }

  // React says we have to deine render method inside class component which return some jsx
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Lattitude: {this.state.lat} </div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

// getCurrentPosition will take some amount of time while when we calling lattitude it will not there
// state must be initilized when a component is created
