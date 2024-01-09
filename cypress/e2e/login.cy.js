/// <reference types="Cypress" />

const testData = require('../fixtures/testData.json')
describe('Login_functionality', () => {

  before(() => {
    cy.fixture('testData').then(function(data) {
      this.data = data;
    });
  });

  it('Perform_Login_To_WebPunch', function() {
    cy.visit("https://time.tlmdev.in/WebPunchQA/WebPunchPlus/Login.aspx?ReturnUrl=%2fWebPunchQA%2fWebPunchPlus%2fTimecard%2fAddTimecard.aspx")
    cy.get('#txtCorpID').type(this.data.corpID)
    cy.get('#txtLoginID').type(this.data.loginID)
    cy.get('#txtPassword').type(this.data.password)
    // cy.get('#btnLogin').click()
    // cy.get('#select2-ddlPPeriod-container').click()
    // cy.get('.select2-results__option').each(($el)=>{
    //       cy.log($el.text())
    //     })
    // cy.get('li:contains("12/18/2023 - 12/24/2023")').click()
 
  })

  xit('Verify_user_is_able_to_login_with_valid_credentials', () => {
    cy.visit('https://time.tlmdev.in/BlueforceQA/CRT/Login.aspx')
    console.log("Swati")
    console.log("Savita")
    console.log("Satyam")
    cy.get('#txtCorpID').type('epaycloud')
    cy.get('#txtLoginID').type('epaycloud')
    cy.get('#txtPassword').type('epaycloud')
    
  })
  xit('Verify_user_is_not_able_to_login_with_invalid_credentials', () => {
    cy.visit('https://qaemsv3.vensureone.com/')
    cy.get('nav.menu a:visible').then((el) => {
      cy.log(Cypress.$(el).length)
    })
    cy.get('nav.menu a:visible').each(function (el){
      cy.log(el.text())
    })
    cy.get('nav.menu a:visible').each((el) => {
      cy.log(Cypress.$(el).text())
    })
  })
  xit('Get_Anchor_Tag_text', () => {
    cy.visit('https://qaemsv3.vensureone.com/')
    cy.get('nav.menu')
    cy.get('nav.tabs-navigation li').find('a').each((el) =>{
      cy.log(Cypress.$(el).text())
    })
    cy.get('nav.tabs-navigation li a').eq(1).then((el) => {
      cy.log(Cypress.$(el).text())
    })
  })
  
  xit('Handle_Radio_Button', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('.radioButton').check('radio1')
    cy.get('[type="checkbox"]').check(['option1','option2'])
  })

})