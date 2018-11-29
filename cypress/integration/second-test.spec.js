/// <reference types="Cypress" />

describe('Test Home Page', () => {
  var firstPost, secondPost;

  before(() => {
    cy.visit('http://localhost:4200/');
    cy.fixture("testPost.json").then((data) => {
      firstPost = data[0];
      secondPost = data[1];
    });
  });

  it('Test the creation of a post', () => {
    cy.get("[data-test-selector='postViewingArea']").children().should("have.length", 0);

    cy.createPost(firstPost);
    cy.get("[data-test-selector='postViewingArea']").children().should("have.length", 1);

    cy.contains(firstPost.name);
    cy.contains(firstPost.topic);
    cy.contains(firstPost.message);
  });

  it('should be able to have more than one post', () => {
    cy.get("[data-test-selector='postViewingArea']").children().should("have.length", 1);

    cy.createPost(secondPost).debug();
    cy.get("[data-test-selector='postViewingArea']").children().should("have.length", 2);

    cy.contains(secondPost.name);
    cy.contains(secondPost.topic);
    cy.contains(secondPost.message);
  })

});

  