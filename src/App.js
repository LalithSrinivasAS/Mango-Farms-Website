import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ProductPage from "./Pages/ProductPage";
import BlogPage from "./Pages/BlogPage";
import TermsAndConditions from "./Components/Terms";
import Disclaimer from "./Components/Disclaimer";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Ship from "./Components/Ship";
import Privacy from "./Components/Privacy";
import LoginPage from "./Pages/LoginPage";
import Cart from "./Components/cart";
import GalleryPage from "./Pages/GalleryPaje";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ShippingAddressPage from "./Pages/ShippingAddressPage";
import { color } from "@chakra-ui/react";
function App() {
  return (
    <div>
    <BrowserRouter >
    <Header/>
      <Routes> 
        <Route index element={<HomePage/>}/>
        <Route path ="/About" element={<AboutPage/>}/>
        <Route path ="/Contact" element={<ContactPage/>}/>
        <Route path ="/Products" element={<ProductPage/>}/>
        <Route path ="/Blog" element={<BlogPage/>}/>
        <Route path ="/Terms" element={<TermsAndConditions/>}/>
        <Route path ="/Disclaimer" element={<Disclaimer/>}/>
        <Route path ="/Ship" element={<Ship/>}/>
        <Route path ="/Privacy" element={<Privacy/>}/>
        <Route path ="/Login" element={<LoginPage/>}/>
        <Route path ="/Cart" element={<Cart/>}/>
        <Route path ="/Gallery" element={<GalleryPage/>}/>
        <Route path ="/ProductDetail" element={<ProductDetailPage/>}/>
        <Route path ="/ShippingAddress" element={<ShippingAddressPage/>}/>
      </Routes>
     
      </BrowserRouter>
     <Footer/>
    </div>
  )
  
}

export default App;