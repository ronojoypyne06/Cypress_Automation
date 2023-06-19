import { LoginPage } from "../Pages/login_page"


describe('All login tests', () => {

    const loginPage = new LoginPage()

    it('Login with valid credentails', function () {

        loginPage.navigate('https://stage.twistle.com/');
        loginPage.enterUsername();
        loginPage.Clickbtn();
        loginPage.enterPassword();
        loginPage.clickLogin();
        loginPage.loginvisit('https://stage.twistle.com/desktop/#home');
        loginPage.clickfiles();
        loginPage.clickcreate();
        loginPage.clickfolder();
        loginPage.typename('Automated Folder');
        loginPage.savefolder();
    })

})