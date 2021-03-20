import './App.css';
import { useState } from 'react';
import react from 'react';
import Axios from 'axios';
import background from './components/img/background.jpg';

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    image: "",
    hp: "",
    attack: "",
    defence: "",
    type: ""
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        setPokemon({
          name: response.data.name,
          species: response.data.species.name,
          image: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defence: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name
        });
        setPokemonChosen(true);
    })
}

  return (
    <div className='App'>
      <div className="pokemon__section">
        <h1>Pokemon Stats</h1>
        <input type='text'placeholder='Enter Pokemon Name...' onChange={(event) => {setPokemonName(event.target.value);}}  />
        <button onClick={searchPokemon}>Search</button>
        <div className='display__section'>
          <h2>Please copy the name of a pokemon below and paste it into the search bar for detailed inormation</h2>
          {!pokemonChosen ? (
          <div className='display__section-list'>
            <div>
              <h6>squirtle</h6>
              <h6>charmander</h6>
              <h6>ivysaur</h6>
              <h6>venusaur</h6>
              <h6>charmeleon</h6>
              <h6>charizard</h6>
              <h6>wartortle</h6>
              <h6>blastoise</h6>
              <h6>caterpie</h6>
              <h6>metapod</h6>
            </div>
            <div>
              <h6>butterfree</h6>
              <h6>weedle</h6>
              <h6>kakuna</h6>
              <h6>beedrill</h6>
              <h6>pidgey</h6>
              <h6>pidgeotto</h6>
              <h6>pidgeot</h6>
              <h6>rattata</h6>
              <h6>raticate</h6>
            </div>
          </div>
          ) : (
          <div className='pokemon__stats'>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} />
            <h3>Species: {pokemon.species}</h3>
            <h3>Type: {pokemon.type}</h3>
            <h4>HP: {pokemon.hp}</h4>
            <h4>Attack: {pokemon.attack}</h4>
            <h4>Defence: {pokemon.defence}</h4>
          </div>  
          )}
        </div>
      </div> 
    </div>   
  )
}

export default App;
