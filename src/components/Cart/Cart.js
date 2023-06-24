import Modal from '../UI/Modal';

import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItems = [{
        id: 'c1',
        name: 'Burger',
        amount: 2,
        price: 94.95,
    }].map((item) => {
        return <li>{item.name}</li>
    });


    return (
        <Modal>
            <ul className={classes['cart-item']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount:</span>
                <span>R69.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;
