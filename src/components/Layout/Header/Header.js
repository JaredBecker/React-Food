import React from 'react';

import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';
import img from '../../../assets/meals.jpg';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={img} alt="Food on a table" />
            </div>
        </>
    )
}

export default Header;
