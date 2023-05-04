import React, { useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login'
import SignUp from './components/signup'
import Product from './layouts/product/dash'
import Sell from './layouts/sell/sell'
import AddProduct from './layouts/product/add'
import AddReport from './layouts/report/add'
import Setting from './layouts/user/setting'
import { get_product } from './services/user'
import EditProduct from './layouts/product/edit'

function App() {

  const [data, setData] = React.useState([])

  useEffect(() => {
    async function fetch(){
      await get_product().then(
        (res) => {
          setData(res.data["product"])
          console.log(res.data["product"])
        }
      ).catch((error) => console.log(error))
    }
    fetch()
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
                      <Link className="nav-link" to={'/add-report'}>
                        Report
                      </Link>
                    </li>
                  </ul>
                  <div style={{display: "flex", marginLeft: 800 + "px", marginTop: 10 + "px"}}>
                    <Link to={'/setting'}>{localStorage.getItem("username")}</Link>
                    <div style={{marginLeft: 20 +"px", cursor: "pointer"}} onClick={() => {localStorage.clear(); window.location.href = "/"}}>Logout</div>
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
                  <Route exact path="/" element={<Product />} />
                  <Route exact path="/sell" element={<Sell />} />
                  <Route exact path="/add-product" element={<AddProduct />} />
                  <Route exact path="/add-report" element={<AddReport />} />
                  <Route exact path="/setting" element={<Setting />} />
                  {
                    data ? (
                      data.map(e => <Route exact path={"/edit-product/" + e.id}  element={<EditProduct val={e} />} />)
                    ):null
                  }
                </Routes>
              </div>
            ):(
              <div className="auth-inner">
                <Routes>
                  <Route path="/" element={<Login />} />
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
