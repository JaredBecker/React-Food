import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

/*
    This is the function that handles the state updates in the app.
    It's outside the component because it doesn't need any information
    that is only available inside the component. Putting it outside
    saves some performance as it is not part of what needs to be
    re-rendered each time a change is detected
*/
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const item = action.item;
        const updatedTotalAmount = state.totalAmount + (item.price * item.amount);

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            }

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
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
