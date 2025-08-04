import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Navbar from './components/Navbar';
import { ProductData } from './data/ProductData';
import './assets/static/css/App.css';

function App() {
  // State to hold items in the shopping cart
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div>
        {/* Navigation bar is always visible */}
        <Navbar />

        {/* Routing logic for pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products products={ProductData} addToCart={addToCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
