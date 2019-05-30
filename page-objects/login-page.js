import { Selector } from 'testcafe';

class LoginPage {
    get createAccountBtn() { return Selector(".create-account").child(); }
    get createAccountContent() { return this.createAccountBtn.textContent; }
}

export default new LoginPage();