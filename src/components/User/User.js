import React from 'react';
import './User.css'

const User = (props) => {
    return (
        <li className={`${props.data.gender === 'female' ? 'female' : ''}`}>
            <img className='photo'src={props.data.picture.thumbnail} />
            <div className='wrap'>
                <span>User name: {props.data.name.first}</span>
                <span>Email: {props.data.email}</span>

                <span>{props.data.dob.date}</span>
            </div>

        </li>
    );
}

export { User };