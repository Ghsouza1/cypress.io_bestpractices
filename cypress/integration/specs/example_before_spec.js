import '../../../cypress.json'
import '../../support/commands'

describe('Best Practices Demonstration', () => {
  it('load the website', () => {

    /*
      Not recommended practice:  Passing the URL to commands
    */
    cy.visit('http://automationpractice.com/index.php')

  })

  it('assertions on sign in button', () => {

    cy.get('.login')

      /*
        Not recommended practice:  One assertion
      */
      .should('be.visible')

  })

  it('click on sign in button', () => {

    cy.get('.login')
      .click()

    /*
      Not recommended practice: Code duplication for the same validation
    */
    cy.contains('Email address')
      .should('be.visible')

    cy.contains('Password')
      .should('be.visible')

  })

  it('warning message', () => {

    cy.get('#SubmitLogin > span')
      .click()

    /*
      Not recommended practice: UUse the explicit text to validation
    */
    cy.get('#center_column > :nth-child(2)')
      .should('contain', 'An email address required.')

  })

  it('sign in', () => {

    /*
        Not recommended practice: Actions/functions in the same file
    */
    cy.get('#email')
      .type('demostration_test@test.com')

    cy.get('#passwd')
      .type('user_testpsw')

    cy.get('#SubmitLogin > span')
      .click()
  })
})