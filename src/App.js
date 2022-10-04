import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from './Components/Header/Navbar';
import { ItemListContainer } from './Components/Main/ItemListContainer';
import { ItemDetailContainer } from "./Components/Main/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./Components/Cart";
import { CartContextProvider } from "../src/Context/cartContext.jsx";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <CartContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer saludo="Bienvenido/a a la tienda" />} />
              <Route path="/categoria/:categoria" element={<ItemListContainer saludo="Bienvenido/a a la tienda" />} />
              <Route path="/categoria/:categoria/products/:id" element={<ItemDetailContainer saludo="Bienvenido/a a la tienda" />} />
              <Route path="/products/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </CartContextProvider>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App;
  