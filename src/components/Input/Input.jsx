import React, { useState } from 'react'

export default function Input({type,lable,id}) {


 const [inputvalue,setinputvalue] = useState("")
 console.log(inputvalue);
 

  return (
    <div>
      <div className='d-flex flex-column align-items-start my-4'>
        <lable className={`${inputvalue==""?"move-lable":""} transition`} htmlFor={id}>{lable} :</lable>
        <input onChange={(e)=>setinputvalue(e.target.value)} placeholder={lable} type={type} id={id} className='w-100 z-3'/>
      </div>
    </div>
  )
}
