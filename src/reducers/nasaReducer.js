const initialState = {
  items: [],
  keywords: {}
};
export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case 'FETCH_PHOTOS':
      return {...state, items: payload.items, keywords: payload.keywords};
    default:
      return state;
  }
}
