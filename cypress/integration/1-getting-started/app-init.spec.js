describe('App Inicialization', () => {
    it('Displays todos from API on Load', () => {
        cy.SeedAndVisit();
        cy.get('.task-wrapper').should('have.length', 4);
    });
});