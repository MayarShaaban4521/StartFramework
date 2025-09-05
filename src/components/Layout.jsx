import React from 'react'
import '../global.css'
import { NavLink, Link, Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  navbar-dark fixed-top py-3 " style={{ backgroundColor: '#2c3e50' }}>
        <div className="container">
          <Link className="navbar-brand fw-bold text-uppercase fs-4" to={"/"}>
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="mainNavbar">
            <ul className="navbar-nav ms-auto  text-uppercase fw-bold">
              <li className="nav-item ">
                <NavLink className="nav-link px-3 text-white " to={"/about"}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-3 text-white" to={"/portfolio"}>Portfolio</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link px-3 text-white" to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="pt-5 mt-4">
        <Outlet />
      </div>


      <footer className="footer text-white text-center pt-5 " style={{ backgroundColor: '#2c3e50' }}>
  <div className="container">
    <div className="row gy-4">


      <div className="col-md-4 p-3">
        <h4 className="text-uppercase fw-bold mb-3">Location</h4>
        <p className="mb-0">2215 John Daniel Drive</p>
        <p className="mb-0">Clark, MO 65243</p>
      </div>


      <div className="col-md-4 p-3">
        <h4 className="text-uppercase fw-bold mb-3">Around The Web</h4>
        <div className=' d-flex justify-content-center align-items-center  px-lg-5 px-3'>
          <div className='col-md-3 me-1'>
            <a href="#" className="btn btn-outline-light btn-social rounded-circle p-2">
             <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <div className='col-md-3 me-1'>
            <a href="#" className="btn btn-outline-light btn-social rounded-circle p-2">
             <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className='col-md-3 me-1'><a href="#" className="btn btn-outline-light btn-social rounded-circle p-2">
            <i className="fab fa-linkedin-in"></i>
          </a>
          </div>
          <div className='col-md-3'><a href="#" className="btn btn-outline-light btn-social rounded-circle p-2">
            <i className="fab fa-dribbble"></i>
          </a>
          </div>
        </div>
      </div>
      <div className="col-md-4 p-4 pt-3">
        <h4 className="text-uppercase fw-bold mb-3">About Freelancer</h4>
        <p className="mb-0">Freelancer is a free to use, MIT licensed Bootstrap theme created by Route.</p>
      </div>
    </div>
  </div>

  <div className="bg-dark text-center py-4 mt-5 mb-0">
    <p className="mb-0 text-white">Copyright © 2025 Start Framework</p>
  </div>
</footer>
    </>
  )
}
