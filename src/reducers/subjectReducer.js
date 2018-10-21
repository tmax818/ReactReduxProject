import { FETCH_SUBJECTS } from '../actions';

const subjectReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUBJECTS:
      return state.concat(action.payload.data);
    default:
      return state;
  }
};

export default subjectReducer;
