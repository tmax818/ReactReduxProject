import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const configureStore = initalState => {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export default configureStore;
