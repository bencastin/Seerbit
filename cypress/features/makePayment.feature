@makePayment
Feature: make Payment

    This feature seeks to verify the processes of making a payment

    Scenario: To validate user is able to make payment
        Given I am on the payment link
        When I fill the required details
        And I click continue
        And I pay with card
        And I submit payment
        Then I should get a success message