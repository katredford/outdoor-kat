import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import data from '../../utils/cards.json'
import './details.css'
import Paragraphs from './Paragraph';
import ImageCard from './ImageCard';

export default function Details(props){
  const [post, setPost] = useState({});
  const [pic, setImage] = useState('');
  const [card, setCard] = useState({})
  const texts = post.text
  const images = post.image
 console.log("DATAILS",props.items)
  let picto;
  let newRandom;
  const { id } = useParams()
  
  let fromData;
  
  fromData = id ? fromData === props.items : fromData === id 
  
 
  
  const randomPic = (randImg) => {
    const newRandomIndex = Math.floor(Math.random() * randImg.length);
    const newRandomCard = randImg[newRandomIndex];
    // console.log("randomPic func", newRandomCard)
    return newRandomCard;
  }
 
  const getPost = (paramId) => {
    const id = paramId - 1;
    const postData = data[id];
    // console.log(postData)
    picto = postData.image[0].link;
    setImage(picto);

    const randomCard = randomPic(postData.image);
    setCard(randomCard);

    setPost(postData);
  }

  useEffect(() => {
    getPost(fromData);
  }, [fromData]);


  return (
   
    <div className="details-body" style={{
      backgroundImage: `url(${card.link})`, width: "100%", height: "100%"
    }}>
      {/* <Link to="/">home</Link> */}
      <div className='reality'>


    <ImageCard className="imageCardRand" items={card} />
        <div className='content'>
          <h1>{post.title}</h1>
          <h3>{post.date}</h3>
      <div className='group-para'>
        {
          texts?.map((text, i) => (
            <div key={i}>

              <Paragraphs items={text} />
            </div>
          ))
        }
      </div>
    </div>


      </div >
      <div className="picture-grid">
      {
          images?.map((img, i) => (
          <div key={i}>
            <ImageCard items={img} />
          </div>
        ))
      }
      </div>
     
    </div>
  )
}