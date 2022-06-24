import React, { useState, useEffect } from 'react';
import Navbar from './components/titulo';
import CardPokemon from './components/CardPokemon';
import { getPokemon, getAllPokemon } from './services/pokemon';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      await loadPokemon(response.results);
    }
    fetchData();
  }, []);

  const loadPokemon = async (data) => {
      let pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }));
      setPokemonData(pokemonData);
  }

  return (
      <>
        <Navbar/>
      <div>
          <>
            <div className="grid-container">
                {pokemonData.map((pokemon, i) => {
                return <CardPokemon key={i} pokemon={pokemon} />
              })}
            </div>
          </>
      </div>
      </>
  );
}
export default App;