@large @portrait @search
Feature: I can visit google
  As a user of google
  I should be able to open the search page

Scenario: I should be able to open a google search page
  Given I navigate to url "https://google.com"
  Then I should see the google logo

Scenario: I should be able to search for cucumberjs
  Given I navigate to url "https://google.com"
  When I enter "cucumber.io" in the search field
  And I click on the "Google Search" submit button
  Then I should see the page title is "cucumber.io - Google Search"

Scenario: I should be able to open a google search page and view doodles
  Given I navigate to url "https://google.com"
  When I focus on the search field
  And I click on the "I'm Feeling Lucky" submit button
  Then I should see the page title is "Google Doodles"
  And I should see the url is "https://www.google.com/doodles/"
