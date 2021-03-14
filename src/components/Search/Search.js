import React from 'react';
import './Search.css'

const Search = (props) => {
    

    const  getValue= searchRes => {
        let value = searchRes
    
   
   
        props.onSearch(value)
      
       
    }

    return (
        <div>
            <span><i class="fas fa-search"></i></span>


            <input placeholder='Search users' onChange={(e)=>getValue(e.target.value)} type='search' ></input>
            <div className='gender'>
                <span className='genderName'>Male: {props.male}</span>
                <span className='genderName'>Female:{props.female}
                </span>
            </div>
        </div >
    );
}


export { Search };