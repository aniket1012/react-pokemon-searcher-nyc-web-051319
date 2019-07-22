import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit =(event) => {
    this.setState({
      name: event.target.name.value,
      hp: event.target.hp.value,
      frontUrl: event.target.frontUrl.value,
      backUrl: event.target.backUrl.value
    },() => {

      fetch(`http://localhost:3000/pokemon`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
        name: this.state.name,
        stats: [
         {
           value: 150,
           name: 'special-attack'
         },
         {
           value: 150,
           name: 'speed'
         },
         {
           value: 150,
           name: 'defense'
         },
         {
           value: 150,
           name: 'special-defense'
         },
         {
           value: 150,
           name: 'attack'
         },
         {
           value: this.state.hp,
           name: 'hp'
         }
       ],
       sprites: {
         front: this.state.frontUrl,
         back: this.state.backUrl
       }
     })
    })
    .then(resp => resp.json())
    .then(newPoke => this.props.addPokemon(newPoke))
    })
  }

  render() {
    console.log()
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
