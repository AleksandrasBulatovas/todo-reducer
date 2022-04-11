import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import 'bootstrap/dist/css/bootstrap.css'
import {AppProvider} from "./context/TasksContext"


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
        <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


