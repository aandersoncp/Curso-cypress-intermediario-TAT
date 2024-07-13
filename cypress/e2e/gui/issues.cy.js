import {faker} from '@faker-js/faker'

describe('Create Issue', function(){
    
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
          name: `project-${faker.datatype.uuid()}`,
          description: faker.random.words(5)
        }
    }
    
    this.beforeEach(() => {
        cy.api_deleteAllProjects()
        cy.login()
        cy.api_createProject(issue.project)
    })

    it('Successfull create issue', function(){
        cy.createIssue(issue)
        cy.get('.issue-details')
          .should('contain', issue.title)
          .and('contain', issue.description)
    })
})