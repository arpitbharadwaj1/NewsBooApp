import React from 'react'
import loading from '../assets/loader.gif'

const Spinner = () => {

    return (
        <div className='text-center'>
            <img src={loading} alt='loading'></img>
        </div>
    )
}

export default Spinner;

