describe('App Inicialization', () => {
    it('Displays todos from API on Load', () => {
        cy.server();
        cy.fixture('todos').then(todos=>{	
            cy.route('GET', '/ToDoModels', todos)
        })
        cy.visit('/');
        cy.get('.task-wrapper').should('have.length', 4);
    });
});