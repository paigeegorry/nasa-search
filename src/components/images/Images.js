import React from 'react';
import { useSelector } from 'react-redux';

export default function Images() {
  const photos = useSelector(state => state);
  const photoList = photos.map((photo, i) => {
    return (
      <img src={photo.links[0].href} alt={photo.data[0].title} key={i} />
    )
  });

  return (
    <>
    {photoList}
    </>
  );
}
