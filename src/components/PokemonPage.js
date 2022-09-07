import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokeAry, setPokeAry] = useState([]);
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
    .then(r => r.json())
    .then(data => setPokeAry(data));
  },[]);

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
      <PokemonCollection pokeAry={pokeAry} searchVal={searchVal} />
    </Container>
  );
}

export default PokemonPage;
