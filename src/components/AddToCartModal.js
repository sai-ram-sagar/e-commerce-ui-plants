import React from 'react';
import './AddToCartModal.css';

const AddToCartModal = ({ product, isOpen, onClose, confirmAddToCart }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span> {/* Close button */}
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>₹{product.discountedprice}</p>
        <button onClick={confirmAddToCart}>Confirm</button>
      </div>
    </div>
  );
};

export default AddToCartModal;
