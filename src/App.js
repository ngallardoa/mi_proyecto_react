import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from './Components/Header/Navbar';
import { ItemListContainer } from './Components/Main/ItemListContainer';
import { ItemDetailContainer } from "./Components/Main/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer saludo="Bienvenido/a a la tienda" />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer saludo="Bienvenido/a a la tienda" />} />
            <Route path="/categoria/:categoria/products/:id" element={<ItemDetailContainer saludo="Bienvenido/a a la tienda" />} />
            <Route path="/products/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App;
  