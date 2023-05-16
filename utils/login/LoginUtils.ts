
export abstract class LoginUtils {
    public static logIn() {

        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('#Email').clear().type('admin@yourstore.com')
        cy.get('#Password').clear().type('admin')
        cy.get('.button-1').click()


    }
}