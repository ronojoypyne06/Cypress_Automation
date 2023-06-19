export class LoginPage {

    navigate(url) {
        cy.visit('https://stage.twistle.com/')
    }
    enterUsername() {
        cy.get('#username').type('ronojoy.pyne@twistle.com')
    }
    Clickbtn() {
        cy.get('.tws-btn--primary').click()
    }
    enterPassword() {
        cy.get('#password').type('Future@hope1')
    }
    clickLogin() {
        cy.get('.tws-btn--primary').click()
    }
    loginvisit() {
        cy.visit("https://stage.twistle.com/desktop/#home")
    }
    clickfiles() {
        cy.get('#sidebar-navigation > [data-section="attachments"]').click()
    }
    clickcreate() {
        cy.get('.create_wrap > .tws-btn--primary-lg').click()
    }
    clickfolder() {
        cy.get('.add_folder').click()
    }
    typename() {
        cy.get('#title').type('Automated Folder')
    }
    savefolder() {
        cy.get('.tws-form-button-bar > .tws-btn--primary').click()
    }
}





