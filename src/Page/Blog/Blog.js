import React, { Component } from 'react';
import { Header } from '../../components/Header/Header'
import { Search } from "../../components/Search/Search";
import { UserList } from '../../components/UserList/UserList';


class Blog extends Component {
    state = {
        inputValue: '',
        users: [],
        filteredUsers: [],
        gender: null,

    }


    countGender = users => {
        const male = users.filter(user => user.gender === 'male').length
        const female = users.filter(user => user.gender === 'female').length
        console.log(male, female)
        this.setState({
            gender: {
                male: male,
                female: female
            }
        })
    }


    componentDidMount = () => {
        this.getData()
    }

    componentWillUpdate = (nextProps, nextState) => {
        if (nextState.inputValue !== this.state.inputValue) {
            const filterUsers = this.state.users.filter(user => (
                user.name.first.includes(nextState.inputValue)
            ))

            this.setState({
                filteredUsers: filterUsers
            })
        }
    }

    getData = () => {
        fetch('https://randomuser.me/api/?results=15')
            .then(data => data.json())
            .then(results => {
                this.setState({
                    users: results.results,
                    filteredUsers: results.results
                })
                this.countGender(results.results);
            })
    }

    onUserSearch = (data) => {
        this.setState({
            inputValue: data
        })
    }

    render() {
        return (
            <div>
                <Header onReload />
                <Search onSearch={this.onUserSearch} gender={this.state.gender} />
                <UserList filteredUsers={this.state.filteredUsers} />
            </div>
        );
    }
}

export { Blog };