import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotosApi } from '../services/nasaFetch';
import { Button } from 'react-bootstrap';

export default function Keywords() {
  const dispatch = useDispatch();
  const keywords = useSelector(state => state.keywords);
  const arrOfKeywords = Object.entries(keywords).sort((a, b) => b[1]-a[1]);

  const listOfKeywords = arrOfKeywords.map(keyword => {
    return (
      <li>
        <Button onClick={() => dispatch({ type: 'FETCH_PHOTOS', payload: fetchPhotosApi(keyword[0]) })}>
          {keyword[0]}
        </Button>
      </li>
    )
  })
    return (
    <ul>
      {listOfKeywords.slice(0, 5)}
    </ul>
  )
}
