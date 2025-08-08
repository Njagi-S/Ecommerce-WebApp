// CartPage.jsx
import React, { useState } from 'react';
import CartItem from '../components/CartItem.jsx';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

function CartPage({ cart, addToCart, decreaseFromCart, removeItemCompletely, clearCart }) {
  const [showClearModal, setShowClearModal] = useState(false);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">🛒 My Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-muted fs-5">Your cart is currently empty.</p>
      ) : (
        <>
          <Row className="justify-content-center">
            {cart.map((item) => (
              <Col xs={12} md={10} lg={8} className="mb-4" key={item.id}>
                <CartItem
                  item={item}
                  addToCart={addToCart}
                  decreaseFromCart={decreaseFromCart}
                  removeItemCompletely={removeItemCompletely}
                />
              </Col>
            ))}
          </Row>

          {/* Clear Cart Button */}
          <div className="text-center mt-4">
            <Button variant="danger" onClick={() => setShowClearModal(true)}>
              <i className="bi bi-trash-fill me-2"></i>Clear Entire Cart
            </Button>
          </div>
        </>
      )}

      {/* 🔒 Modal Confirmation for Clearing Cart */}
      <Modal show={showClearModal} onHide={() => setShowClearModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Clear Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to clear all items from your cart?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowClearModal(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              clearCart();
              setShowClearModal(false);
            }}
          >
            Clear Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default CartPage;
