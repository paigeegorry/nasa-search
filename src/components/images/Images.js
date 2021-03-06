import React from 'react';
import { useSelector } from 'react-redux';
import { ImageCard } from './Image'
import './css/index.scss'

export default function Images() {
  const photos = useSelector(state => state.items);
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
