import {Link} from 'react-router-dom'
import "./nav.css"
import "../../fonts/Lilita_One/LilitaOne-Regular.ttf"
import "../../fonts/Bungee/Bungee-Regular.ttf"

export default function Nav() {

  return (
    <header>
      <Link to="/" className='link'>
        <h1 className='title'>Outdoor Kat</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/archive">Archive</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  )
}