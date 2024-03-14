//// <reference types="cypress" />
import { page } from "../page_objects/pages";
import {
  And,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
const payments = new page();
// create payment link
Given("I am on the user homepage", () => {
  cy.visit("https://www.dashboard.seerbit.com/#");
  cy.wait(5000)
  cy.contains("Accept").then($button => {
    if ($button.is(':visible')){
      cy.contains("Accept").click()
      cy.get('[aria-label="Close"]').click()
    }
  })
  payments.paymentTab().click({force: true})
  payments.paymentLinkbutton().click({force: true})
});
When("I click create payment link", () => {
  payments.createPaymentLink().click()
});
And("I enter page name", () => {
  const random = (min = 0, max = 100) => {
    let num = Math.random() * (max - min) + min;
    return Math.floor(num);
  }
  console.log(random(1, 100));
  const randomNunber = random(1, 100);

  payments.pageName().type('Payment' + randomNunber);
});
And("I click collect fix amount", () => {
  payments.fixedAmount().click({force: true})
});
And("I enter amount", () => {
  payments.amount().type('110')
});
And("I select currency", () => {
  payments.selectCurrency().select([1])
});
And("I check expiration period and select date", () => {
  payments.expirationPeriod().eq(1).click()
  var current = new Date();
var currentDate = (current.getMonth() + 1) + '/' + current.getDate() + '/' + current.getFullYear();
var currentTime = current.getHours() + ':' + current.getMinutes() + ' ' + 'AM';
var dateTime = currentDate + ' ' + currentTime;
console.log(dateTime);
payments.expirationInput().type(dateTime)
});
And("I select single use", () => {
  payments.singleUse().first().click({force: true})
});
And("I select multiple use", () => {
  payments.multipleUse().eq(1).click({force: true})
});
And("I select one time", () => {
  payments.oneTime().first().click()
});
And("I select recurring", () => {
  payments.recurring().eq(1).click()
});
And("I click create payment link to submit", () => {
  payments.submitButton().click()
});
Then("I should get a success message", () => {
  payments.successMessage().contains("Payment link created")
});
