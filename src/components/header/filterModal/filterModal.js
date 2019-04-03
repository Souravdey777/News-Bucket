import React from 'react';
import Classnames from './filterModal.module.css';
import Backdrop from './backdrop/Backdrop';

const FilterModal = props => {

    return (
        <div>
            <div className={Classnames.modal}>
                <div className={Classnames.custom_dropdown}>
                    <select name="Category" id="Category"
                        value={props.selectedValue}
                        onChange={props.handleChange}>
                        <option value="business">business</option>
                        <option value="entertainment">entertainment</option>
                        <option value="general">general</option>
                        <option value="health">health</option>
                        <option value="science">science</option>
                        <option value="sports">sports</option>
                        <option value="technology">technology</option>
                    </select>
                </div>
                <div className={Classnames.custom_dropdown}>
                    <select name="Country" id="Country"
                        value={props.selectedValueCountry}
                        onChange={props.handleChangeCountry}>
                        <option value="in">India</option>
                        <option value="us">USA</option>
                    </select>
                </div>
            </div>
            <Backdrop clicked={props.backdropClicked} show={props.show} />
        </div>
    )
}

export default FilterModal;