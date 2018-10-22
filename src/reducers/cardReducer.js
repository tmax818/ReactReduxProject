import { FETCH_CARDS } from '../actions';

const cardReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARDS:
      return state.concat(action.payload.data);
    default:
      return state;
  }
};

export default cardReducer;
