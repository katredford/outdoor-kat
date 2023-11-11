import { useState, useEffect } from "react"
import CardLeft from "../CardLeft"
import data from "../../utils/cards.json"
import "./displayCards.css"
import { Link, useLocation } from 'react-router-dom';

export default function DisplayCard() {
  const [newCard, setNewCard] = useState([])
  const currentPage = useLocation().pathname;

  useEffect(() => {
    // setNewCard([])
    const cards = data.map((card, i) => {
      // let id = i
      // console.log("display Cards id", card.id)
      return (
        // <Link key={i} to={`/details/${index}`}>
          <Link
            to={`/details/${card.id}`}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
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
        {newCard}
      </div>
    </>
  )
}