import React, { Component } from 'react';
import ClassNames from './header.module.css';
import SearchBar from 'material-ui-search-bar';
class Header extends Component {
    render() {
        return (
            <header className={ClassNames.header}>

                <SearchBar
                    onChange={() => console.log('onChange')}
                    onRequestSearch={() => console.log('onRequestSearch')}
                    style={{
                        margin: '0 auto',
                        maxWidth: 800
                    }}
                />
            </header>
        );
    }
}

export default Header;
