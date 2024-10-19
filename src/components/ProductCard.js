import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/thankyou/${product.name}`);
  };

  return (
    <div className="product-card">
      <div className='image-card'>
        <img className='product-image' src={product.image} alt={product.name} />
        <button className='view-product-btn' onClick={handleViewProduct}>View Product</button>
        <img className='like-btn' src="https://icon-library.com/images/heart-icon-svg/heart-icon-svg-29.jpg" alt="like btn"/>
      </div>
      <div className='product-description'>
        <h3>{product.name}</h3>
        <p >Indoor plant, Low Maintainence</p>
        <div className='rating-section'>
            <div>
                <img className='rating-star-img' src={product.star} alt="rating"/>
                <img className='rating-star-img' src={product.star} alt="rating"/>
                <img className='rating-star-img' src={product.star} alt="rating"/>
                <img className='rating-star-img' src={product.star} alt="rating"/>
                <img className='rating-star-img' src={product.star} alt="rating"/>
            </div>
            <div>
                <p className='rating'>{product.rating}</p>
            </div>
        </div>
        <div className='price-section'>
            <p className='original-price'>₹{product.price}</p>
            <p className='discounted-price'>₹{product.discountedprice}</p>
        </div>
        <div className="buttons">
            <div>
                <button className='addtocart-btn' onClick={() => addToCart(product)}>-  Add to Cart  +</button>
            </div>
            <div>
                <button className='buyonrent-btn' >Buy on Rent</button>
            </div>
        </div>  
      </div>  
      
    </div>
  );
};

export default ProductCard;
