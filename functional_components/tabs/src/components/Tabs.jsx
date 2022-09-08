import React from 'react'

const Tabs = (props) => {
    return (
        <div className ='container'>
            {props.list.map((item, i) => <div key={i}>{ item.tab }</div>)}
        </div>
    )
}

export default Tabs