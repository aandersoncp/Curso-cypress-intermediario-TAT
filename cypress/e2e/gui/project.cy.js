import { faker } from '@faker-js/faker'

describe('projects', () => {
    beforeEach(() => {
        cy.login()
    })
    it('Create project', () => {
        const project = {
            name: `project-${faker.random.words(1)}`,
            description: `description-${faker.random.words(5)}`
        }

        cy.create_project(project)
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name.toLowerCase()}`)
    })
})