import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Layout/Meals/Meals";
import CartProvider from "./store/CartProvider";

const App = () => {
    const [showCart, setShowCart] = useState(false);

    function showCartHandler() {
        setShowCart(true);
    }

    function hideCartHandler() {
        setShowCart(false);
    }

    return (
        <CartProvider>
            {showCart && <Cart onHideCart={hideCartHandler} />}

            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
