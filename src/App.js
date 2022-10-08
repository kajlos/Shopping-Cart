import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Cart from './components/Cart';
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <Navbar setIsCartOpen={setIsCartOpen} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
      {isCartOpen ? <Cart setIsCartOpen={setIsCartOpen} /> : null}
    </>
  );
}

export default App;
