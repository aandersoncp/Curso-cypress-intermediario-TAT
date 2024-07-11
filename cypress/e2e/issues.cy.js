import {faker} from '@faker-js/faker'

describe('Create Issue', function(){
    this.beforeEach(() => {
        const project = {
            name: `project-${faker.random.words(1)}`,
            description: `description-${faker.random.words(1)}`
        }

        cy.createProject(project)
    })

    it('Successfull create issue', function(){
        cy.createIssue(project)
    })
})