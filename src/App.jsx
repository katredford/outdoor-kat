import { useState, Fragment } from 'react'

import qs from 'qs';
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Main from "./components/main/Main"
import DisplayCard from './components/displayCards/DisplayCards'
import Details from './components/Details/Details';
import Nav from "./components/Nav/index"
import data from "./utils/cards.json"
import Hero from "./components/Hero/index"
import Footer from "./components/Footer/index"


function App() {
  console.log("app data", data[0].id)


  return (
    <>
      <BrowserRouter>
        <div className='app'>
        <Nav />
        <Hero />
          

          <Routes>
            
            <Route path="/" element={<Main />} />
           
            <Route path="/details/:id" element={<Details />} />
            <Route path='/archive' element={<DisplayCard />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
