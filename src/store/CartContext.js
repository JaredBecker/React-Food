import { createContext } from 'react'

// Create a context with default values
const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {
        console.log('add something')
    },
    removeItem: (id) => {
        console.log('remove something')
    }
})

export default CartContext;
