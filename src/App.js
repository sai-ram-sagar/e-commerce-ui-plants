import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard';
import AddToCartModal from './components/AddToCartModal';
// import Pagination from './components/Pagination';
import ThankYou from './components/ThankYou';
import productsData from './products.json';
import './App.css';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import Nursery from './components/Nursery';

const App = () => {
  const [cart, setCart] = useState([]);
  // const [currentPage, setCurrentPage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData); // Initialize with all products
  }, []);

  const addToCart = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const confirmAddToCart = () => {
    setCart([...cart, selectedProduct]);
    setModalOpen(false);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredProducts(products); // Show all products if search is empty
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <Router>
      <Header />
      <NavBar onSearch={handleSearch} /> {/* Search bar included in NavBar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/plants-pots"
          element={
            <>
              {/* Search Section */}
              <div className="search-bar">
                <img
                  className='search-icon'
                  src="https://s3-alpha-sig.figma.com/img/eebd/9688/ace63522134bd2b91cd3d5fa1d0270b2?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLrIRhMN1mdqidp9alCxTglzpBQscpbYS~fM5Bxoafssj3TlL-5e0nwC-XuctvnspAjsl0PuJnkEEKwQrm4lIsQ5UJdaDJs-cTbUPL8y2mWStlLBeDtwhpmorPyfoLGyOhi8O8A1WNjsyHpg0SXLgMyIBBiKToVDvLsbNDiSQxZifh~aKL-t-hlM0Oyiof9tr-9frE4vrH35kQneKfZ46E9iwMSb5MVs5O6BAePEAJTewJvMxUMCzc0y2SubxeKh1CWjRmpR5RSFgJNLb8Brjfwi4IkFldyk1BIR2kj2oiZgjQYJzcaX4os7f1d3MVDYJljBU3ZRBqkH4CYafWkepA__"
                  alt="search icon"
                />

                <input
                  type="text"
                  placeholder="Search plant"
                  className="search-input"
                />
                <img 
                  className='leaf-icon'
                  src="https://s3-alpha-sig.figma.com/img/3a30/d80e/594c268f203b8704f61985100fae62d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECIAJtsSLBVXgl2YF31TxKtq5s0LuX-WtEAzq6FqsAwtmZqiS-DsBkPIwI7mmd0ENoIRLeFKfIjRs5lPiIOarypWJhPEpdI2MHEdJkN1xO7rPxfi6Fivh6LStPxif7cKgwH6k8~PerjWx0Mh5He89Sd3dhBBzSoVHJbRu3RrNjEiGdnLBB7zqjdkw-G736mL7wI656dFi0pWcNGgWTzpC8Gx8DZC4Xf34jdHqhDOfR4kbBMTDGR6JUiDdCwChwHow27J6anCaHgCGyxB2hSvt1vhj2sGVI2cstk7qHKKBVKVoJwELI3jKy9S17QquNjtZWTSwgOnlOFdC1vmzV3X6w__" 
                  alt="leaf png"
                />
              </div>
              <div className="info-text">
                <div className='plants-pots-btn'>
                  <button className="plants-btn">Plants</button>
                  <button className="pots-btn">Pots</button>
                </div>
                <h2>Explore Our Wide Range of Plants & Pots</h2>
                <p >
                  "Welcome to our online nursery, where you can discover a vibrant collection of plants to beautify your home and garden. From lush indoor plants to thriving outdoor varieties, we offer a wide range of options to suit every space and style. Our plants are carefully nurtured to ensure they arrive healthy and ready to grow. Whether you're a seasoned gardener or just starting, we're here to help you bring nature into your life with ease. Explore our selection and let your green journey begin!"
                </p>
              </div>
              <Nursery />
              <div className='products-container'>
                <div>
                  <ul className='filter-list'>
                    <li className='list-item'><span>Filter</span> <span>CLEAR ALL</span></li>
                    <hr/>
                    <li className='list-item'><span>Types of PLant</span> <span>+</span></li>
                    <hr/>
                    <li className='list-item'><span>Price</span> <span>+</span></li>
                    <hr/>
                    <li className='list-item'><span>Nursery</span> <span>+</span></li>
                    <hr/>
                    <li className='list-item'><span>Ideal Plant Loction</span> <span>+</span></li>
                    <hr/>
                    <li className='list-item'><span>Indoor/ Outdoor</span> <span>+</span></li>
                    <hr/>
                    <li className='list-item'><span>Maintenance</span> <span>+</span></li>
                    <hr/>
                    <li className='list-item'><span>Plant Size</span> <span>+</span></li>
                    <hr/>
                    <li className='list-item'><span>Water Schedule</span> <span>+</span></li>
                    <hr/>
                    <li className='list-item'><span>Color</span> <span>+</span></li>
                    <hr/>
                    <li className='list-item'><span>Seasonal</span> <span>+</span></li>
                    <hr/>
                    <li className='list-item'><span>Light Efficient</span> <span>+</span></li>
                  </ul>
                </div>
                
                <div className="product-list">
                  <div className='sorting'>
                    <p >300 Products</p>
                    <button>SORT BY</button>
                  </div>
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      addToCart={addToCart}
                    />
                  ))}
                  
                </div>
              </div>
              <button className='view-more-btn'>View More</button>
              
              {/* <Pagination
                totalPages={3}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              /> */}

              <Footer />

              <AddToCartModal
                product={selectedProduct}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                confirmAddToCart={confirmAddToCart}
              />
            </>
          }
        />
        <Route path="/thankyou/:productName" element={<ThankYou />} />
        <Route path="/cart" element={<CartPage />} />

      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="home-content">
      <h1>Welcome to Our Plant Store!</h1>
      <p>Explore our range of plants, tools, and more.</p>
    </div>
  );
};

export default App;
