import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'


class PokemonPage extends React.Component {

   state = {
     pokemons: [],
     searchTerm: ""
   }

   fetchPokemon = () => {
     fetch(`http://localhost:3000/pokemon`)
       .then(resp => resp.json())
       .then(pokemons => {
         this.setState({
           pokemons: pokemons
         })
       })
   }

   addPokemon = (newPoke) => {
    this.setState({
      pokemons: [...this.state.pokemons, newPoke]
    })
   }

   componentDidMount() {
     this.fetchPokemon()
   }

   handleOnChange = (event) => {
      this.setState({
        searchTerm: event.target.value 
      })
   }

   searchPokemon = () => {
    return this.state.pokemons.filter(poke => {
     return poke.name.includes(this.state.searchTerm)
    })
   }



  render() {
    // console.log(this.state.searchTerm)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleOnChange} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.searchPokemon()}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
