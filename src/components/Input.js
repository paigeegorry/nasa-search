import React, { useState } from 'react';

export default function Input() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
    }}>
      <input type="text" value={searchValue} onChange={({ target }) => setSearchValue(target.value)} />
      <button>Search</button>
    </form>
  )
}
