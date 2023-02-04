// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io');
//   });
// });

// describe('My First Test', () => {
//   it('Does not do much! This should pass.', () => {
//     expect(true).to.equal(true);
//   });
// });
// describe('My First Test', () => {
//   it('Does not do much! This should fail.', () => {
//     expect(true).to.equal(false);
//   });
// });

// describe('My First Test', () => {
//   it('Visits the Kitchen Sink', () => {
//     // cy.visit('https://example.cypress.io');
//     // cy.contains('type');
//     cy.visit('http://localhost:3500/');
//     // cy.contains('POSEIDON');
//   });
// });


/*
any visit to http://localhost:3500/ should check cookies
  if no cookies immediate direct to /auth/signin
  else displays dashboard
*/
describe('login page', () => {
  beforeEach(() => { cy.visit('http://localhost:3500/auth/signin'); });
  // it('logo is displayed', () => {});
  it('POSEIDON is displayed', () => { cy.contains('h2', 'POSEIDON'); });
  context('form inputs', () => {
    beforeEach(() => { cy.get('form').contains('Sign In').click(); });
    it('requires email', () => {
      cy.get('div').should('contain', 'Please enter your email');
    });
    it('requires password', () => {
      cy.get('div').should('contain', 'Please enter your password');
    });
    it('entry into dashboard', () => {
      // cy.get('input[name="email"]').type('josh@email.com');
      // cy.get('input[name="password"]').type('password');
    });
  });

  // // it('Need an account?', () => {
  // //   cy.contains('Need an account?').should('have.attr', 'href', '#/register');
  // // });
  it('Sign Up button links to /register', () => {
    cy.contains('Sign Up').should('have.attr', 'href', '/register');
  });

  // it('Upon 3500, checks cookies', () => {
  //   cy.visit('http://localhost:3500/');
  //   cy.url().should('include', '/auth/signin');
  // });
});
// console.log(see);