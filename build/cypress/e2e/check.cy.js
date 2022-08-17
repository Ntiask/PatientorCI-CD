"use strict";
describe('check if opened', () => {
    it('passes', () => {
        cy.visit('http://localhost:3001/');
        cy.contains('Patientor');
        console.log('testi');
    });
});
