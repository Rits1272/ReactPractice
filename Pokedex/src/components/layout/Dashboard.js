import React from 'react';
import PokemonList from '../pokemon/PokemonList'

class Dashboard extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="col">
          <PokemonList />
        </div>
      </div>
    )
  }
}

export default Dashboard;
