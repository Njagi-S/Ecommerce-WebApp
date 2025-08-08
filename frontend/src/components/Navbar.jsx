import React from 'react';
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHome, FaBoxOpen, FaUser } from "react-icons/fa"; // Import icons

const Navbar = ({ cart }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-4'>
      <div className="container-fluid">
        {/* Brand */}
        <Link className='navbar-brand' to="/">TECHSHOP</Link>

        {/* Toggle Button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Nav Items */}
        <div className='collapse navbar-collapse' id="mynav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Home */}
            <li className='nav-item'>
              <Link className="nav-link d-flex align-items-center" to="/">
                <FaHome className="me-1" /> Home
              </Link>
            </li>

            {/* Products */}
            <li className='nav-item'>
              <Link className="nav-link d-flex align-items-center" to="/products">
                <FaBoxOpen className="me-1" /> Products
              </Link>
            </li>

            {/* Cart with Icon and Counter */}
            <li className="nav-item position-relative">
              <Link className="nav-link d-flex align-items-center" to="/cart">
                <FaShoppingCart size={18} className="me-1" />
                Cart

                {/* Total quantity counter */}
                {cart.length > 0 && (
                  <span className="badge bg-danger ms-2 rounded-pill position-absolute top-0 start-100 translate-middle">
                    {
                      cart.reduce((total, item) => total + item.quantity, 0)
                    }
                  </span>
                )}
              </Link>
            </li>

            {/* Profile */}
            <li className='nav-item'>
              <Link className="nav-link d-flex align-items-center" to="#">
                <FaUser className="me-1" /> Profile
              </Link>
            </li>
          </ul>

          {/* Login & Register Buttons */}
          <div className="d-flex ms-lg-3 mt-3 mt-lg-0">
            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/register" className="btn btn-light">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

