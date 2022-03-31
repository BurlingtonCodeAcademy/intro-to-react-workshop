import React, { useEffect, useState } from 'react';
import "./App.css";

function App() {
  let url = "https://pokeapi.co/api/v2/pokemon" // this data does not change, useState is not needed
  let [pokemonList, setPokemonList] = useState([]) // this data changes, useState is needed

  const getPokemon = async () => {
    // async makes the function return a Promise⭐️
    let response = await fetch(url)
    let data = await response.json()

    setPokemonList(data.results)
  }

  /* 
  ⭐️useEffect expects a function that returns nothing OR returns another function
  
  our async function returns a Promise, so we wrap it in an anonymous function to block getPokemon's return in a different scope.
  */
  useEffect(() => { getPokemon() }, [/* leave this array empty to make sure out getPokemon function only runs once */])

  let pokemonElements = pokemonList.map((pokemon) => {
    <Card url="" />
  })

  return (
    <div className="App">
      {/* fetch pokemon list and render Cards */}

    </div>
  );
}

export default App;
