import React from 'react';
import Classnames from './searchingInput.module.css';


const SearchingInput = () =>

    <div className={Classnames.SearchingInput}>
        <input className={Classnames.textbox} maxLength="2048" type="text" autoCapitalize="off" autoComplete="off" autoCorrect="off" spellCheck="false" title="Search" placeholder="Search" />
        <img src=' ' className={Classnames.searchlogo} alt="" />
    </div>
export default SearchingInput;