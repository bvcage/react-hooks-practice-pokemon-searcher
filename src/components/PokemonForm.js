import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ createNewPoke }) {

  const initialPoke = {
    name: '',
    hp: 0,
    sprites: {
      front: '',
      back: '',
    },
  }
  
  const [newPoke, setNewPoke] = useState(initialPoke);

  function handleChange (event) {
    let inputKey = event.target.name;
    let inputValue = event.target.value;
    switch (inputKey) {
      case 'frontUrl':
      case 'backUrl':
        let spriteKey = inputKey.slice(0, -3);
        setNewPoke({...newPoke,
          sprites: {...newPoke.sprites,
            [spriteKey]: inputValue,
          }
        })
        break;
      default:
        setNewPoke({...newPoke,
          [inputKey]: inputValue,
        })
        break;
    }
  }

  function handleSubmit (event) {
    event.preventDefault();
    console.log('submitting ...');
    createNewPoke(newPoke);
    resetNewPoke();
  }

  function resetNewPoke () {
    setNewPoke(initialPoke);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={newPoke.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={newPoke.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPoke.sprites.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPoke.sprites.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
