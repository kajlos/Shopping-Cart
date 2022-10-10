import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Cart from './components/Cart';
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const addToCart = product => {
    let exist = cart.find(x => x.id === product.id);
    if (exist) {
      setCart(
        cart.map(x => (x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x))
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = product => {
    if (product.quantity === 1) {
      let newCart = cart.filter(x => x.id !== product.id);
      setCart(newCart);
    } else {
      setCart(
        cart.map(x => (x.id === product.id ? { ...product, quantity: product.quantity - 1 } : x))
      );
    }
  };
  return (
    <>
      <Navbar setIsCartOpen={setIsCartOpen} cart={cart} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products addToCart={addToCart} />}></Route>
      </Routes>
      {isCartOpen && (
        <Cart
          setIsCartOpen={setIsCartOpen}
          isCartOpen={isCartOpen}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      )}
    </>
  );
}

export default App;
