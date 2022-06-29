import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('User is on the homepage', () => {
      AppWrapper = mount(<App />);
    });

    when('User hasn\'t specified the number of events', () => {
      AppWrapper.update();
    });

    then('The default number of events displayed will be 32 (2 with the local test)', () => {
      expect(AppWrapper.find('.event')).toHaveLength(2);
    });
  });


  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('User is on the homepage', async () => {
      AppWrapper = await mount(<App />);
    });

    when('User sets the number of events he/ she wants to be displayed', () => {
      AppWrapper.update();
      AppWrapper.find(".events-number").simulate("change", { target: { value: 2 } });
    });

    then('The number of events specified by the user will be displayed', () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(2);
    });
  });
});