import React from 'react';
import { useSelector } from 'react-redux';

export default function Images() {
  const photos = useSelector(state => state);
  console.log(photos[0]);
  const photoList = photos.map((photo, i) => {
    return (
      <img src={photo.links[0].href} alt="hello" key={i} />
    )
  });
  return (
    <>
    {photoList}
    </>
  );
}
