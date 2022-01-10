describe('Simple test', () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it('Focuses the input on load', () => {
        cy.focused().should('have.attr', 'id', 'title');
    });
    it('Types a query and submits it', () => {
        const value = 'New todo';

        cy.get('#title')
        .type(value)
        .should('have.value', value);

        
    });

})