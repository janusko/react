import React, { useState } from 'react'

const ColorForm = (props) => {
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(color,size);
        setColor("")
        setSize("")
    }

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    const handleSize = (e) => {
        setSize(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Create a box!</h3>
                <input type="text" name="color" value={color} onChange={handleColor}  />
                <input type="number" name="size" value={size} onChange={handleSize} />
                <input type="submit" value='Add a Box' />
            </form>
        </div>
    )
}

export default ColorForm;