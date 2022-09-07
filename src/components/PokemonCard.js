import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {

  const { id, name, hp, sprites } = pokemon;
  const [displayImg, setDisplayImg] = useState('front');
  
  function toggleSprite () {
    if (displayImg === 'front') setDisplayImg('back');
    else setDisplayImg('front');
  }

  return (
    <Card onClick={toggleSprite}>
      <div>
        <div className="image">
          <img src={sprites[displayImg]} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
