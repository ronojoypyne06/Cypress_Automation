/// <reference types="cypress" />

it('google test', () => {

cy.visit('https://www.google.com')
cy.get('#APjFqb').type('Twistle.com{enter}')
cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()

cy.get('#rso > :nth-child(1) > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .TbwUpd > :nth-child(2) > .byrV5b > .apx8Vc').click()
cy.visit('https://app.twistle.com/').click()
})