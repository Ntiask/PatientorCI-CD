describe('check if opened', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Patientor');
    console.log('testi');
  });
});