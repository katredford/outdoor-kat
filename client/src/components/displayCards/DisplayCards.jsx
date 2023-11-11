import { useState, useEffect } from "react"
import CardLeft from "../CardLeft"
import data from "../../utils/cards.json"
import "./displayCards.css"
import { Link, useLocation } from 'react-router-dom';

export default function DisplayCard() {
  const [newCard, setNewCard] = useState([])
  const currentPage = useLocation().pathname;

  useEffect(() => {
    
    const cards = data.map((card, i) => {
   
      return (
      
          <Link
            to={`/details/${card.id}`}
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          key={card.id}
          >

            <CardLeft {...card} />
        </Link>
          )
    })
    setNewCard(cards)
  }, [currentPage])
  
  return (
    <>
      <div className="picture-grid">
        <h1>Archive</h1>
        
     
      <div className="picture-grid-details">
      {/* <h1>Archive</h1> */}
        {newCard}
        </div>
      </div>
    </>
  )
}