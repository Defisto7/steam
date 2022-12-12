import React from 'react'
import Navbar from './components/Navbar'
import Categories from './components/Categories';
import Recommended from './components/Recommended';
import SpecialOffers from './components/SpecialOffers';
import Browse from './components/Browse';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-[#1b2838] h-screen">
        <Navbar />
      <Categories />
      <Recommended /> 
      <SpecialOffers />
      <Browse/>
      <Footer/>
    </div>
  )
}

export default App