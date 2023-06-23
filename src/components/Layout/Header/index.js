import React from 'react';

import classes from './Header.module.css';
import img from './../../../assets/meals.jpg';

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button type="button">Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={img} alt="Image of food on a table" />
            </div>
        </>
    )
}

export default Header;
