/// <reference types="Cypress" />

describe('Test Home Page', () => {

  it('Test the creation of a post', () => {
    var newPost = {
      "name": "Grants First Post",
      "topic": "introPost",
      "message": "Hello this is my first post I am glad to be here!"
    }
    cy.visit('http://localhost:4200/');

    cy.get("[data-test-selector='postViewingArea']").children().should("have.length", 0);

    cy.get("[data-test-selector='postNameField']").type(newPost.name);
    cy.get("[data-test-selector='postTopicField']").find('select').select(newPost.topic);
    cy.get("[data-test-selector='postMessageField']").type(newPost.message);

    cy.get("[data-test-selector='postBtn']").click();

    cy.get("[data-test-selector='postNameField']").should("have.value", "");
    cy.get("[data-test-selector='postTopicField']").find('select').should("have.value", null);
    cy.get("[data-test-selector='postMessageField']").should("have.value", "");

    cy.get("[data-test-selector='postViewingArea']").children().should("have.length", 1);

    cy.contains(newPost.name);
    cy.contains(newPost.topic);
    cy.contains(newPost.message);
  })

});

  