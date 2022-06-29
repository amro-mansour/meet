Feature: SPECIFY NUMBER OF EVENTS

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given User is on the homepage
    When User hasn't specified the number of events
    Then The default number of events displayed will be 32 (2 with the local test)

  Scenario: User can change the number of events they want to see
    Given User is on the homepage
    When User sets the number of events he/ she wants to be displayed
    Then The number of events specified by the user will be displayed