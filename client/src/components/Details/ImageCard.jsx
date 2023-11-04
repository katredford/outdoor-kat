import "./details.css"

export default function ImageCard(props) {
  // console.log("imagecard", props.items)
  return (
    <figure className="imageCard">
      {/* <h1>image card</h1> */}
      <img className="imageCard--image" src={props.items.link} />
      <figcaption className="imageCard--caption">{props.items.caption}</figcaption>
    </figure>
  )
}