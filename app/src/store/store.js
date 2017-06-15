import { compose, createStore, applyMiddleware } from 'redux';
import asyncMiddleware from 'redux-thunk';
import requestsMiddleware from '../middlewares/requestsMiddleware';
import rootReducer from '../reducers';

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(asyncMiddleware, requestsMiddleware))(createStore);
const store = createStoreWithMiddleware(rootReducer);
export default store;
