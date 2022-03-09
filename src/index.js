import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import 'boxicons/css/boxicons.min.css';
import './sass/index.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
