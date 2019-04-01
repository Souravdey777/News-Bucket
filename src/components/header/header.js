import React, { Component } from 'react';
import ClassNames from './header.module.css';
import logo from '../../assets/images/SummarizeLogo.png';
import SearchingInput from './searchingInput/searchingInput';
import MenuLogo from './menulogo/menulogo';
class Header extends Component {

    render() {
        
        return (
            <header className={ClassNames.header}>
                <img className={ClassNames.image} src={logo} alt = 'Summarize'/>
                <div className={ClassNames.logoname}>SUMMARIZE</div>
                <SearchingInput value={this.props.value} handleChange={this.props.handleChange}/>
                <MenuLogo/>
            </header>
        );
    }
}

export default Header;
