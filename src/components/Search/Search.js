import React, { Component } from 'react';
import './Search.css'

class Search extends Component {

    getValue = (event) => {
        let value = event.target.value
        this.props.onSearch(value)
    }

    render() {
        return (
            <div>
                <span><i class="fas fa-search"></i></span>


                <input placeholder='Search users' onChange={this.getValue} type='search'></input>
                <div className='gender'>
                    <span>Male: {this.props.male}</span>
                    <span>Female:{this.props.female}
                    </span>
                </div>
            </div >
        );
    }
}

export { Search };