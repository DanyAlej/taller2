context('Login Tests', () => {

    it('makes a wrong login attemp', () => {
        cy.visit('https://habitica.com/static/home')
        cy.get('.login-button').click();

        cy.get('#usernameInput').type('fake@email.com').should('have.value', 'fake@email.com');
        cy.get('#passwordInput').type('fake@email.com');

        cy.get('.btn-info[type="submit"]').click()

        cy.contains("our email address").should('be.visible')
      })
});
