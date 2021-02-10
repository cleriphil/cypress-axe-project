/// <reference types="cypress"/>
 
describe('Claire\'s website', () => {
    it('should log any accessibility failures', () => {
        cy.visit('https://www.clairelucebaldwin.com/');
        cy.injectAxe();
        cy.checkA11y();
    });
});

//TO DO 
// Test multiple URLs on claire's site