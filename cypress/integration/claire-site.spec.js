/// <reference types="cypress"/>
 

const sizes = ['macbook-15','iphone-6', 'ipad-2'];
const urls = ['https://www.clairelucebaldwin.com', 'https://www.clairelucebaldwin.com/portfolio','https://www.clairelucebaldwin.com/portfolio-thumb-alena','https://www.clairelucebaldwin.com/shop','https://www.clairelucebaldwin.com/blog-1','https://www.clairelucebaldwin.com/about-me'];

describe('Claire\'s website', () => {
    urls.forEach(url => {
        describe(`url: ${url}`, () => {
            sizes.forEach(size => {
                it(`Should log any accessibility failures on ${url} on ${size}`, () => {
                    cy.visit(url);
                    cy.viewport(size);
                    cy.injectAxe();
                    cy.checkAccessibility(); //custom command for printing a11y violations in command line
                });
            });
        });
    });
});