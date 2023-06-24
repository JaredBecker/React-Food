import React, { useContext, useEffect, useState } from 'react';

import CartContext from '../../../store/CartContext';
import CartIcon from '../../Cart/CartIcon'

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const numberOfCartItems = cartCtx.items.reduce((acc, el) => acc += el.amount, 0);
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setBtnIsHighlighted(true);
        const timer = setTimeout(() => setBtnIsHighlighted(false), 300);

        // Clean up function that will be run each time the component is re-rendered
        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return (
        <button type="button" className={btnClasses} onClick={props.onClick}>
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

