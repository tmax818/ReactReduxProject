const topicReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_TOPIC':
      return console.log('hi');
    default:
      return state;
  }
};

export default topicReducer;
