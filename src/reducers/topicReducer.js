import { CREATE_TOPIC, FETCH_TOPICS } from '../actions';

const topicReducer = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case CREATE_TOPIC:
      return state.concat(action.topic);
    case FETCH_TOPICS:
      return state.concat(action.payload.data);
    default:
      return state;
  }
};

export default topicReducer;
