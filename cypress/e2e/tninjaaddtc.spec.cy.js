describe('example to-do app', () => {

    before('', () => {
        cy.visit('https://tutorialsninja.com/demo/')
    })

    it('Verify the user is able to add an items to the cart', () => {
        cy.contains('MacBook').click()
        cy.get('#button-cart').click()
        cy.get('.alert').should('exist').contains("Success: You have added MacBook to your shopping cart!")
    }) 
}) 







