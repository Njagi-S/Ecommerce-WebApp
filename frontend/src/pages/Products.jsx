import React from 'react';
import ProductCard from '../components/ProductCard.jsx'; // Reusable card component

// Accept props: products array and addToCart function
function Products({ products, addToCart }) {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Products</h2>
      {/* Bootstrap responsive grid row */}
      <div className="row">
        {/* Map through each product and display using ProductCard */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;
