import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
    let url = "https://pokeapi.co/api/v2/pokemon"; // this data does not change, useState is not needed
    let [pokemonList, setPokemonList] = useState([]); // this data changes, useState is needed

    const getPokemon = async () => {
        // async makes the function return a Promise ⭐️
        let response = await fetch(url);
        let data = await response.json();

        setPokemonList(data.results);
    };

    /* 
  ⭐️ useEffect expects a function that returns nothing OR returns another function
  
  our async function returns a Promise, so we wrap it in an anonymous function to block getPokemon's return in a different scope.
  */
    useEffect(
        () => {
            getPokemon();
        },
        [
            /* leave this array empty to make sure out getPokemon function only runs once */
        ]
    );

    let pokemonElements = pokemonList.map((pokemon) => {
        return <Card url={pokemon.url} name={pokemon.name} />;
    });

    return (
        <div className="App">
            {/*show the cards*/}
            {pokemonElements}
        </div>
    );
}

export default App;
