import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './store/store'
import { Provider } from 'react-redux'
import SignIn from '../src/screen/SignIn'
import ProtectRoute from '../src/utils/ProtectRoutes'
import Home from '../src/screen/Home'
import Navbar from '../src/component/NavBar'
import 'semantic-ui-css/semantic.min.css'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectRoute redirectTo="/login"><Navbar /> <Home /></ProtectRoute>} />
        <Route path='/login' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
