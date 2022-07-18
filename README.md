## meet

Meet is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) tecnique. The application uses the Google calender API to fetch upcoming events.

## Features

- Filter events by city.
- Show/hide event details.
- Specify number of events.
- Use the app offline.
- Add app shortcut to the home screen.
- View charts displaying number of events by city.

## User stories 

### Feature 1: Filter events by city

  #### *As a user I should be able to “filter events by city” so that I can view upcoming events in any specific city.*

  **Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.**
    Given user hasn’t searched for any city
    When the user opens the app
    Then the user should see the list of upcoming events.

  **Scenario 2: User should see a list of suggestions when they search for a city.**
    Given the main page is open
    When the user starts typing in the city textbox
    Then the user should receive a list of cities (suggestions) that match what they’ve typed

  **Scenario 3: User can select a city from the suggested list.**
    Given user was typing “Berlin” in the city textbox
    And the list of suggested cities is showing
    When the user selects a city (e.g., “Berlin, Germany”) from the list
    Then their city should be changed to that city (i.e., “Berlin, Germany”)
    And the user should receive a list of upcoming events in that city

    
### Feature 2: SHOW/HIDE AN EVENT'S DETAILS

  #### *As a user I should be able to “show or hide details about a specific event”, so that I can see more/ less information about that event.*

  **Scenario 1: An event element is collapsed by default.**
    Given User is on the the homepage
    When User hasn’t clicked on any specific event
    Then The event details will be collapsed/ hidden

  **Scenario 2: User can expand an event to see its details.**
    Given User is on the homepage
    When User clicks on a specific event show details button
    Then Details about that specific event will be shown

  **Scenario 3: User can collapse an event to hide its details.**
    Given The User is viewing an expanded event on the homepage
    When User clicks on the hide details button of that event
    Then The event’s details collapse


### Feature 3: SPECIFY NUMBER OF EVENTS

  #### *As a user I should be able to “specify the number of events my research produces”, so that I can get as many events as I previously specified.*

  **Scenario 1: When user hasn’t specified a number, 32 is the default number.**
    Given User is on the homepage
    When User hasn't specified the number of events
    Then The default number of events displayed will be 32 (2 with the local test)

  **Scenario 2: User can change the number of events they want to see.**
    Given User is on the homepage
    When User sets the number of events he/ she wants to be displayed
    Then The number of events specified by the user will be displayed    


### Feature 4: USE THE APP WHEN OFFLINE

  #### *As a user I should be able to “navigate the application even when offline”, so that I can view the same results I researched when I had a connection.*

  **Scenario 1: Show cached data when there’s no internet connection.**
    Given: User has a made a search when he/she had an internet connection
    When: User uses the ap when he/ she doesn’t have network connection
    Then: User will get the results of his/ her previous searches when they were connected

  **Scenario 2: Show error when user changes the settings (city, time range).**
    Given: User doesn’t have a network connection when using the app
    When: User tries to make a new search with new filters he/ she never used 
    Then: User will get an error and the app won’t return any results 


### Feature 5: DATA VISUALIZATION

  #### *As a user I should be able to “see a chart of the upcoming events around the world by city”, so that I have a better overview of the events taking place in each city.*

  **Scenario 1: Show a chart with the number of upcoming events in each city.**
      Given: User wants to see all the upcoming events in every city
      When: User displays the chart for upcoming events 
      Then: A chart of upcoming events for each city will be displayed 

## Built with 
- HTML 
- CSS
- Javascript
- React 
- AWS Lambda
- Google Calendar API and OAuth2
- Jest, Cucumber and Puppeteer for Testing

## Get Started
- Clone the project
- Open your terminal and cd to the project directory
- npm run start

## Check out the live version of the App:

https://amro-mansour.github.io/meet/ 
