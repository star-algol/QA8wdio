import Page from './page';

class LoginPage extends Page {
    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get btnSubmit () { return $('.login-form-button'); }
    get errorToast () { return $('.ant-notification-notice-message');}
    get loginErrMsg () { return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]');}

    open () {
        return super.open('/user/login');
    }

    setLogin (email){
        this.inputUsername.setValue(email);
    }

    setPassword (password){
        this.inputPassword.setValue(password);
    }

    clickSubmitButton () {
        this.btnSubmit.click();
    }

    submitButtonIsDisabled () {
        expect(this.btnSubmit).toBeDisabled();
    }

    errorToastAppeared () {
        expect(this.errorToast).toBeDisplayed();
    }

    emptyLoginInput() {
        this.clearInput(this.inputUsername);
    }

    loginRequiredError() {
        expect(this.loginErrMsg).toBeDisplayed();
        expect(this.loginErrMsg.getText()).toEqual('Required');
    }

}

export default new LoginPage();
