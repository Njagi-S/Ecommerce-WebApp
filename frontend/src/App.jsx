// // App.jsx
// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home.jsx';
// import Products from './pages/Products.jsx';
// import Register from './pages/Register.jsx';
// import Login from './pages/Login.jsx';
// import ProductList from './components/ProductList.jsx';
// import ForgotPassword from './pages/ForgotPassword.jsx';
// import ResetPassword from './pages/ResetPassword.jsx';
// import CartPage from './pages/CartPage.jsx';
// import Navbar from './components/Navbar.jsx';
// import Footer from './components/Footer.jsx';
// import { ProductData } from './data/ProductData.js';

// // Toastify
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // CSS and Libraries
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import './assets/static/css/App.css';

// function App() {
//   const [cart, setCart] = useState([]);

//   // Load cart from localStorage on initial mount
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cartItems');
//     if (storedCart) setCart(JSON.parse(storedCart));
//   }, []);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cart));
//   }, [cart]);

//   // ✅ Add item to cart or increment its quantity
//   const addToCart = (product) => {
//     const existing = cart.find((item) => item.id === product.id);
//     if (existing) {
//       const updated = cart.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCart(updated);
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//     toast.success(`✔️ ${product.name} added to cart`);
//   };

//   // ✅ Decrease quantity or remove item if quantity = 1
//   const decreaseFromCart = (productId) => {
//     const item = cart.find((item) => item.id === productId);
//     if (!item) return;

//     if (item.quantity === 1) {
//       removeItemCompletely(productId);
//     } else {
//       const updated = cart.map((item) =>
//         item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
//       );
//       setCart(updated);
//     }
//   };

//   // ✅ Remove item from cart entirely
//   const removeItemCompletely = (productId) => {
//     const item = cart.find((item) => item.id === productId);
//     if (!item) return;
//     setCart(cart.filter((item) => item.id !== productId));
//     toast.info(`🗑️ ${item.name} removed from cart`);
//   };

//   // ✅ Clear entire cart
//   const clearCart = () => {
//     setCart([]);
//     toast.info('🧹 Cart cleared');
//   };

//   return (
//     <Router>
//       <Navbar cart={cart} />
//       <ToastContainer position="top-center" autoClose={1000} pauseOnHover={false} />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products products={ProductData} addToCart={addToCart} />} />
//         <Route path="productlist" element={<ProductList/>} />
//         <Route
//           path="/cart"
//           element={
//             <CartPage
//               cart={cart}
//               addToCart={addToCart}
//               decreaseFromCart={decreaseFromCart}
//               removeItemCompletely={removeItemCompletely}
//               clearCart={clearCart}
//             />
//           }
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import ProductList from './components/ProductList.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import CartPage from './pages/CartPage.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { ProductData } from './data/ProductData.js';

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// CSS and Libraries
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/static/css/App.css';
// import './index.css'; // Removed Tailwind CSS import

// A custom component to handle protected routes
const PrivateRoute = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

// This component contains the core application logic and state
const AppContent = () => {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    setIsLoggedIn(!!accessToken);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      const updated = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success(`✔️ ${product.name} added to cart`);
  };

  const decreaseFromCart = (productId) => {
    const item = cart.find((item) => item.id === productId);
    if (!item) return;

    if (item.quantity === 1) {
      removeItemCompletely(productId);
    } else {
      const updated = cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(updated);
    }
  };

  const removeItemCompletely = (productId) => {
    const item = cart.find((item) => item.id === productId);
    if (!item) return;
    setCart(cart.filter((item) => item.id !== productId));
    toast.info(`🗑️ ${item.name} removed from cart`);
  };

  const clearCart = () => {
    setCart([]);
    toast.info('🧹 Cart cleared');
  };

  return (
    <>
      <Navbar cart={cart} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <ToastContainer position="top-center" autoClose={1000} pauseOnHover={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={ProductData} addToCart={addToCart} />} />
        <Route path="productlist" element={<ProductList/>} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              addToCart={addToCart}
              decreaseFromCart={decreaseFromCart}
              removeItemCompletely={removeItemCompletely}
              clearCart={clearCart}
            />
          }
        />
        <Route path="/login" element={<Login onLoginSuccess={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        
        {/* Protected Routes */}
        <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/dashboard" element={<h2>User Dashboard</h2>} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

// The main App component now only contains the Router, which renders AppContent
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
