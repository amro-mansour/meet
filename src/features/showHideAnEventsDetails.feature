Feature: SHOW/HIDE AN EVENT'S DETAILS

  Scenario: An event element is collapsed by default
    Given User is on the the homepage
    When User hasn’t clicked on any specific event
    Then The event details will be collapsed/ hidden

  Scenario: User can expand an event to see its details
    Given User is on the homepage
    When User clicks on a specific event show details button
    Then Details about that specific event will be shown

  Scenario: User can collapse an event to hide its details
    Given The User is viewing an expanded event on the homepage
    When User clicks on the hide details button of that event
    Then The event’s details collapse