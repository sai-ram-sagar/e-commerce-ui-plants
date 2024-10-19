import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className='free-shipping'>
        <p>Free Shipping on orders above 999/-</p>
      </div>
      <div className='call-us'>
        <p>Call us on: +91 9876805120</p>
      </div>
    </header>
  );
};

export default Header;
