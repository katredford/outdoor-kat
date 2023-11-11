import { useState, Fragment } from 'react'

import qs from 'qs';
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Main from "./components/main/Main"
import DisplayCard from './components/displayCards/DisplayCards'
import Details from './components/Details/Details';
import data from "./utils/cards.json"



function App() {
  console.log("app data", data[0].id)

  // const apiUrl = 'https://localhost:1337/api/blogs?populate=*';
  // const queryParameters = {
  //   category: 'images',
  //   limit: 10,
  //   page: 1,
  // };

  // const queryString = qs.stringify(apiUrl);
  // const requestUrl = `${apiUrl}?${queryString}`;



  // function fetchTest() {
  //   fetch(apiUrl)
  //     .then((response) => {
  //     return response.json()
  //     }).then((data) => {
  //     console.log(data)
  //   })
  // }
  // fetchTest()
    // < a href = "https://lh3.googleusercontent.com/drive-viewer/AK7aPaANGa6pBmMSAdcTiI6FllxsoCQHlyPUqZ1WPILyfKJ1-FZlpsJEf0yidUEGA6-ualEt5VTLTVq8WW8qBscByCuNIBQIxg=s1600?source=screenshot.guru" > <img src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaANGa6pBmMSAdcTiI6FllxsoCQHlyPUqZ1WPILyfKJ1-FZlpsJEf0yidUEGA6-ualEt5VTLTVq8WW8qBscByCuNIBQIxg=s1600" /> </a >

  return (
    <>
      <BrowserRouter>
        <div className='app'>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/archive">Archive</Link>
              </li>
              {/* <li>
                <Link to="/">Home</Link>
              </li> */}
            </ul>
          </nav>
          

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
