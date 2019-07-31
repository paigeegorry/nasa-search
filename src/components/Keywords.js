import React from 'react';
import { useSelector } from 'react-redux';

export default function Keywords() {
  const keywords = useSelector(state => state.keywords);
  const yolo = Object.entries(keywords).sort((a, b) => b[1]-a[1]);

  const listOfKeywords = yolo.map(ele => {
    return (<li>

          {ele[0]}
          </li>)
  })
    return (
    <ul>
      {listOfKeywords.slice(0, 5)}

    </ul>
  )
}
