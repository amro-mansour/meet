import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<EventList /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test("render event", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("render the event title", () => {
    expect(EventWrapper.find(".title")).toHaveLength(1);
  });

  test("render the event location", () => {
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });

  test("render the event start date", () => {
    expect(EventWrapper.find(".start-date")).toHaveLength(1);
  });

  test("render the button to show additional details", () => {
    expect(EventWrapper.find(".show-details")).toHaveLength(1);
  });

  test("show additional details when the button is clicked", () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find(".show-details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });

  test("hide additional details when the button is clicked", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find(".hide-details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });

  test("once the additional details button is clicked, the state will change from true to false", () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find(".details-button").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });

  test("when the details button is clicked, the state will change from false to true", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find(".details-button").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });

  test("render an additional info element to be shown once the button is clicked", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    expect(EventWrapper.find(".additional-details")).toHaveLength(1);
  });

});