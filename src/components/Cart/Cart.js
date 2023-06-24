import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';

import classes from './Cart.module.css';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const cartItems = cartCtx.items.map(item => (
        <CartItem
            key={item.id + '_cart-item'}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
        >{item.name}</CartItem>
    ));
    const totalAmount = `R ${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    function cartItemRemoveHandler(id) {
        cartCtx.removeItem(id);
    }

    function cartItemAddHandler(item) {
        cartCtx.addItem({ ...item, amount: 1 });
    }

    return (
        <Modal onHideCart={props.onHideCart}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount:</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;
