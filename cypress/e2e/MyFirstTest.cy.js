
describe('My First Test', () => {
    it('verify title-postive', () => 
    {
      cy.visit("https://www.google.com/")
      cy.title().should('eq','Google')
    })

    it('verify title-negative', () => 
    {
      cy.visit("https://www.google.com/")
      cy.title().should('not.contain', 'Text')
    })

  })

  describe('My Test', () => {
    it('verify title-postive', () => 
    {
      cy.visit("https://www.google.com/")
      cy.title().should('eq','Google')
    })

    it('verify title-negative', () => 
    {
      cy.visit("https://www.google.com/")
      cy.title().should('not.contain', 'Text')
    })

  })