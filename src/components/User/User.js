import React, { Component } from 'react';
import './User.css'

class User extends Component {
    render() {
        return (
            <li>
                <img src={this.props.data.picture.thumbnail} />
                <div className='wrap'>
                    <span>User name: {this.props.data.name.first}</span>
                    <span>Email: {this.props.data.email}</span>
                </div>
                <span>{this.props.data.dob.date}</span>

            </li>
        );
    }
}

export { User };