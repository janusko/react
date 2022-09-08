import React, { useState, useEffect } from 'react'
import DisplayPeople from './SWDisplayPeople';
import DisplayPlanets from './SWDisplayPlanets';
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [choice, setChoice] = useState('people');
    const [id, setId] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${choice}/${id}`)
        clearForm();
    }

    const handleChoice = (e) => {
        setChoice(e.target.value)
    }

    const handleId = (e) => {
        setId(e.target.value)
    }

    const clearForm = () => {
        setChoice('');
        setId('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Search For:
                <select onChange={handleChoice}>
                    <option name='people' value="people">People</option>
                    <option name='planets' value="planets">Planets</option>
                </select>
                ID:
                <input name="id" type='number' onChange={handleId} />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Search