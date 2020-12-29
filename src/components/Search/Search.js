import React from 'react';
import './Search.css'

const Search = (props) => {

    const getValue = (event) => {
        let value = event.target.value
        props.onSearch(value)
    }

    return (
        <div>
            <span><i class="fas fa-search"></i></span>


            <input placeholder='Search users' onChange={() => getValue()} type='search'></input>
            <div className='gender'>
                <span>Male: {props.male}</span>
                <span>Female:{props.female}
                </span>
            </div>
        </div >
    );
}


export { Search };