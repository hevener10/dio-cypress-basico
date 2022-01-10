describe('Form Submit', () => {
    it('Add a new todo item', () => {
        const newTodo = { 
            id:'12', 
            title:'Buy pizza', 
            completed:false
        };

        cy.server();
        cy.route({
            method: 'POST', 
            url: '/ToDoModels', 
            response: newTodo
        }).as('save');

        cy.SeedAndVisit();

        cy.fixture('todos').then(todos=>{
            cy.route('GET', '/ToDoModels', [...todos,newTodo]).as('second-load')
        });

        cy.get('#title')
        .type(newTodo.title)
        .type('{enter}');
        cy.wait('@save');
        cy.wait('@second-load');



        cy.get('.task-wrapper').should('have.length', 5);
    });
    it.only('Show error message for a failed submission', () => {
        cy.server();
        cy.route({
            method: 'POST', 
            url: '/ToDoModels', 
            status: 500,
            response: {}
        }).as('saveError');

        cy.SeedAndVisit();

        cy.get('#title')
        .type('Buy pizza')
        .type('{enter}');
        cy.wait('@saveError');

        cy.on('window:alert', text=>{
            expect(text).to.contains('500');
        });

        cy.get('.task-wrapper').should('have.length', 4);
    });
})