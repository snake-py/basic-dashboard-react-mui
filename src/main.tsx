import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './static/scss/index.scss';
import { Provider } from 'react-redux';
import { store } from './state';
import { loadApp } from './loadApp';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';

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
          <div className="loader">
            <CircularProgress />
          </div>
        )}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
