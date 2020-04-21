/* eslint-disable */
describe('Search Movie', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('accepts input', () => {
    const typedText = 'Zoo';

    cy.get('.input-field').type(typedText).should('have.value', typedText);
  });

  context('Form submission', () => {
    it('submit a form', () => {
      cy.get('.search-filter__search')
        .find('input').type('Zoo')
      cy.get('.search-filter__search').submit();

      cy.get('.movie-card').should('have.length', 1);
    })
  });
});
