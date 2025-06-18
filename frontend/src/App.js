// import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from "./Pages/Home"
import ProductDetails from './Pages/ProductDetails';
import Shop from "./Pages/Shop"
import Login from "./Pages/Login"
import Register from "./Pages/Register"

const App = () => {

  
  return (
    <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ProductDetails" element={<ProductDetails />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="Login" element={<Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />

        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
   
    </BrowserRouter>
  );
}

export default App
