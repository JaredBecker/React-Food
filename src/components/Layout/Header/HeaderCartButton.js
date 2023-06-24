import React, { useContext } from 'react';

import CartContext from '../../../store/CartContext';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../../Cart/CartIcon'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((acc, el) => {
        return acc += el.amount
    }, 0);

    return (
        <button type="button" className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton

