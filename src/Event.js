import React, { Component } from "react";
import './Event.css';

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="event">
        <h2 className="title">{event.summary}</h2>
        <p className="start-date">{new Date(event.start.dateTime).toString()} ({event.start.timeZone})</p>
        <p className="location">{event.location}</p>

        <button
          className={`details-button ${collapsed ? "show" : "hide"}-details`}
          onClick={this.handleClick}
        >
          {collapsed ? "Show Details" : "Hide Details"}
        </button>

        {!collapsed && (
          <div className="additional-details">
            <h3>Additional info about the event</h3>
            <p className=".event-description">{event.description}</p>
          </div>
        )}
      </div>
    );
  }
}
export default Event;