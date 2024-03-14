@paymentLinkCreation
Feature: Payment link

    This feature seeks to verify the processes of creating a payment link

    Background: Navigate to create payment link
        Given I am on the user homepage
        When I click create payment link

    Scenario: To validate user is able to create single use link
        And I enter page name
        And I click collect fix amount
        And I enter amount
        And I select currency
        And I select single use
        And I select one time
        And I click create payment link to submit
        Then I should get a success message

    Scenario: To validate user is able to create recurring link
        And I enter page name
        And I select currency
        And I select multiple use
        And I select recurring
        And I click create payment link to submit
        Then I should get a success message
    
    Scenario: To verify user can create a payment link with expiration date
        And I enter page name
        And I select currency
        And I check expiration period and select date
        And I select multiple use
        And I select recurring
        And I click create payment link to submit
        Then I should get a success message
    


