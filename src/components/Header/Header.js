import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (

            <header>
                <span>BIT People</span>
                <span>About</span>
                <span><i class="fas fa-redo-alt"></i></span>
                <span>g</span>
            </header>

        );
    }
}

export { Header };