import { createContext } from 'react'

// Create a context with default values
const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
})

export default CartContext;
