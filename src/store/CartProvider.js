import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

/*
    This is the function that handles the state updates in the app.
    It's outside the component because it doesn't need any information
    that is only available inside the component
*/
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const item = action.item;
        const updatedItems = state.items.concat(item);
        const updateTotalAmount = state.totalAmount + (item.price * item.amount);

        return {
            items: updatedItems,
            totalAmount: updateTotalAmount,
        }
    }

    return defaultCartState;
}

/*
Creating a component we can wrap other components in to make managing
this context easier as the values only need to be updated in 1 place.
*/
const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    function addItemToCartHandler(item) {
        dispatchCartAction({ type: 'ADD', item: item })
    }

    function removeItemToCartHandler(id) {
        dispatchCartAction({ type: 'REMOVE', id: id })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;
