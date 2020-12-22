import React, { Component } from 'react';
import './UserList.css'
import { User } from '../User/User'

class UserList extends Component {

    state = {
        users: []
    }

    componentDidMount = () => {
        fetch('https://randomuser.me/api/?results=15')
            .then(data => data.json())
            .then(results => {
                this.setState({
                    users: results.results
                })
            })

    }

    rendUsers = () => {
        return (
            <div>
                <ul>
                    {this.state.users.map(data => <User data={data} />)}
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