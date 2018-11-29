// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("createPost", (postObject) => {
    cy.get("[data-test-selector='postNameField']").type(postObject.name);
    cy.get("[data-test-selector='postTopicField']").find('select').select(postObject.topic);
    cy.get("[data-test-selector='postMessageField']").type(postObject.message);

    cy.get("[data-test-selector='postBtn']").click();

    cy.get("[data-test-selector='postNameField']").should("have.value", "");
    cy.get("[data-test-selector='postTopicField']").find('select').should("have.value", null);
    cy.get("[data-test-selector='postMessageField']").should("have.value", "");
})