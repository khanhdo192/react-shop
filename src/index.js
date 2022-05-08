import 'boxicons/css/boxicons.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import { store } from './redux/store';
import './sass/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
