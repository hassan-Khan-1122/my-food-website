import React, { useCallback, useEffect, useState } from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import slide from './images/sliders.webp'
import slide2 from './images/new.webp'
import pizza from './images/pizza.jpg'
import pizza2 from './images/pizza2.avif'
import pizza3 from './images/healthy-food.webp'
import pizza4 from './images/hassan.jpg'
import pizza5 from './images/burger.jpg'
import "./image.css"

export default function Images() {

  const [slider,setslider] = useState(0)
  const data = [pizza,pizza2,pizza3,pizza4,pizza5]
 
  const handlerplus = ()=>{
    setslider( slider === data.length-1 ? 0: slider+1);
  }
  const handlermin = ()=>{
    setslider( slider === 0 ? data.length-1 :slider-1);
  }
  useEffect(()=>{
   const clear =  setInterval(()=>{
    handlerplus();
  },3000)

   return ()=> clearInterval(clear)
  },[slider])
  
  return (
    <>
    <div>
      <div className='w-[90%] mx-auto h-[80vh] mt-10  shadow-m '>
        {/* <p className='hassan'>Healthy Gourmet Plant-based<br/> Meals that Promote <br/>Longevity</p> */}
       <img src ={data[slider]}  width={"100%"} className='h-[80vh] rounded-2xl object-cover' />

       <div className='absolute flex top-[50%] text-[white] gap-[1080px]'>
      <FaAngleLeft  size={40}  className='cursor-pointer' onClick={handlerplus}/>
      <FaAngleRight size={40} className='cursor-pointer mx-auto' onClick={handlermin} />
      </div>
      </div>
      </div>
     
    
    </>
  )
}





// <div className='flex'>
// <FaAngleRight size={25}  className='cursor-pointer'/>
// <FaAngleLeft size={25}  className='cursor-pointer'/>
// </div>