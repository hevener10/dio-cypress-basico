describe('App Inicialization', () => {
    it('Displays todos from API on Load', () => {
        cy.server();
        cy.route('GET', '/ToDoModels', [
            {
                "id": 1,
                "title": "One",
                "completed": false
            },
            {
                "id": 2,
                "title": "Two",
                "completed": false
            },
            {
                "id": 3,
                "title": "Tree",
                "completed": false
            },
            {
                "id": 4,
                "title": "Four",
                "completed": false
            },
        ]);

        cy.visit('/');
        cy.get('.task-wrapper').should('have.length', 4);
    });
});