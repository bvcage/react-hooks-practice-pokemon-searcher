import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [searchVal, setSearchVal] = useState('');

  function handleSearch (event) {
    setSearchVal(event.target.value);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchVal={searchVal} onChange={handleSearch} />
      <br />
      <PokemonCollection />
    </Container>
  );
}

export default PokemonPage;
