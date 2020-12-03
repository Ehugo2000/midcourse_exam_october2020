import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";

class GHSearch extends Component {
  render() {
    return (
      <>
        <Input
          type="text"
          name="search"
          placeholder="Input GH username"
          id="searchfield"
        />
        <Button data-cy="search-cta" onSubmit name="search">
          Search
        </Button>
      </>
    );
  }
}

export default GHSearch;
