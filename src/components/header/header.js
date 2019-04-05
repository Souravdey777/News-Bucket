import React, { Component } from 'react';
import ClassNames from './header.module.css';
import logo from '../../assets/images/SummarizeLogo.png';
import SearchingInput from './searchingInput/searchingInput';
import FilterModal from './filterModal/filterModal';
class Header extends Component {
    state = {
        show: false
    }
    handleShow = () => {
        this.setState((prevState) =>
            ({ show: !prevState.show })
        )
    }

    render() {

        return (
            <div>
                <header className={ClassNames.header}>
                    <div className={ClassNames.logo}>
                        <img className={ClassNames.image} src={logo} alt='Summarize' />
                        <div className={ClassNames.logoname}>SUMMARIZE</div>
                    </div>
                    <SearchingInput value={this.props.value} handleChange={this.props.handleChange} />
                    <div onClick={this.handleShow}><FilterModal
                        selectedValueCountry={this.props.selectedValueCountry}
                        handleChangeCountry={this.props.handleChangeCountry}
                        selectedValueCategory={this.props.selectedValueCategory}
                        handleChangeCategory={this.props.handleCategoryChange} /></div>
                </header>
            </div>
        );
    }
}

export default Header;
