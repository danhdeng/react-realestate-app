import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
  return (
    <>
      <Head>Real Estate</Head>
      <Box maxWidth="1280px" m="auto">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};
