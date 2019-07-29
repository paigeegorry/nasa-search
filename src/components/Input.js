import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Button } from 'react-bootstrap';
import { fetchPhotosApi } from '../services/nasaFetch';

export default function Input() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      dispatch({ type: 'FETCH_PHOTOS', payload: fetchPhotosApi(searchValue) })
    }}>
      <input type="text" value={searchValue} onChange={({ target }) => setSearchValue(target.value)} />
      <button>Search</button>
    </form>
  )
}
