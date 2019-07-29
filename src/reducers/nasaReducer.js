const initialState = {};
export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    
    case 'FETCH_PHOTOS':
      return {...state, payload};

    default:
      return state;
  }
}
