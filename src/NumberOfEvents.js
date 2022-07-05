import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: '',
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });

    if (value > 0 && value < 33) {
      this.setState({
        numberOfEvents: value,
        errorText: ''
      });
      this.props.updateNumberOfEvents(value);
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: 'Error, select a number between 1 and 32'
      });
    }
  }

  render() {
    return (
      <div className="number-of-events">
        <h2>Upcoming Events:</h2>
        <input
          type="text"
          className="events-number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        ></input>
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;