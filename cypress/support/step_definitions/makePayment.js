//// <reference types="cypress" />
import { page } from "../page_objects/pages";
import {
  And,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
const makePayment = new page();

Given("I am on the payment link", () => {
    cy.visit('https://pay.seerbitapi.com/77458853')
    cy.wait(10000)
  })
  When("I fill the required details", () => {
    makePayment.firstName().type('Freddy')
    makePayment.lastName().type('Lasso')
    makePayment.emailField().type('freddylasso234@yopmail.com')
    makePayment.phoneNumber().type('09876543211')
  });
  And("I click continue", () => {
    makePayment.continueToPayment().click()
  });
  And("I pay with card", () => {
    makePayment.displayTestCards().click()
    makePayment.selectCard().first().click()
    makePayment.paybutton().click()
  });
  And("I submit payment", () => {
    makePayment.authorizePayment().click()
    makePayment.submitPayment().click()
  });
  Then("I should get a success message", () => {
    makePayment.successMessage1().contains("Your transaction was successful")
  });