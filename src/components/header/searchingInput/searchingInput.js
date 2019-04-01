import React from 'react';
import Classnames from './searchingInput.module.css';

const SearchingInput = (props) =>

    <div className={Classnames.SearchingInput}>
        <input value={props.value} onChange={props.handleChange} className={Classnames.textbox} maxLength="2048" type="text" autoCapitalize="off" autoComplete="off" autoCorrect="off" spellCheck="false" title="Search" placeholder="Search" />
    </div>
export default SearchingInput;