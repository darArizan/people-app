import React from 'react';
import './User.css'

const User = (props) => {
    return (
        <li className={`${props.data.gender === 'female' ? 'female' : 'male'}`}>
            <img className='photo'src={props.data.picture.large} />
            <div className='wrap'>
                <span className='info'>User name: {props.data.name.first}</span>
                <span className='info'>Email: {props.data.email}</span>

                <span className='info'>{`${new Date(props.data.dob.date).toDateString()}`}</span>
            </div>

        </li>
    );
}

export { User };