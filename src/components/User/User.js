import React, { Component } from 'react';
import './User.css'

class User extends Component {
    render() {
        return (
            <li className={`${this.props.data.gender === 'female' ? 'female' : ''}`}>
                <img src={this.props.data.picture.thumbnail} />
                <div className='wrap'>
                    <span>User name: {this.props.data.name.first}</span>
                    <span>Email: {this.props.data.email}</span>

                    <span>{this.props.data.dob.date}</span>
                </div>

            </li>
        );
    }
}

export { User };