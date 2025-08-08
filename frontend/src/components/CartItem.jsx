// CartItem.jsx
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function CartItem({ item, addToCart, decreaseFromCart, removeItemCompletely }) {
  const [showModal, setShowModal] = useState(false);

  const handleRemove = () => {
    removeItemCompletely(item.id);
    setShowModal(false);
  };

  return (
    <>
      <div className="card shadow-sm h-100">
        <div className="row g-0">
          {/* Left: Product Image */}
          <div className="col-md-4">
            <img
              src={item.image}
              alt={item.name}
              className="img-fluid rounded-start h-100"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Right: Product Info */}
          <div className="col-md-8">
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <div>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-success fw-semibold">Ksh {item.price}</p>
                <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                  {item.description}
                </p>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3">
                {/* Quantity controls */}
                <div className="btn-group" role="group">
                  <Button variant="outline-secondary" size="sm" onClick={() => decreaseFromCart(item.id)}>
                    <i className="bi bi-dash"></i>
                  </Button>
                  <Button variant="light" size="sm" disabled>
                    {item.quantity}
                  </Button>
                  <Button variant="outline-primary" size="sm" onClick={() => addToCart(item)}>
                    <i className="bi bi-plus"></i>
                  </Button>
                </div>

                {/* Remove item (with confirmation modal) */}
                <Button variant="outline-danger" size="sm" onClick={() => setShowModal(true)}>
                  <i className="bi bi-x-circle me-1"></i>Remove
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔒 Modal Confirmation for Removing Item */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Remove Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove <strong>{item.name}</strong> from your cart?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartItem;
