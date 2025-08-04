// src/components/ProductCard.jsx
// This reusable component displays a single product's image, description, and Add to Cart button.

import React from 'react';

// Destructure props: product and the function to handle add to cart
function ProductCard({ product, addToCart }) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="product-card h-100 d-flex flex-column">
        {/* Product image */}
        <img src={product.image} className="card-img-top product-image" alt={product.name}/>

        <div className="card-body d-flex flex-column">
          {/* Product name */}
          <h5 className="card-title text-center">{product.name}</h5>

          {/* Product description */}
          <p className="card-text description text-center">{product.description}</p>

          {/* Product price */}
          <p className="card-text fw-bold text-success text-center">
            Ksh {product.price.toLocaleString()}
          </p>

          {/* Spacer to push button to the bottom */}
          <div className="flex-grow-1"></div>

          {/* Add to Cart button */}
          <button className="btn btn-primary w-100 mt-2" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
