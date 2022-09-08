import React, {useState, useEffect} from "react";
import Pokemon from "../components/Pokemon";
import axios from 'axios'

const Fetch = () => {
    // const [pokemon, setPokemon] = useState()
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown(current => !current);
    }

    return (
        <div>
            <button onClick={handleClick}> Gotta Fetch Them All</button>
            {isShown && <Pokemon />}
        </div>
    );
};

export default Fetch




    // const fetchPokemon = () => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/`)
    //     .then(response => {
    //         console.log("Your response: " + response)
    //         return response.json(); //json is another promise
    //     })  // successful call
    //     .then(jsonResponse => {
    //         console.log(jsonResponse)
    //         setPokemon(jsonResponse)
    //         console.log(setPokemon)
    //     })
    //     .catch(err => console.log('err ' + err))
    // }

    // const fetchPokemonWithAwait = async() => {
    //     const response = await fetch('https://pokeapi.co/api/v2/eevee')
    //     const jsonResponse = await response.json()
    //     console.log(jsonResponse)
    //     setPokemons(jsonResponse)
    // }

    // const fetchPokemonWithAxios = () => {
    //     axios.get(`https://pokeapi.co/api/v2/machamp`)
    //     .then(response => {
    //         console.log(response.data)
    //         setPokemons(response.data)
    //     })
    //     .catch()
    // }

    // useEffect(() => {
    //     axios.get(`https://pokeapi.co/api/v2/`).then((res) => {
    //         const responsePoke = res.data;
    //         setPokemon(responsePoke)
    //     });
    // }, []);