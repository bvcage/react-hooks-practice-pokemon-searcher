import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokeAry, searchVal }) {

  // const [pokeAry, setPokeAry] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/pokemon`)
  //   .then(r => r.json())
  //   .then(data => setPokeAry(data));
  // },[]);

  const pokesToDisplay = pokeAry.filter(pokemon => {
    return pokemon.name.includes(searchVal);
  })

  const pokeCards = pokesToDisplay.map(pokemon => {
    return (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    )
  })

  return (
    <Card.Group itemsPerRow={6}>
      <>{pokeCards}</>
    </Card.Group>
  );
}

export default PokemonCollection;
