// import DisplayCard from "./displayCards/DisplayCards";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import "./main.css"
import DisplayCard from '../displayCards/DisplayCards'
import Details from '../Details/Details';

export default function Main() {

  return (
    <>
      <main>
        <Details items="1"/>
        <div className="main--pic-grid">
          <DisplayCard />
        </div>
        
      </main>

      
    </>
  )
}