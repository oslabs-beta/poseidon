
/*
any visit to http://localhost:3500/ should check cookies
  if no cookies immediate direct to /auth/signin
  else displays dashboard
*/
describe('login page', () => {
  beforeEach(() => { cy.visit('localhost:3500/auth/signin'); });
  // it('logo is displayed', () => {});
  it('POSEIDON is displayed', () => { cy.contains('h2', 'POSEIDON'); });
  context('form inputs', () => {
    beforeEach(() => { cy.get('form'); });
    it('requires email', () => {
      cy.contains('Sign In').click()
        .get('div').should('contain', 'Please enter your email');
    });
    it('requires password', () => {
      cy.contains('Sign In').click()
        .get('div').should('contain', 'Please enter your password');
    });
    it('entry into dashboard', () => {
      cy.get('input[name="email"]').type('josh@email.com')
        .get('input[name="password"]').type('password')
        .get('button').contains('Sign In').click()
        // .log('CHECK INCOMPLETE NEED REGEX URL');
        // .url().should('match', 'localhost:3500')
        .url().should('include', '/');
//     // UI should reflect this user being logged in
//     cy.get('h1').should('contain', 'jane.lane')
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

// describe('The Login Page', () => {
//   beforeEach(() => {
//     // reset and seed the database prior to every test
//     cy.exec('npm run db:reset && npm run db:seed')

//     // seed a user in the DB that we can control from our tests
//     // assuming it generates a random password for us
//     cy.request('POST', '/test/seed/user', { username: 'jane.lane' })
//       .its('body')
//       .as('currentUser')
//   })

//   it('sets auth cookie when logging in via form submission', function () {
//     // destructuring assignment of the this.currentUser object
//     const { username, password } = this.currentUser

//     cy.visit('/login')

//     cy.get('input[name=username]').type(username)

//     // {enter} causes the form to submit
//     cy.get('input[name=password]').type(`${password}{enter}`)

//     // we should be redirected to /dashboard
//     cy.url().should('include', '/dashboard')

//     // our auth cookie should be present
//     cy.getCookie('your-session-cookie').should('exist')


//   })
// })


describe('register', () => {

  it('no fields may be empty', () => {
    cy.visit('localhost:3500/register')
    // cy.get('input[name="password"]').get('[value').should('not.contain', '')
      // .get('input[name="password"]').should('not.have.value', '')
      // .get('input[value]').should('not.have.length', 0)
      // .get('input[name="password"]').find('[value]')
      .get('input[name="firstName"]').should('have.value', '')
      .get('input[name="lastName"]').should('have.value', '')
      .get('input[name="email"]').should('have.value', '')
      .get('input[name="password"]').should('have.value', '')
      .get('input[name="changePassword"]').should('have.value', '')
      .get('form').contains('Register').click()
      .url().should('include', '/register');
  });
  // it('lastname can\'t be empty', () => {});
  // it('email can\'t be empty', () => {});

});