describe('example to-do app', () => {

    beforeEach('', () => {
        cy.visit('https://tutorialsninja.com/demo/')
    })

    it('Verify the user is able to search for an item available on the website', () => {
        cy.get("[placeholder='Search']").should('exist').should('be.visible').type("MacBook");
        cy.get('.input-group-btn > .btn > .fa').click()
    })

    it('Verify the user is unable to search for an item not available on the website', () => {
        cy.get("[placeholder='Search']").should('exist').should('be.visible').type("Shoes");
        cy.get('.input-group-btn > .btn > .fa').click()
        cy.get('#content > h2').should('have.text', "Products meeting the search criteria")
        cy.get('#content > :nth-child(7)').should('have.text', "There is no product that matches the search criteria.")
    })
})













