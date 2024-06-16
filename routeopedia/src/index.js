import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Home';
import About from './About'
import Product from './Pages/Product'
import ProductDetails from './Pages/ProductDetails'
import ProductList from './Pages/ProductList'
import CreateProduct from './Pages/CreateProduct'
import NotFound from "./NotFound"
import CryptoDetail from "./CryptoDetail"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/product'>
          <Route path='' element={<Product/>}/>
          <Route path='details/:id' element={<ProductDetails/>}/>
          <Route path='list' element={<ProductList/>}/>
          <Route path='create' element={<CreateProduct/>}/>
        </Route>

        <Route path='/cryptoDetail/:cripto/' element={<CryptoDetail/>}/>
        <Route path='/cryptoDetail/:cripto/:id' element={<CryptoDetail/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

