describe("Application main view", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("user can search for GitHub username in form", () => {
    cy.get("#searchfield").type("username");
    cy.get("button").contains("Search").click()
    cy.get("#results").should("contain", "Search results Displays here")
  });

  cy.route({
    method: "GET",
    url: "http://localhost:3000/searchresults",
    response: "fixture: userCanSearchForGithubUsernames.feature.js"
     
  })

});

