import React, { Component } from 'react';
import ClassNames from './header.module.css';
import logo from '../../assets/images/SummarizeLogo.png';
import SearchingInput from './searchingInput/searchingInput';
import FilterModal from './filterModal/filterModal';
import FilterModalMobile from './filterModalMobile/filterModalMobile';

let lastScrollY=0;

class Header extends Component {
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll); 
    }
    header = React.createRef();
    filter = React.createRef();
    filterMobile = React.createRef();
    handleResize = () => {
        if (window.innerWidth < 630) {
            this.filter.current.style.display = 'none';
            this.filterMobile.current.style.display = 'unset';
        }
        else {
            this.filter.current.style.display = 'unset';
            this.filterMobile.current.style.display = 'none';
        }
    }
    handleScroll = () => {
        lastScrollY = window.scrollY;
    
        if (lastScrollY > 50&&window.innerWidth < 630) {
            this.header.current.style.transform = "translateY(-110%)";
            this.header.current.style.opacity = "0";
          } 
        else {
            this.header.current.style.transform = "translateY(0%)";
            this.header.current.style.opacity ="1";
          }
      };

    render() {

        return (
                <header ref={this.header} className={ClassNames.header}>
                    <div className={ClassNames.topheader}>
                        <div className={ClassNames.logo}>
                            <img className={ClassNames.image} src={logo} alt='Summarize' />
                            <div className={ClassNames.logoname}>SUMMARIZE</div>
                        </div>
                        <SearchingInput value={this.props.value} handleChange={this.props.handleChange} />
                    
                    <div ref={this.filter}  className={ClassNames.topheaderFilter}>
                        <FilterModal
                            selectedValueCountry={this.props.selectedValueCountry}
                            handleChangeCountry={this.props.handleChangeCountry}
                            selectedValueCategory={this.props.selectedValueCategory}
                            handleChangeCategory={this.props.handleCategoryChange} />

                    </div>
                    </div>
                    <div ref={this.filterMobile} className={ClassNames.bottomheader}>
                        <FilterModalMobile
                            selectedValueCountry={this.props.selectedValueCountry}
                            handleChangeCountry={this.props.handleChangeCountry}
                            selectedValueCategory={this.props.selectedValueCategory}
                            handleChangeCategory={this.props.handleCategoryChange} />

                    </div>

                </header>
        );
    }
}

export default Header;
