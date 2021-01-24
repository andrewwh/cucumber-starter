@medium @portrait @authentication
Feature: I can visit google and sign-in
  As a user of google
  I should be able to open the search page
  and sign-in

Scenario: I should be able to open a google search page
  Given I navigate to url "https://google.com"
  Then I should see the "Sign in" link

@test
Scenario: I should be able to open a google search page and click the "Sign in" button
  Given I navigate to url "https://google.com"
  Then I should see the "Sign in" link
  When I click on the "Sign in" link
  Then I should see the sign-in page
