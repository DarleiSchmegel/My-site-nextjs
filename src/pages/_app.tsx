import React from 'react';
import type { AppProps } from 'next/app';
import { ThemesProvider } from '../contexts/ThemeContext';
import { GlobalStyle } from '../styles/global';

import Footer from '../components/elements/Footer';
import Header from '../components/elements/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemesProvider>
      <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemesProvider>
    </>
  );
}

export default MyApp;
