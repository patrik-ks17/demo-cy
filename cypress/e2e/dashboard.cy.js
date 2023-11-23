describe('Dashboard', () => {
    
    it('should not allow guests to view the dashboard', () => {
        cy.visit('/home')
            .url().should('include', '/login')
    })

    it('logs in a user', () => {
        // given I have a existing user
        // and they visit the login page
        // and type in their credentials
        // they should then be redirected to the dashboard
    })
})