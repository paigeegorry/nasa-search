const initialState = [];
export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    
    case 'FETCH_PHOTOS':
      return payload;

    default:
      return state;
  }
}
