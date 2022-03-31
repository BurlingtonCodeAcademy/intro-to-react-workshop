import React, { useState, useEffect } from "react";

export default function Card(props) {
    let [pokemon, setPokemon] = useState({});

    const getPokemon = async () => {
        // where does this repeat? how to could we edit out project to re-use this logic?
        let response = await fetch(props.url);
        let data = await response.json();

        // There's a lot of extra data that we don't need, so let's grab just the stuff we want
        let pokemonDetails = {
            name: props.name,
            picture: data.sprites.front_default,
            height: data.height,
            weight: data.weight,
        };
        setPokemon(pokemonDetails);
    };

    // fetch data when Card first loads
    useEffect(
        () => {
            getPokemon();
        },
        [
            /* leave this array empty to make sure out getPokemon function only runs once */
        ]
    );

    // stops trying to show anything if the data is not yet available
    if (typeof props.name !== "string") {
        return null;
    }

    // displays the card
    return (
        <div className="card">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.picture} />
            <section>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
            </section>
        </div>
    );
}
