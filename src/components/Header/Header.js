import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (

            <header>

                <span className='bit'>BIT People</span>
                <div className='change'>
                    <span className='about'>About</span>
                    <span className='reload' onClick={this.props.onReload}> <i class="fas fa-redo"></i></span>
                    <span className='grid' onClick={this.props.onLayoutChange} ><i class="fas fa-border-all"></i></span>
                </div>
            </header>

        );
    }
}

export { Header };