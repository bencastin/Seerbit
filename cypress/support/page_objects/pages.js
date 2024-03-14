export class page {
 
  emailField() {
    return cy.get(`input[id="email"]`);
  }
  proceedBtn() {
    return cy.contains(`PROCEED`);
  }
  saveBtn() {
    return cy.contains(`SAVE`);
  }
  passwordField() {
    return cy.get(`input[id="password"]`);
  }
  loginButton() {
    return cy.contains("Login");
  }
  paymentTab(){
    return cy.get('a[id="payments"]')
  }
  paymentLinkbutton(){
    return cy.get('a[id="payment_link"]')
  }
  createPaymentLink(){
    return cy.contains('Create Payment Link')
  }
  pageName(){
    return cy.get("input[name='paymentLinkName']")
  }
  description(){
    return cy.get("textarea[name='description']")
  }
  fixedAmount(){
    return cy.get("input[type='checkbox']").eq(0)
  }
  amount(){
    return cy.get("input[name='amount']")
  }
  expirationPeriod(){
    return cy.get("input[type='checkbox']")
  }
  selectCurrency(){
    return cy.get("select[name='currency']")
  }
  expirationInput(){
    return cy.get("input[placeholder='Select Expiration Period']")
  }
  collectPhoneNumber(){
    return cy.get("input[type='checkbox']").eq(2)
  }
  singleUse(){
    return cy.get("input[name='optradio']")
  }
  multipleUse(){
    return cy.get("input[name='optradio']")
  }
  oneTime(){
    return cy.get("input[name='frequency']")
  }
  recurring(){
    return cy.get("input[name='frequency']")
  }
  submitButton(){
    return cy.get("button[type='submit']")
  }
  successMessage(){
    return cy.get("div[role='status']")
  }
  firstName(){
    return cy.get('input[id="firstName"]')
  }
  lastName(){
    return cy.get('input[id="lastName"]')
  }
  phoneNumber(){
    return cy.get('input[id="phoneNumber"]')
  }
  continueToPayment(){
    return cy.contains('Continue to  Payment')
  }
  displayTestCards(){
    return cy.contains('Display test cards')
  }
  selectCard(){
    return cy.get('div[class="test-card text-black"]')
  }
  paybutton(){
    return cy.get('button[id="trigger"]')
  }
  authorizePayment(){
    return cy.contains('Authorize Payment')
  }
  submitPayment(){
    return cy.contains('submit')
  }
  successMessage1(){
    return cy.get('div[id="payment-success"]')
  }
}
