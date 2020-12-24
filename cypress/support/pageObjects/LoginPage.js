class LoginPage {
    getUserNameTextField() {
        return cy.get('input#userName')
    }
    getPasswordTextField() {
        return cy.get('input#password')
    }
    getLoginButton() {
        return cy.get('button#loginBtn')
    }
    getLoginImage(){
        return cy.get('img[src="/static/media/Login.5891a47a.png')
    }
}
export default LoginPage;