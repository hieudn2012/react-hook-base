import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import './i18n';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import RouterConFig from './routers';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RouterConFig />
      </Router>
    </Provider>
  );
}

export default App;
