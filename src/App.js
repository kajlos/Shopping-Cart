import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Cart from './components/Cart';
import { CartContext } from './Contexts/CartContext';
function App() {
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
      {isCartOpen && <Cart />}
    </>
  );
}

export default App;
