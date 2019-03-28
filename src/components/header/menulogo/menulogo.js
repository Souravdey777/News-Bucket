import React from 'react';
import Classnames from './menulogo.module.css';

class MenuLogo extends React.Component {

    render() {
        return (
            <div className={Classnames.rows}>
                <div>
                    <div className={Classnames.circle1}/>
                    <div className={Classnames.circle1}/>
                    <div className={Classnames.circle1}/>
                </div>
                <div>
                    <div className={Classnames.circle1}/>
                    <div className={Classnames.circle1}/>
                    <div className={Classnames.circle1}/>
                </div>
                <div>
                    <div className={Classnames.circle2}/>
                    <div className={Classnames.circle2}/>
                    <div className={Classnames.circle2}/>
                </div>
            </div>
        )
    }
}

export default MenuLogo;