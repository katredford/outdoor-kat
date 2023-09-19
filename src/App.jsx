import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardLeft from './components/CardLeft'
import CardRight from './components/CardRight'
import DisplayCard from './components/displayCards/DisplayCards'

function App() {
 

  return (
    <>
      {/* <CardLeft />
      <CardRight /> */}
      <DisplayCard />
    </>
  )
}

export default App
