describe('Login', () => {
    it('shows the login page', () => {
        cy.visit('/login');
    })
    

    it('displays an error for invalid login credentials', () => {
        cy.visit('/login');

        cy.get('#email').type('foo@example.com');
        cy.get('#password').type('password');
        cy.get("button").contains('Login').click();
        cy.contains('These credentials do not match our records.');
    })
});