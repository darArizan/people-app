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
                <span>d</span>


                <input onChange={this.getValue} type='search'></input>
                <div>
                    <span>Male: {this.props.gender.male}</span>
                    <span>Female:{this.props.gender.female}
                    </span>
                </div>
            </div>
        );
    }
}

export { Search };