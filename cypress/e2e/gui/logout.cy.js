describe('login page', () => {

    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })
    it.only('Successfull logout', function(){
    
      cy.logout()
      cy.url().should('be.equal', 'http://localhost/users/sign_in')
    })
  })