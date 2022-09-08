import React, { useState, useEffect} from 'react';
import axios from 'axios';

const displayPokemon = () => {
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(response => {
            setPokemon(response.data.results)
            console.log(response.data)
        });
        .catch()
    }, []);

    return

}

export default displayPokemon