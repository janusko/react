import axios from "axios";
import React, { useState, useEffect } from "react";


const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(response => {
            setPokemon(response.data.results)
            console.log(response.data)
        });
    }, []);

    return (
        <div>
            {pokemon.length > 0 && pokemon.map((pokemon, index) => {
                return (
                    <div key={index}>{pokemon.name}</div>
                )
            })}
        </div>
    );
}

export default Pokemon