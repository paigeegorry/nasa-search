import React, { useState } from 'react';

export default function Input() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <form>
      <input type="text" value={searchValue} onChange={({ target }) => setSearchValue(target.value)} />
    </form>
  )
}
