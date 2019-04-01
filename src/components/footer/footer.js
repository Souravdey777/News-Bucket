import React, { Component } from 'react';
import ClassNames from './footer.module.css';
import githublogo from '../../assets/images/githublogo.png';

class Footer extends Component {

    render() {

        return (
            <footer className={ClassNames.footer}>
                <div className={ClassNames.name}>SUMMARIZE : THE NEWS WEBSITE</div>
                <a  target='_blank' href='https://github.com/Souravdey777/News-Bucket/tree/master'
                 style={{ textDecoration: 'none', color: 'black' }}>
                    <div className={ClassNames.githublink}>
                        <img className={ClassNames.githublogo} src={githublogo} alt="Source code" />
                    </div>
                </a>
                <div>
                    <div className={ClassNames.text}>Developed by <a href='#' >Sourav Dey</a></div>
                    <div className={ClassNames.text}>Powered by <a target='_blank' href='https://newsapi.org/' >Newsapi.org</a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;
