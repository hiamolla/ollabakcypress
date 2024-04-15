describe('example to-do app', () => {

    before('', () => {
        cy.visit('https://tutorialsninja.com/demo/')
    })

    it('Verify the user is able to reset password', () => {
        cy.contains('My Account').click()
        cy.contains('Login').click()
        cy.get('#input-email').should('be.visible').type('codelanguage@gmail.com')
        cy.get('#input-password').should('be.visible').type('@olabak')
        cy.contains('Forgotten Password').click()
        cy.get('#input-email').should('be.visible').type('codelanguage101@gmail.com')
        cy.get('[value="Continue"]').click()
        cy.get('.alert').should('have.text', "An email with a confirmation link has been sent your email address.")
    }) 
}) 


