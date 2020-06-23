import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { Provider} from 'react-redux';
import {createStore,compose,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import burgerReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order'

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

const rootReducer=combineReducers(
  {
    burgerBuilder:burgerReducer,
    order:orderReducer
  }
)

const store=createStore(rootReducer
  ,composeEnhancers(applyMiddleware(thunk)));

const app =(
  <Provider store={store}>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
