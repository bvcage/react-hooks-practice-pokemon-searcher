import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const POKE_URL = `http://localhost:3001/pokemon`;

  const [pokeAry, setPokeAry] = useState([]);
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    fetch(POKE_URL)
    .then(r => r.json())
    .then(data => setPokeAry(data));
  },[]);

  function handleNewPoke (newPoke) {
    fetch(POKE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoke),
    })
    .then(r => r.json())
    .then(newPoke => setPokeAry([...pokeAry, newPoke]))
  }

  function handleSearch (event) {
    setSearchVal(event.target.value);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm createNewPoke={handleNewPoke} />
      <br />
      <Search searchVal={searchVal} onChange={handleSearch} />
      <br />
      <PokemonCollection pokeAry={pokeAry} searchVal={searchVal} />
    </Container>
  );
}

export default PokemonPage;
