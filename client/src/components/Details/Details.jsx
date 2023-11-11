import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../utils/cards.json';
import './details.css';
import Paragraphs from './Paragraph';
import ImageCard from './ImageCard';

export default function Details() {
  const [post, setPost] = useState({});
  const [pic, setImage] = useState('');
  const [card, setCard] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const postId = parseInt(id, 10); // Convert id to integer
    const postData = data.find((item) => item.id === postId);

    if (postData) {
      const picto = postData.image[0].link;
      setImage(picto);

      const randomCard = randomPic(postData.image);
      setCard(randomCard);

      setPost(postData);
    }
  }, [id]);

  const randomPic = (randImg) => {
    const newRandomIndex = Math.floor(Math.random() * randImg.length);
    const newRandomCard = randImg[newRandomIndex];
    return newRandomCard;
  };

  return (
    <div
      className="details-body"
      style={{
        backgroundImage: `url(${card.link})`,
        width: '100%',
        height: '100%',
      }}
    >
      <div className="reality">
        <ImageCard className="imageCardRand" items={card} />
        <div className="content">
          <h1>{post.title}</h1>
          <h3>{post.date}</h3>
          <div className="group-para">
            {post.text?.map((text, i) => (
              <div key={i}>
                <Paragraphs items={text} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="picture-grid">
        {post.image?.map((img, i) => (
          <div key={i}>
            <ImageCard items={img} />
          </div>
        ))}
      </div>
    </div>
  );
}






