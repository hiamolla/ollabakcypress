describe('example to-do app', () => {

    beforeEach('', () => {
        cy.visit('https://tutorialsninja.com/demo/')
    })

    it('Verify the user is able to login', () => {
      cy.log("Testing beforeEach Hook 1")
      cy.contains('My Account').click()
      cy.contains('Login').click()  
      cy.get('#input-email').type('codelanguage101@gmail.com') 
      cy.get('#input-password').type('@olabak0805') 
      cy.get('[value="Login"]').click()
    })

    it('Verify the user is able to reset password', () => {
    cy.log("Testing beforeEach Hook 2")
    cy.contains('My Account').click()
    cy.contains('Login').click()  
    cy.get('#input-email').type('codelanguage101@gmail.com') 
    cy.get('#input-password').type('@olabak')   
    cy.contains('Forgotten Password').click()
    cy.get('#input-email').type('codelanguage101@gmail.com')
    cy.get('[value="Continue"]').click()
    })
})