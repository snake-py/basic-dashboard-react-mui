import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './static/scss/index.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import { loadApp } from './loadApp';
import CssBaseline from '@mui/material/CssBaseline';

loadApp();
console.log('store: ', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {store.getState().app.ready ? (
          <>
            <CssBaseline />
            <App />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
