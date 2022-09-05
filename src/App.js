import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Navbar } from './Components/Header/Navbar'

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  )
}

export default App;
  