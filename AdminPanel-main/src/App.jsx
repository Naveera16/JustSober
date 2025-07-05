import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./Pages/Main";
// Pages

import ProductList from "./Pages/ProductList";
import Welcome from "./Pages/Welcome";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<MainPage />}>
         
        
        
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/welcome" element={<Welcome />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;