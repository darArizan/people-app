
import { Header } from '../../components/Header/Header'
import { Search } from "../../components/Search/Search";
import { UserList } from '../../components/UserList/UserList';
import React, { useState, useEffect } from 'react'


const Blog = () => {
    // state = {
    //     inputValue: '',
    //     users: [],
    //     filteredUsers: [],
    //     male: null,
    //     female: null,
    //     gridView: false,

    // }
    const [inputValue, setInputValue] = useState('')
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [male, setMale] = useState(null)
    const [female, setFemale] = useState(null)
    const [gridView, setGridView] = useState(false)


    const countGender = users => {
        const male = users.filter(user => user.gender === 'male').length

        const female = users.filter(user => user.gender === 'female').length

        setMale(male)
        setFemale(female)
    }


    // componentDidMount = () => {
    //     this.getData()
    // }
    useEffect(() => {
        getData()
    }, [])

    // componentWillUpdate = (nextProps, nextState) => {
    //   {
    //         const filterUsers = this.state.users.filter(user => (
    //             user.name.first.includes(nextState.inputValue)
    //         ))


    //             setFilteredUsers(filterUsers)

    //     }
    // }//funkcinalno

    useEffect(() => {
        const filterUsers = users.filter(user => {
            user.name.first.includes(inputValue)
        })
        setFilteredUsers(filterUsers)
    }, [inputValue])

    const getData = () => {
        fetch('https://randomuser.me/api/?results=15')
            .then(data => data.json())
            .then(results => {

                setUsers(results.results)
                setFilteredUsers(results.results)
                countGender(results.results);
            })



    }

    const onUserSearch = (data) => {

        setInputValue(data)
    }

    const layoutChange = () => {

        setGridView(!gridView)
    }

    return (
        <div>
            <Header onReload={() => getData()}
                onLayoutChange={() => layoutChange()} />
            <Search onSearch={onUserSearch} male={male} female={female} />
            <UserList filteredUsers={filteredUsers} />
        </div >
    );

}

export { Blog };