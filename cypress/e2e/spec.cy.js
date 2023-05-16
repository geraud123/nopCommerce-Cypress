import {LoginUtils} from "../../utils/login/LoginUtils";


describe('template spec', () => {
    beforeEach(() => {
        LoginUtils.logIn()
    })
    it('Add a new customer', () => {
        cy.get('ul[role=\'menu\'] > li:nth-of-type(4) > .nav-link').click()
            .should('contain.text', 'Customers').click()
        cy.get('.menu-is-opening > .nav > :nth-child(1) > .nav-link').click()
        cy.contains('Add new').click().then(() => {
            cy.get('#Email').type('tado@uni-hildesheim.com')
            cy.get('#Password').type('1234567890')
            cy.get('#FirstName').type('alex')
            cy.get('#LastName').type('tado')
            cy.get('#Gender_Male').click()
            cy.get('#DateOfBirth').type('7/10/2000')
            cy.get('#Company').type('Campus')
            cy.get('#IsTaxExempt').click()
            // cy.get('.input-group-append.input-group-required > .input-group > div > div[role=\'listbox\']').click()
            // cy.get('[data-offset-index="2"]').click()
            // cy.get('.input-group-append.input-group-required > .input-group > div > div[role=\'listbox\']').click()
            // cy.get('[data-offset-index="3"]').click()
            cy.get('#VendorId')  .select('Vendor 1')
            cy.get('#AdminComment').type('He is only a Guests.')
            cy.get('[name="save"]').click().then(()=>{
                cy.get('.alert')
                    .should('contain.text', 'The new customer has been added successfully.')
            })
        })
    })

    it('Search Customer with Email', () => {
        cy.get('ul[role=\'menu\'] > li:nth-of-type(4) > .nav-link').click()
            .should('contain.text', 'Customers').click()
        cy.get('.menu-is-opening > .nav > :nth-child(1) > .nav-link').click()
        cy.get('#SearchEmail').type('tado@uni-hildesheim.com')
        cy.get('#search-customers > .fas').click()
        cy.get('#customers-grid').find('tr').eq(1)
            .should('contain.text', 'tado@uni-hildesheim.com')
            .should('contain.text', 'alex tado')
            .should('contain.text', 'Registered')
            .should('contain.text', 'Campus')

    })
})