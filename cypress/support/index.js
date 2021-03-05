import './commands'
import '@shelex/cypress-allure-plugin';
import 'cypress-mochawesome-reporter/register';


require('@shelex/cypress-allure-plugin');
require('cypress-dark')

export const credentials = {
    email: "demostration_test@test.com",
    password: "user_testpsw",
}

Cypress.Screenshot.defaults({
    screenshotOnRunFailure: false
  })
  


