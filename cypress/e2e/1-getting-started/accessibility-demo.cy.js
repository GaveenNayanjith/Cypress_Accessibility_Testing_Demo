
/// <reference types="cypress" />

describe('Accessibility testing with AXE tool', () => {
  beforeEach(() => {
    //First the site that needs to be visited is called using the cy.visit() function. 
    cy.visit('https://bstackdemo.com/')

    //After visiting the page, the cy.injectAxe() method is called to load the 
    //axe-core runtime into the loaded page. 
    cy.injectAxe();
  })

  it('Test for any accessibility issues on page load', () => {
    //The axe modules starts to search for the accessibility issues on page
    cy.checkA11y();
  })

  it('Test for any baccessibility issues on page with custom parameters.', () => {
    //The axe modules starts to search for the accessibility issues on page but with the added parameters for the test. 
    cy.checkA11y('shelf-item', {
      runOnly: {
        type: 'tag',
        values: ['wcag2a']
      }
    })
  })

  it('Test for any accessibility issues on page load', () => {

    //Page is redirected to another page
    cy.get('#signin').click();

    //The axe modules starts to search for the accessibility issues on page
    cy.checkA11y();
  })


 
})

