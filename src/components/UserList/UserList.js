import React, { Component } from 'react';
import './UserList.css'
import { User } from '../User/User'

class UserList extends Component {

    rendUsers = () => {
        return (
            <div>
                <ul className={`${this.props.gridView ? 'gridView' : ''}`}>
                    {this.props.filteredUsers.map(data => <User data={data} />)}
                </ul>
            </div>
        )

    }


    render() {

        return (
            <>
                { this.rendUsers()}
            </>
        );
    }
}

export { UserList };