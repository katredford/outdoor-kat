import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off
// our variables from the props object
// We assign them to their own variable names

  

export default function CardLeft(props) {
  const currentPage = useLocation().pathname;
  // console.log(props.id)
  return (
    <div className='cardLeft'>
 {/* <Link
        to={`/details/${props.id}`}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
    > */}

   
    <div className="card" key={props.id}
          style={{ backgroundImage: `url(${props.image[0].link})`,  width: "400px", height: "300px"
}
}>
      <div className="card--text">
        <h1 className="card--margin">{props.title}</h1>
        <h3 className="card--margin">{props.date}</h3>
        {/* <p className="card--p card--margin">{props.text[0]}</p> */}
      </div>
      {/* <div >
        <img src={props.image} className="image"></img>
      </div> */}
        </div>
         {/* </Link> */}
    </div>
  )
}