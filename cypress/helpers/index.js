export const helper = {

  checkTextExist(string) {
    cy.contains(string)
      .should('be.visible');
  },
}