describe('Google', () => 
{
    it('Google Home Page', () => 
    {
      cy.visit("https://www.google.com/")
    })

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

describe('Gmail', () => 
{
    it('Gmail About Page', () => 
    {
      cy.visit("https://www.google.com/")
      cy.get(':nth-child(1) > .gb_t').click()
    })

    it('Open Gmail', () => 
    {
      cy.visit("https://www.google.com/gmail/about/")
      cy.get('.header__aside__buttons > [href="https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=SignUp"]').click()
    })
})



   
