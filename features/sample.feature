Feature: Sample Google Search

  As an end-user of Google
  I want to search for a keyword and see results
  So that I verify the search functionality

  Scenario: Search for a term on Google
    Given I open the Google homepage
    When I search for "NestJS testing"
    Then results should be shown for "NestJS testing"