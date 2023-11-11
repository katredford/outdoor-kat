

export default function CardRight(props) {
  return(
  <>
      <div className="card" key={props.id}>
        <div className="fake-image"></div>
        <h1>{props.text}</h1>
      
  </div>
    </>
  )
}