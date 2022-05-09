import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
import App from './App'
import Fullpage from './Fullpage'
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <div id='header'><Header/></div> */}
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
