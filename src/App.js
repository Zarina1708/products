import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navibar from './components/Navibar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import Product from "./components/Product";



function App() {

  return (
    <>
      <BrowserRouter>
        <Navibar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/products/:id' element={<ProductsPage/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
