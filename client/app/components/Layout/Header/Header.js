import React from 'react';
import ReactDOM from 'react-dom';

require('./Header.scss')

class Header extends React.Component {
    render() {
        return ( 
            <div className='header'>
                <div className='header__wrapper'>
                    <h1 classNanme='header__wrapper__text'>
                        Quilombo driven development blog! 
                    </h1>
                </div>
            </div>
        );
    }
}
export default Header;
