import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ createNewPoke }) {

  function handleSubmit (event) {
    event.preventDefault();
    const formData = event.target;

    console.log('submitting ...');
    
    const newPoke = {
      name: formData.name.value,
      hp: formData.hp.value,
      sprites: {
        front: formData.frontUrl.value,
        back: formData.backUrl.value,
      },
    }
    
    createNewPoke(newPoke);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
