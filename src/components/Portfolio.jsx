import React, { useState } from 'react'
import '../global.css'
import port1 from '../assets/poert1.png'; 
import port2 from '../assets/port2.png'; 
import port3 from '../assets/port3.png'; 


let allImages = [port1, port2, port3, port1, port2, port3];

export default function Portfolio() {
  const[model,setmodel] = useState(false)
  const[currentimg,setcurrentimg] = useState(null)


  function handlecloseImg(e) {
    console.log(e.target.tagName);
    
    if(e.target.tagName!="IMG"){
      setmodel(false)
    }
    
  }




  return (
    <div className="container my-5 text-center">
      <h1 className="text-uppercase fw-bold text-center address">
        portfolio COMPONENT
      </h1>
      <div className="line-star-p my-3 text-center">
        <i className="fas fa-star"></i>
      </div>

      <div className="row g-4">
        {allImages.map((item, index) => (
          <div onClick={()=>{setmodel(true),setcurrentimg(item)}}
            key={index}
            className="col-lg-4 col-md-6 col-sm-12 p-3"
          >
            <div className="box-img position-relative">
              <img
                src={item}
                className="port w-100 rounded-4"
                alt="portal"
              />
              <div className="layer rounded-4 d-flex justify-content-center align-items-center">
                <i className='fa-solid fa-plus fa-6x text-white '></i>
              </div>
            </div>
          </div>
        ))}
      </div>


      {model?<div onClick={(e)=>handlecloseImg(e)} className='position-fixed d-flex justify-content-center align-items-center top-0 start-0 bottom-0 end-0 bg-black bg-opacity-50'>
        <img src={currentimg} alt="" width={"40%"}/>

      </div>:""}
    </div>
    
  );
}
