import { CREATE_TOPIC, FETCH_TOPICS, POST_TOPIC } from '../actions';

const topicReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_TOPIC:
      return state.concat(action.topic);
    case FETCH_TOPICS:
      return state.concat(action.payload.data);
    case POST_TOPIC:
      console.log(action);
      return state.concat(action.payload.data);
    default:
      return state;
  }
};

export default topicReducer;
