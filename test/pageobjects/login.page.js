import Page from './page';

class LoginPage extends Page {
    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get btnSubmit () { return $('.login-form-button'); }
    get errorToast () { return $('.ant-notification-notice-message');}
    get loginErrMsg () { return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]');}

    async open () {
        return super.open('/user/login');
    }

    async setLogin (email){
        return (await this.inputUsername).setValue(email);
    }

    async setPassword (password){
        return (await this.inputPassword).setValue(password);
    }

    async clickSubmitButton () {
        return (await this.btnSubmit).click();
    }

    async submitButtonIsDisabled () {
        return expect(this.btnSubmit).toBeDisabled();
    }

    errorToastAppeared () {
        return expect(this.errorToast).toBeDisplayed();
    }

    async emptyLoginInput() {
        this.clearInput(await this.inputUsername);
    }

    async loginRequiredError() {
        await expect(this.loginErrMsg).toBeDisplayed();
        await expect(this.loginErrMsg.getText()).toEqual('Required');
    }

}

export default new LoginPage();
