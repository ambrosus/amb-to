/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/style.scss';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';
import stores from './app/store';
import {ModalProvider} from './app/utils/modalContext';

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <ModalProvider>
        <App/>
      </ModalProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
