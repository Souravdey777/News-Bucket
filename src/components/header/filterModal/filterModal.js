import React from 'react';
import Classnames from './filterModal.module.css';
import Backdrop from './backdrop/Backdrop';

const FilterModal = props => {
    return (
        
        <div>
            <div className={Classnames.modal}>   
                <div className={Classnames.more}>
                    filter
                </div>
            </div>
            <Backdrop clicked={props.backdropClicked} show={props.show} />
        </div>
    )
}

export default FilterModal;