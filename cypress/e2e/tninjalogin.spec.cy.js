describe('example to-do app', () => {

    beforeEach('', () => {
        cy.visit('https://tutorialsninja.com/demo/')
    })

    it('Verify the user is able to login with valid credentials', () => {
        cy.log("Testing beforeEach Hook 1")
        cy.contains('My Account').click()
        cy.contains('Login').click()
        cy.get('#input-email').type('codelanguage101@gmail.com')
        cy.get('#input-password').type('@olabak0805')
        cy.get('[value="Login"]').click()
    })

    it('Verify the user is unable to login with invalid credentials', () => {
        cy.log("Testing beforeEach Hook 2")
        cy.contains('My Account').click()
        cy.contains('Login').click()
        cy.get('#input-email').type('codelanguage101@gmail.com')
        cy.get('#input-password').type('@olabak')
        cy.get('[value="Login"]').click()
        cy.get('content > h1').should('have.text', "Warning: No match for E-Mail Address and/or Password.")
    })

    it('Verify the user is unable to login with empty fields', () => {
        cy.log("Testing beforeEach Hook 3")
        cy.contains('My Account').click()
        cy.contains('Login').click()
        cy.get('[value="Login"]').click()
        cy.get('content > h1').should('have.text', "Warning: No match for E-Mail Address and/or Password.")
    })

    it('Verify the user is able to reset password', () => {
        cy.log("Testing beforeEach Hook 4")
        cy.contains('My Account').click()
        cy.contains('Login').click()
        cy.get('#input-email').type('codelanguage101@gmail.com')
        cy.get('#input-password').type('@olabak')
        cy.contains('Forgotten Password').click()
        cy.get('#input-email').type('codelanguage101@gmail.com')
        cy.get('[value="Continue"]').click()
    })
})