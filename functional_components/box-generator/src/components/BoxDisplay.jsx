import React, { useState } from 'react'

const BoxDisplay = (props) => {
    return (
        <div className='container'>
            {props.list.map((item, i) => <div key={i} style={{ backgroundColor: item.color, height: parseInt(item.size), width: parseInt(item.size) }}></div>)}
        </div>
    )
}

export default BoxDisplay; 