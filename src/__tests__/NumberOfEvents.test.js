import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.events-number')).toHaveLength(1);
  });

  test('display number 32 by default', () => {
    expect(
      NumberOfEventsWrapper.find('.events-number').get(0).props.value
    ).toEqual(32);
  });

  test('user can change the number of events', () => {
    NumberOfEventsWrapper.find('.events-number').simulate('change', {
      target: { value: 10 },
    });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(10);
  });
})