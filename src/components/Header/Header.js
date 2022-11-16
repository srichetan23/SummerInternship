import React from 'react'
import Home from '../Home'
import Contact from '../Contact'
import Signin from '../Signin'
import Login from '../Login'
import { Route ,Routes,NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className=''>
        <div>
    <nav className="navbar navbar-expand-lg navbar-dark  p-2"> 
    <div className="container-fluid">
            
              <a className="navbar-brand " href="#">Internship</a>
  
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                          < label htmlFor="validationTooltip04" className="form-label p-2 text-light">State</label>
                            <select className="form-select" id="validationTooltip04" required>
                            <option selected disabled value="">Choose your city</option>
                           <option>HYDERABAD</option>
                            <option>CHENNAI</option>
                            <option>BANGLORE</option>
                            <option>MUMBAI</option>
                              <option>VIZAG</option>
                            </select>
                <div className="invalid-tooltip">
                    Please select a valid state.
                </div>
             </form>
    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav nav-tabs bg-warning ms-auto mb-2 mb-lg-0">
             <li className="nav-item">
                <NavLink className="nav-link text-dark home" to='/'>HOME</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" to='/Signin'>Sigin</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" to='/Login'>Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" to='/Contact'>Contact</NavLink>
            </li>
        </ul>
      </div>
    </div>
    </nav>
    </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signin' element={<Signin />} />
      </Routes>
    </div>
  )
}

export default Header