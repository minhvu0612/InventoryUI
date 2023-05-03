import React, { useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login'
import SignUp from './components/signup'
import Product from './layouts/product/dash'
import Sell from './layouts/sell/sell'

function App() {

  useEffect(() => {
    //localStorage.clear()
  }, [])

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              <b>Inventory Management</b>
            </Link>
            {
              !localStorage.getItem("username") ? (
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={'/login'}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/signup'}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>) : (
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={'/sell'}>
                        Sell
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/report'}>
                        Report
                      </Link>
                    </li>
                  </ul>
                  <div style={{display: "flex", marginLeft: 800 + "px", marginTop: 10 + "px"}}>
                    <Link to={'/user'}>{localStorage.getItem("username")}</Link>
                    <p style={{marginLeft: 20 +"px", cursor: "pointer"}} onClick={() => localStorage.clear()}>Logout</p>
                  </div>
                </div>
              )
            }
          </div>
        </nav>

        <div className="auth-wrapper">
          {
            localStorage.getItem("username") ? (
              <div style={{backgroundColor: "white"}}>
                <Routes>
                  <Route exact path="/" element={localStorage.getItem("username") ? <Product />:<Login />} />
                  <Route exact path="/sell" element={localStorage.getItem("username") ? <Sell />:<Login />} />
                </Routes>
              </div>
            ):(
              <div className="auth-inner">
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                </Routes>
              </div>
            )
          }
        </div>
      </div>
    </Router>
  )
}

export default App
