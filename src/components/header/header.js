import React, { Component } from 'react';
import ClassNames from './header.module.css';
import logo from '../../assets/images/SummarizeLogo.png';
import SearchingInput from './searchingInput/searchingInput';
import MenuLogo from './menulogo/menulogo';
import FilterModal from './filterModal/filterModal';
class Header extends Component {
    state={
        show:false
    }
    handleShow=()=>{
        this.setState((prevState) => 
        ({ show: !prevState.show })
      )
    }
    
    render() {
        
        return (
            <div>
            <header className={ClassNames.header}>
                <img className={ClassNames.image} src={logo} alt = 'Summarize'/>
                <div className={ClassNames.logoname}>SUMMARIZE</div>
                <SearchingInput value={this.props.value} handleChange={this.props.handleChange}/>
                <div onClick={this.handleShow}><MenuLogo /></div>
            </header>
            {this.state.show?<FilterModal 
            selectedValueCountry={this.props.selectedValueCountry}
            handleChangeCountry={this.props.handleChangeCountry}
            selectedValue={this.props.selectedValue} 
            handleChange={this.props.handleDropdownChange} 
            show={this.state.show} 
            backdropClicked={this.handleShow}/>:null}
            </div>
        );
    }
}

export default Header;
