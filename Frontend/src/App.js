import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ProductListing from "./Container/ProductListing";
import ProductDetails from "./Container/ProductDetails";
import Header from './Container/Header';
import Loginpage from "./Container/Loginpage";
import SignUp from './Container/SignUp';
// import Forgetpassword from './Container/Forgetpassword'
import './App.css';

function AppContent() {
  const location = useLocation();
    const showHeader = location.pathname !== '/' && location.pathname !== '/signup';
  
  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/Home" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path='/forget' element={<Forgetpassword/>}/> */}
        <Route path="*" element={<div>404 Not Found!</div>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
