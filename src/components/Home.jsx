import React from 'react';
import '../global.css'
import avatar from '../assets/avatar.svg'; 

export default function Home() {
  return (
    <header className="home d-flex align-items-center justify-content-center text-white text-center">
      <div className="container">
        <img src={avatar} className="mb-4 avatar" alt="avatar" />
        <h1 className="text-uppercase fw-bold">Start Framework</h1>

        <div className="line-star my-3">
          <i className="fas fa-star"></i>
        </div>

        <p className="fs-5">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </header>
  );
}