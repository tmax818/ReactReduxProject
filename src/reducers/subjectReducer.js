import { FETCH_SUBJECTS, POST_SUBJECT } from '../actions';

const subjectReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUBJECTS:
      return state.concat(action.payload.data);
    case POST_SUBJECT:
      console.log(action);
      return state.concat(action.payload.data);
    default:
      return state;
  }
};

export default subjectReducer;
