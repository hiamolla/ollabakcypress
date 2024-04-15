describe('example to-do app', () => {

    beforeEach('', () => {
        cy.visit('https://tutorialsninja.com/demo/')
    })

    it('Verify the user is able to login with valid credentials', () => {
        cy.contains('My Account').click()
        cy.contains('Login').click()
        cy.get('#input-email').should('be.visible').type('codelanguage101@gmail.com')
        cy.get('#input-password').should('be.visible').type('@olabak0805')
        cy.get('[value="Login"]').click()
    })

    it('Verify the user is unable to login with invalid credentials', () => {
        cy.contains('My Account').click()
        cy.contains('Login').click()
        cy.get('#input-email').should('be.visible').type('codelanguage101@gmail.com')
        cy.get('#input-password').should('be.visible').type('@olabak')
        cy.get('[value="Login"]').click()
        cy.get('.alert').should('have.text', "Warning: No match for E-Mail Address and/or Password.")
    })

    it('Verify the user is unable to login with empty fields', () => {
        cy.contains('My Account').click()
        cy.contains('Login').click()
        cy.get('[value="Login"]').click()
        cy.get('.alert').should('have.text', "Warning: No match for E-Mail Address and/or Password.")
    })
})

