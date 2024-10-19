// src/components/NavBar.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import './NavBar.css';

const NavBar = ({ cartCount }) => { 
  const navigate = useNavigate(); 

  const goToCart = () => {
    navigate('/cart'); 
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo Section */}
        <div className="navbar-logo">
          <NavLink to="/">
            <img src="https://s3-alpha-sig.figma.com/img/7220/1328/eefc66cd70960daab6449206c3540858?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZj9rZ8pk0DIPcS2gKzcDeslH6xchJ--XbU~C~owkS5n12psMSHEc5JLnmtBqZj7Vn~PDRKvvfd3LMAAqOLeS8rUSTIaBpqfw1IH~RarF6TEPIpWDQcLG4mPhvhaGl52L0aF7TV5uyRtFDsS3r0eqIy6sM8vBwxGiPHU0NUoV9ryEbIuJz4StnWANiDRBUP5-niwgRODOkPjFHOLb-2mnal4LB9Gz104NjhXPLD4qI-l79aNCrAfVhZAMCsyksp6liOQ5gM1cl-KIp2J0o6gs6SOhmmHmrjz25yGvb9mNGsWoUxa25a6sLeVS4mYChjxGFOL0rsZ-GZ663dYfGLLNg__" 
            alt="Logo" className="logo" 
            />
          </NavLink>
          <p>Chaperone</p>
        </div>

        {/* Pages Section */}
        <div className="navbar-pages">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/plants-pots" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>
            Plants & Pots
          </NavLink>
          <NavLink to="/tools" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>
            Tools
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>
            Our Services
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>
            Blog
          </NavLink>
          <NavLink to="/our-story" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>
            Our Story
          </NavLink>
          <NavLink to="/faqs" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>
            FAQs
          </NavLink>
        </div>

        {/* Profile and Cart Buttons */}
        <div className="navbar-buttons">
          <div className='profile-container'>
            <img 
                className='my-profile-image'
                src = "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Free-Download.png"
                alt = "my profile img"
            />
            <p>MyProfile</p>
          </div>
          <div onClick={goToCart} className='cart-img-container'>
            <img 
                className='cart-image'
                src = "https://icons.iconarchive.com/icons/iconsmind/outline/512/Shopping-Cart-icon.png"
                alt = "cart img"
            />
            <p>Cart</p>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default NavBar;
