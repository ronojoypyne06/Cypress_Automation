describe('read write file tests', () => {
    // using fixture
    beforeEach(function () {
        cy.fixture('example.json').as('data')
    })

    it('read file using fixture', function () {

        cy.fixture('example.json')
            .its('name').should('eq', 'cypress')

        cy.log(this.data.name)
        cy.log(this.data.email)

    })
    //read file
    it('read file', function () {
        cy.readFile('./cypress/fixtures/example.json').its('name').should('eq', 'cypress')
    })

    //write file

    it('write file', function () {
        cy.writeFile('sample.txt', 'Hello! we are learning cypress online')
        cy.writeFile('sample.txt', '\nI am Ronojoy', {flag: 'a+'})
        cy.readFile('sample.txt').should('contain', 'cypress')

    })

})