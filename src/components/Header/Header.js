import React from 'react';
import './Header.css'

const Header = (props) => {

    return (

        <div className='header'>

            <span className='bit'>BIT People</span>
            <div className='change'>
                <span className='reload' onClick={props.onReload}> <i class="fas fa-redo"></i></span>
                <span className='grid' onClick={props.onLayoutChange} ><i class="fas fa-border-all"></i></span>
            </div>
        </div>

    );
}


export { Header };