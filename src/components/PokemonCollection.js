import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokeAry, searchVal }) {

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
