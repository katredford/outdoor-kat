import { useState } from "react"
import CardLeft from "../CardLeft"
import CardRight from "../CardRight"
import data from "./cards.json"
import { useEffect } from "react"

export default function DisplayCard() {
  const [newCard, setNewCard] = useState([])

  useEffect(() => {
    // setNewCard([])
    const cards = data.map((card, i) => {

      if (i % 2 === 0) {
        return (

          <CardLeft
            key={data[i]}
            {...card}
          />
        )
      }

      if (i % 2 === 1) {
        return (

          <CardRight
            key={data[i]}
            {...card}
          />
        )
      }
    })
    setNewCard(cards)
  }, [])
  
  return (
    <>
      <div>
        {newCard}
      </div>
    </>
  )
}