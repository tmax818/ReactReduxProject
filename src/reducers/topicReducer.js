const topicReducer = (state = ['hello'], action) => {
  switch (action.type) {
    case 'CREATE_TOPIC':
      return state.concat(action.topic);
    default:
      return state;
  }
};

export default topicReducer;
