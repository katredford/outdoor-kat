import { useState, useEffect } from "react"
import CardLeft from "../CardLeft"
import data from "../../utils/cards.json"
import "./displayCards.css"

export default function DisplayCard() {
  const [newCard, setNewCard] = useState([])

  useEffect(() => {
    // setNewCard([])
    const cards = data.map((card, i) => {
      // let id = i
      // console.log("display Cards id", card.id)
      return (
            
            <CardLeft
          key={card.id}
              {...card}
            />
          )
    })
    setNewCard(cards)
  }, [])
  
  return (
    <>
      
      <div className="picture-grid">
        {newCard}
      </div>
    </>
  )
}