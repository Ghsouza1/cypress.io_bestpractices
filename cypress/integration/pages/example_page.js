import { credentials } from '../../support/index'

const input_email = "#email";
const input_password = "#passwd";
const button_signIn = "#SubmitLogin > span";

export const signIn = () => {
    cy.get(input_email).type(credentials.email);
    cy.get(input_password).type(credentials.password);
    cy.get(button_signIn).click();
}