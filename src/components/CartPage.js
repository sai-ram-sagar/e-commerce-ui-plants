import React from 'react';
import './CartPage.css'

const CartPage = () => {
    return (
        <div>
            <div className='cart-container'>
                <p className='close'>x</p>
                <h1 className='your-cart'>Your Cart</h1>
                <hr/>
                <div className='congrats'>
                    <p>Congratulations</p>
                    <p>Order Placed!</p>
                </div>
                <img 
                    className='plant-png' 
                    src="https://s3-alpha-sig.figma.com/img/da30/c60d/14d6293522911d4a2548b9b1cf65a33a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZgKKIrx1v2QUz4fX2mBvb3nPC3aOp2RcHYU7~TgXtlP4G4lDYmL0xuOY7DKJKdhum-USfGEqnBwhWQZ1nqspzsS8tmvwwkqXSHQoA7p3jz5L1sVJfMMbHBBLleqQpbQbNwTLtaEuEnYK5~sLf~p-nuYM8RLyt5KvfMwFOgM~UylWTzJOSmInN47VMWplVhiGENFa3Bl8MtN6A6cosEVsCZF~oosEu4IYdGCxnl69-nex04r6gR3ZoReAVb4ND0084qLGAwKXwNRfJPlT8MlEC1s2CZJArhC6Tw3CKWGQ2wz0Fr9y6xQlBLFXrKTrbMaXcgJps09Yvxi9EZ4zPgKRqg__" 
                    alt="plant png"
                />
                <div className='thankyou'>
                    <p>Thank you for choosing Chaperone services.</p>
                    <p>We will soon get in touch with you!</p>
                </div>
                <button className='shopping-btn'>
                    CONTINUE SHOPPING
                </button>
            </div>
        </div>
    );
};

export default CartPage;
