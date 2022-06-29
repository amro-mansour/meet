import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('User is on the the homepage', () => {
      AppWrapper = mount(<App />);
    });

    when('User hasn’t clicked on any specific event', () => {
      AppWrapper.update();
    });

    then('The event details will be collapsed/ hidden', () => {
      expect(AppWrapper.find('.additional-details')).toHaveLength(0);
    });
  });


  test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppWrapper;
    given('User is on the homepage', () => {
      AppWrapper = mount(<App />);
    });

    when('User clicks on a specific event show details button', () => {
      AppWrapper.update();
      AppWrapper.find('.details-button').at(0).simulate('click');
    });

    then('Details about that specific event will be shown', () => {
      expect(AppWrapper.find('.additional-details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let AppWrapper;
    given('The User is viewing an expanded event on the homepage', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.details-button').at(0).simulate('click');
      expect(AppWrapper.find(".additional-details")).toHaveLength(1);
    });

    when('User clicks on the hide details button of that event', () => {
      AppWrapper.find('.details-button').at(0).simulate('click');
    });

    then('The event’s details collapse', () => {
      expect(AppWrapper.find('.additional-details')).toHaveLength(0);
    });
  });

});