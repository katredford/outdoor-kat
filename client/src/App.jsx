import { useState, Fragment } from 'react'

import qs from 'qs';
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Main from "./components/main/Main"
import DisplayCard from './components/displayCards/DisplayCards'
import Details from './components/Details/Details';
import Nav from "./components/Nav/index"
import data from "./utils/cards.json"



function App() {
  console.log("app data", data[0].id)


  return (
    <>
      <BrowserRouter>
        <div className='app'>
        <Nav />
        
          

          <Routes>
            {/* <Fragment className="picture-grid"> */}
            <Route path="/" element={<Main />} />
            {/* </Fragment> */}
            <Route path="/details/:id" element={<Details />} />
            <Route path='/archive' element={<DisplayCard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
