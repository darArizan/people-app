import React, { Component } from 'react';
import { Header } from '../../components/Header/Header'
import { Search } from "../../components/Search/Search";
import { UserList } from '../../components/UserList/UserList';


class Blog extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
                <UserList />
            </div>
        );
    }
}

export { Blog };