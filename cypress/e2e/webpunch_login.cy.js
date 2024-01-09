/// <reference types="Cypress" />
import login from "../pageobjects/login"

describe('WebPunch_Login_functionality', () => {
    before(()=>{
        cy.fixture('loginData').then(function(data){
            this.data=data
        })
    })
    
    it("Perform_Login",function () {
        const loginpage = new login()
        cy.visit(this.data.URL)
        loginpage.inputCorpID(this.data.corpID)
        loginpage.inputloginID(this.data.loginID)
        loginpage.inputPassword(this.data.password)
        loginpage.clickLoginButton()
    })

})