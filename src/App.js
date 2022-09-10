import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from './Components/Header/Navbar';
import { ItemListContainer } from './Components/Main/ItemListContainer';

const App = () => {
  return (
    <>
    <ChakraProvider>
      <Navbar />
      <ItemListContainer saludo="Bienvenido/a a la tienda" />
    </ChakraProvider>
    </>
  )
}

export default App;
  