// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('login', function(user = Cypress.env('user_name'), password = Cypress.env('user_password')){
    cy.visit('/users/sign_in')
    cy.get('#user_login').type(user)
    cy.get('#user_password').type(password, { log: false })
    cy.get('#new_user > .submit-container > .btn').click()
})

Cypress.Commands.add('login', (
    user = Cypress.env('user_name'), 
    password = Cypress.env('user_password'),
    { cacheSession = true } = {}, ) => {

    const login = () => {
      cy.visit('/users/sign_in')
      cy.get("[data-qa-selector='login_field']").type(user)
      cy.get("[data-qa-selector='password_field']").type(password, { log: false })
      cy.get("[data-qa-selector='sign_in_button']").click()
    }
  
    const options = {
      cacheAcrossSpecs: true,
    }
  
    if (cacheSession) {
      cy.session(user, login, options)
    } else {
      login()
    }
  })

Cypress.Commands.add('logout', function(){
    cy.login()
    cy.get('.header-user-dropdown-toggle').click()
    cy.get('.sign-out-link').click()
})

Cypress.Commands.add('create_project', function(project) {
    cy.visit('/projects/new')
    cy.get('#blank-project-name > .project-name > #project_name').type(project.name)
    cy.get(':nth-child(5) > #project_description').type(project.description)
    cy.get('#blank-project-pane > #new_project > .btn-success').click()

})