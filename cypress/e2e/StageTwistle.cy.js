/// <reference types="cypress" />

describe('Twistle', () => 
{
    beforeEach ('Open Login page', () => 
    {
      cy.visit("https://stage.twistle.com/")

    })

    it('Twistle Login', () => {
        cy.get('#username').type('ronojoy.pyne@twistle.com')
        cy.get('.tws-btn--primary').click()
        cy.get('#password').type('Future@hope1')
        cy.get('.tws-btn--primary').click()
        cy.visit("https://stage.twistle.com/desktop/#home")
        cy.get('#sidebar-navigation > [data-section="attachments"]').click()
        cy.get('.create_wrap > .tws-btn--primary-lg').click()
        cy.get('.add_folder').click()
        cy.get('#title').type('Automated Folder')
        cy.get('.tws-form-button-bar > .tws-btn--primary').click()
    });

})