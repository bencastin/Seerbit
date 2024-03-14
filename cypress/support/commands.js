// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import { page } from '../support/page_objects/pages';
import 'cypress-file-upload';
import 'cypress-real-events';
import 'cypress-localstorage-commands';
import 'cypress-iframe';
const email = Cypress.env('email');
const password = Cypress.env('password');
const signIn = new page();
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('userLogin', () => {
    cy.session([email,password], () => {
    cy.visit("/");
    signIn.loginButton().click();
    signIn.emailField().type(email);
    signIn.passwordField().type(password);
    signIn.submitButton().click();
    cy.wait(10000);
  },
  {
    cacheAcrossSpecs: true
  }
  )
  
});


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
