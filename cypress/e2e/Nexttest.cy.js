context('My First Test', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('has an h1 on the page', () => {
        cy.get('h1').should('exist');
    })

    it('has an h1 on the page', () => {
        cy.get('h1').should('contain.text','Action')
    })

    it('has a pagaragrh under the h1', () => {
        cy.get('.container').eq(1).find('p').should('exist')
    })
    
    it('has a section with with the correct elements', () => {
        cy.get('.container').eq(2).within(() =>{
        cy.get('h4').should('exist');
        cy.get('p').should('exist')
        })
    })
})