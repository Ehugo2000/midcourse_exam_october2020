describe("Application main view", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("user can search for GitHub username in form", () => {
    cy.get("#searchfield").type("username");
    cy.get("button").contains("Search").click()
  });
});
