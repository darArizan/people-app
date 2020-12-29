import React from 'react';
import './UserList.css'
import { User } from '../User/User'

const UserList = (props) => {

    const rendUsers = () => {
        return (
            <div>
                <ul className={`${props.gridView ? 'gridView' : ''}`}>
                    {props.filteredUsers.map(data => <User data={data} />)}
                </ul>
            </div>
        )

    }




    return (
        <div>
            {rendUsers()}
        </div>
    );
}


export { UserList };