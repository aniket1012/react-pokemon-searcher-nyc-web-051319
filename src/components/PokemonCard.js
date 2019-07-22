import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

    state = {
      isClicked: false  
    }

    toggleFront = () => {
      this.setState({
        isClicked: !this.state.isClicked
      })
    }

    getHp = () => {
      return this.props.pokemon.stats.find(stat => {
        return stat.name === 'hp';
      }).value
    }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={() => this.toggleFront()} src={this.state.isClicked ? this.props.pokemon.sprites.back: this.props.pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHp()} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
