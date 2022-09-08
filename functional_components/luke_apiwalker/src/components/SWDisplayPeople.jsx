import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom'




const DisplayPeople = (props) => {
    const [people, setPeople] = useState({});
    const [homeworld, setHomeworld] = useState({})
    const [error, setError] = useState();

    const {id} = useParams();
    const navigate = useNavigate();



    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
            console.log('data response: ', response.data)
            setPeople(response.data)
            console.log('people: ', people)
            axios.get(response.data.homeworld)
                .then(response => {console.log('homeworld is...', response.data)
            setHomeworld(response.data);
            })
        })
        .catch(err => {
            console.log(err)
            setError(err)
        })
    }, [id]);

    const getPlanet = () => {
        console.log("URL HOMEWORLD: ", homeworld.url)
        let url = homeworld.url
        let parsedUrl = url.split('/')
        console.log("Parsed:", parsedUrl)
        let numId = parsedUrl[parsedUrl.length-2];
        navigate(`/planets/${numId}`)
        console.log(numId)
        return numId
    }



    return (
        <div>
            {
            people &&
                <>
                    <h1>{people.name}</h1>
                    <p>Height: {people.height}</p>
                    <p>Mass: {people.mass}</p>
                    <p>Hair Color: {people.hair_color}</p>
                    <p>Skin Color: {people.skin_color}</p>
                    <button onClick={getPlanet}>Homeworld: {homeworld.name}</button>
                </> 
            }
            {
            error &&
                <>
                    <h2>These are not the droids you're looking for...</h2>
                    <img src="https://i.redd.it/6o6blcul5n841.jpg" alt="Obi-Wan" />
                </>
            }
        </div>
    )
}

export default DisplayPeople