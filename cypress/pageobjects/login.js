class login {
    elements = {
        corpID: '#txtCorpID',
        loginID: '#txtLoginID',
        password : '#txtPassword',
        loginbtn : '#btnLogin'
    }

    inputCorpID(corpID) {
        cy.sendkeystoinputfield(this.elements.corpID,corpID)
    }
    inputloginID(loginID) {
        cy.sendkeystoinputfield(this.elements.loginID,loginID)
    }
    inputPassword(password) {
        cy.sendkeystoinputfield(this.elements.password,password)
    }
    clickLoginButton() {
        cy.clickonElement(this.elements.loginbtn)
    }
}

export default login