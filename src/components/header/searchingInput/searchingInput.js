import React from 'react';
import Classnames from './searchingInput.module.css';
import searchIcon from '../../../assets/images/searchicon.png';

const SearchingInput = (props) =>

    <div className={Classnames.SearchingInput}>
        <input value={props.value} onChange={props.handleChange} className={Classnames.textbox} maxLength="2048" type="text" autoCapitalize="off" autoComplete="off" autoCorrect="off" spellCheck="false" title="Search" placeholder="Search" />
        <img onClick={props.clicked} src={searchIcon} className={Classnames.searchlogo} alt='' />
    </div>
export default SearchingInput;