import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/portal/profile.portal.page';

describe('Auth', () => {

    beforeEach(()=>{
        LoginPage.open();
    });

    afterEach (()=>{
        browser.execute('window.localStorage.clear()');
    });

    it('should login with valid credentials', () => {
        LoginPage.open();
        LoginPage.setLogin('student@local.us');
        LoginPage.setPassword('Localus');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are absent', function () {
        LoginPage.submitButtonIsDisabled();
    });

    it('fails if invalid data provided ', function () {
        LoginPage.setLogin('mig@ggn.gon');
        LoginPage.setPassword('Qwerty123');
        LoginPage.clickSubmitButton();

    });

    it('login input is required', function () {
        LoginPage.setLogin('mi@gn.on');
        LoginPage.emptyLoginInput();
        LoginPage.loginRequiredError();
    });

});


