import React, { Component } from 'react';
import ClassNames from './header.module.css';
import logo from '../../assets/images/SummerizeLogo.png';
import SearchingInput from './searchingInput/searchingInput';
import MenuLogo from './menulogo/menulogo';
class Header extends Component {

    render() {
        return (
            <header className={ClassNames.header}>
                <img className={ClassNames.image} src={logo} alt = 'Summerize'/>
                <SearchingInput/>
                <MenuLogo/>
            </header>
        );
    }
}

export default Header;
