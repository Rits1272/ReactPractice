import React from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';

class PokemonList extends React.Component{

  state={
    url:'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000',
    pokemon:null,
  };

  async componentDidMount(){
    const res = await axios.get(this.state.url);
    this.setState({
      pokemon : res.data['results']
    });
  }

  render(){
    return(
    <React.Fragment>
    {this.state.pokemon ?
      (<div className='row'>
        {this.state.pokemon.map(pokemon => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
       </div>
      ):(
        <h1>Loading Pokemom</h1>
      )}

    </React.Fragment>
    );
  }
}

export default PokemonList;
