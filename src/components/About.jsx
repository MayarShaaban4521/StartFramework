import React from 'react'
import '../global.css'
export default function About() {
  return (
    <header className="home d-flex align-items-center justify-content-center text-white text-center">
          <div className="container">
            <h1 className="text-uppercase fw-bold">ABOUT COMPONENT</h1>
    
            <div className="line-star my-3">
              <i className="fas fa-star"></i>
            </div>

            <div className='container'>
              <div className='row d-flex justify-content-center'>
                <div className='col-md-4'>
                  <p className='text-start mb-5'>
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                  </p>
                </div>
                <div className='col-md-4'>
                  <p className='text-start'>
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                  </p>
                </div>

              </div>

            </div>
    
          </div>
        </header>
  )
}
