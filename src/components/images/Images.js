import React from 'react';
import { useSelector } from 'react-redux';
import {ImageCard} from '../image/Image'
import './index.scss'

export default function Images() {
  const photos = useSelector(state => state);
  const photoList = photos.map((photo, i) => {
    return (
      <ImageCard photo={photo} key={i}/>
    )
  });

  return (
    <div className="photo-grid">
    {photoList}
    </div>
  );
}
