import React from 'react'
import '../global.css'
import Input from './input/input'

export default function Contact() {
  return (
   <div className="container my-5 text-center">
      <h1 className="text-uppercase fw-bold text-center address">
        contact section
      </h1>
      <div className="line-star-p my-3 text-center">
        <i className="fas fa-star"></i>
      </div>

    <div className='w-50 mx-auto'>
      <Input type={"text"} lable={"Name"} id={"name"}/>
      <Input type={"text"} lable={"Age"} id={"age"}/>
      <Input type={"email"} lable={"Email"} id={"email"}/>
      <Input type={"password"} lable={"Password"} id={"password"}/>

    </div>
    <button className='rounded-3 mt-4'>Send Message</button>
    </div>
  )
}
