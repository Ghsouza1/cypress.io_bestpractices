import '../../../cypress.json'
import '../../support/commands'

import {
  signIn
} from '../pages/example_page'

import {
  helper
} from '../../helpers/index'

import {
  text_labelEmail,
  text_labelPsw,
  text_warning
} from '../../support/constants/text'

describe('Best Practices Demonstration', () => {
  it('load the website', () => {

    /*
      Best practice:  Passing the URL by cypress.json
    */
    cy.visit('/')

  })

  it('assertions on sign in button', () => {

    cy.get('.login')

      /*
        Best Practice: Multiple assertions
      */
      .should('be.visible') // >> Visibility Assertion
      .and('not.to.be.hidden') // >> Visibility Assertion
      .and('exist') // >> Existence Assertion
      .and('contain', 'Sign in') // >> Text Content Assertion
      .and('have.text', '\n\t\t\tSign in\n\t\t') // >> Text Content Assertion

  })

  it('click on sign in button', () => {

    cy.get('.login')
      .click()

    /*
      Best Practice: Write once then call multiple times
    */
    helper.checkTextExist(text_labelEmail);
    helper.checkTextExist(text_labelPsw);
  })

  it('warning message', () => {

    cy.get('.login')
      .click()

    cy.get('#SubmitLogin > span')
      .click()

    /*
      Best practice: store all strings/text from the page and call them in scripts
    */
    cy.get('#center_column > :nth-child(2)')
      .should('contain', text_warning)

    cy.reload()
  })

  it('sign in', () => {

    /*
        Best practice: Storing objects and functions 
        in the same file for the same feature/behavior
    */
    signIn();
  })
})