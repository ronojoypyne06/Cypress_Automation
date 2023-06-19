describe('Twistle', () => 
{
    beforeEach ('Open Login page', () => 
    {
      cy.visit("https://stage.twistle.com/")

    })

    it('This is a test case 1', () => {
        cy.get('#username').type('ronojoy.pyne@twistle.com')
        cy.get('.tws-btn--primary').click()
        cy.get('#password').type('Future@hope1')
        cy.get('.tws-btn--primary').click()
        cy.visit("https://stage.twistle.com/desktop/#home")
    });

    it.skip('Open Home page', () => 
    {
      cy.visit("https://stage.twistle.com/desktop/#home")
    })

})