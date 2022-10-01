import React from 'react';
import Head from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      
     <title>JS Mastery Store</title>
    
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children? 'hello' :'jj'}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout