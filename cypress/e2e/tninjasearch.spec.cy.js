describe('example to-do app', () => {

    before('', () => {
        cy.visit('https://tutorialsninja.com/demo/')
    })

    it('Verify the user is able to reset password', () => {
        cy.get("[placeholder='Search']").type("MacBook");
        cy.get('.input-group-btn > .btn > .fa').click()
    })
})













