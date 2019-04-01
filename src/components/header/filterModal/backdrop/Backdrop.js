import React from 'react';
import Classnames from './Backdrop.module.css';

const Backdrop = (props) =>{
    return(props.show ? <div onClick={props.clicked} className={Classnames.Backdrop}></div> : null);}
export default Backdrop;