/// <reference types="cypress" />


it('learning assertions', function(){

    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()

    cy.get('#query-btn')
    .should('contain','Button')
    .should('have.class','query-btn')
    .should('be.visible')
    .should('be.enabled')

    cy.get('#query-btn').invoke('attr', 'id')
    .should('equal','query-btn')

    cy.get('#query-btn')
    .should('contain','Button')
    .and('have.class','query-btn')

    //Explicit assertions
    //expect
    expect(true).to.be.true

    let name= 'cypress'
    expect(name).to.be.equal('cypress')

    // assert

    assert.equal(4, 4, 'Not Equal')
    assert.strictEqual(4, 4, 'Not strickly Equal')

    //attachemnt

    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#uname').type('test')
    cy.get('#pwd').type('test')
    cy.get('[type="submit"]').click()

 
})