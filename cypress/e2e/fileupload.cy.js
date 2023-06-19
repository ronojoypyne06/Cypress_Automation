describe('This is File upload tests', function(){

    it('file upload demo', function(){
        cy.visit('https://filebin.net/')
        cy.get('[id="fileField"]').attachFile('photo.jpg')
    })
})