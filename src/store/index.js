import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import throttle from 'lodash/throttle';
import rootReducer from '../reducers';
import { loadState, saveState } from './localStorage';

const middlewares = [
  thunkMiddleware,
  createLogger()
]
const persistedState = loadState();

export default function configStore () {
  const store = createStore(rootReducer, persistedState, applyMiddleware(...middlewares));
  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));
  return store
}
