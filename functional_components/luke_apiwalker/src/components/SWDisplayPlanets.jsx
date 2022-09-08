import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DisplayPlanets = (props) => {
    const [planets, setPlanets] = useState({});
    const [error, setError] = useState();

    const {id} = useParams();


    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
            console.log('data response: ', response.data)
            setPlanets(response.data)
            console.log('planets: ', planets)
        })
        .catch(err => {
            console.log(err)
            setError(err)
        })
    }, [id]);


    return (
        <div>
            {
            planets &&
                <>
                    <h1>{planets.name}</h1>
                    <p>Climate: {planets.climate}</p>
                    <p>Terrtain: {planets.terrain}</p>
                    <p>Surface Water: {planets.surface_water}</p>
                    <p>Population: {planets.population}</p>
                </>
            }
            {
            error &&
            <>
            <h2>These are not the droids you're looking for...</h2>
            <img scr="https://i.redd.it/6o6blcul5n841.jpg" alt="Obi-Wan" />
        </>
            }
        </div>
    )
}

export default DisplayPlanets