import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";

class GHSearch extends Component {
  state = {
    searchResults: "",
  };

  searchHandler = () => {
    this.setState({
      searchResults: "Search results Displays here",
    });
  };
  render() {
    const { searchResults } = this.state;
    return (
      <>
        <Input
          type="text"
          name="search"
          placeholder="Input GH username"
          id="searchfield"
        />
        <Button
          data-cy="search-cta"
          onClick={() => {
            this.searchHandler();
          }}
          name="search"
        >
          Search
        </Button>
        <br />
        <div id ="results"> {searchResults}</div>
      </>
    );
  }
}

export default GHSearch;
