import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from './Components/Header/Navbar';
import { ItemListContainer } from './Components/Main/ItemListContainer';
import { ItemDetailContainer } from "./Components/Main/ItemDetailContainer";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <ItemListContainer saludo="Bienvenido/a a la tienda" />
        <ItemDetailContainer />
      </ChakraProvider>
    </>
  )
}

export default App;
  