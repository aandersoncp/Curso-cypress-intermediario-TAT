describe('login page', () => {
  it('Successfull login', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = {cacheSession: false}
    cy.login(user, password, options)

    cy.get('.qa-user-avatar').should('be.visible')    
  })
  it.only('Successfull logout', function(){
  
    cy.logout()
    cy.url().should('be.equal', 'http://localhost/users/sign_in')
  })
})