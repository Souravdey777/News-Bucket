import React from 'react';
import Classnames from './filterModalMobile.module.css';

const FilterModalMobile = props => {

    const Category = [
        {
            value: 'business',
            name: 'Business'
        },
        {
            value: 'entertainment',
            name: 'Entertainment'
        },
        {
            value: 'general',
            name: 'General'
        },
        {
            value: 'health',
            name: 'Health'
        },
        {
            value: 'science',
            name: 'Science'
        },
        {
            value: 'sports',
            name: 'Sports'
        },
        {
            value: 'technology',
            name: 'Technology'
        }
    ]
    const Country = [
        {
            value: 'in',
            name: 'India'
        },
        {
            value: 'us',
            name: 'Usa'
        },
        {
            value: 'au',
            name: 'Australia'
        },
        {
            value: 'ca',
            name: 'Canada'
        },
        {
            value: 'ch',
            name: 'China'
        }
    ]
    return (
        <div className={Classnames.filters}>
            <div className={Classnames.custom_dropdown}>
                <select name="Category" id="Category"
                    value={props.selectedValueCategory}
                    onChange={props.handleChangeCategory}>
                    {
                        Category.map(o =>
                            (<option key={o.value} value={o.value}>{o.name}</option>
                            ))
                    }
                </select>
            </div>
            <div className={Classnames.custom_dropdown}>
                <select name="Country" id="Country"
                    value={props.selectedValueCountry}
                    onChange={props.handleChangeCountry}>
                    {
                        Country.map(o =>
                            (<option key={o.value} value={o.value}>{o.name}</option>
                            ))
                    }
                </select>
            </div>
        </div>
    )
}

export default FilterModalMobile;