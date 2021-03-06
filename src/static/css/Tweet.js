import React from 'react'


function Tweet({name, message, party}) {

    return (
        <div className='tweet'>
            <h1>{name} </h1>
            <h3>{message}</h3>
            <h4>{party}</h4>
            {/* <h2>{mobile}</h2> */}
        </div>
    )
}
export default Tweet