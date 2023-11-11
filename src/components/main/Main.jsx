import "./main.css"
import DisplayCard from '../displayCards/DisplayCards'
import Details from '../Details/Details';


export default function Main() {

  return (
    <>
      <main>
        <Details />
        <div className="main--pic-grid">
          <DisplayCard />
        </div>
        
      </main>

      
    </>
  )
}