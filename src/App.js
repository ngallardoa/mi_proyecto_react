import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from './Components/Header/Navbar';
import { ItemListContainer } from './Components/Main/ItemListContainer';
import { ItemDetailContainer } from "./Components/Main/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./Components/Cart";
import { CartContextProvider } from "../src/Context/cartContext.jsx";
import { CartCheckout } from './Components/CartCheckout';
import { SessionContextProvider } from './Context/sessionContext';
import { Register } from './Components/Register';
import { LogIn } from './Components/LogIn';
import { LogOut } from './Components/LogOut';

const App = () => {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <CartContextProvider>
            <SessionContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categoria/:categoria" element={<ItemListContainer />} />
              <Route path="/categoria/:categoria/products/:id" element={<ItemDetailContainer />} />
              <Route path="/products/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/CartCheckout" element={<CartCheckout />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/LogIn" element={<LogIn />} />
              <Route path="/" element={<LogOut />} />
            </Routes>
            </SessionContextProvider>
          </CartContextProvider>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App;
  