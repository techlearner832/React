import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlantList from './components/PlantList';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <h1>Online Plant Shop</h1>
          <Routes>
            <Route path="/" element={<PlantList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
