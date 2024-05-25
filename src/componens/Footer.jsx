import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import "./image.css"


export default function Footer() {
  return (


    <>
      <div className='w-full bg-black text-white mt-12 '>
        <div className='grid grid-col-2 md: grid-cols-4 py-10 pl-6'>
          <div>
            <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Yummy Food</h2>
            <p className='text-[20px] text-[grey]'> 2023 Bundle technologies Pvt.ltd</p>
          </div>
          <div>
            <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Company</h2>
            <p className='text-[20px] mb-2 text-[grey]'>About</p>
            <p  className='text-[20px] mb-2 text-[grey]'>Carrer </p>
            <p className='text-[20px] mb-2 text-[grey]'>Team</p>
            <p className='text-[20px] mb-2 text-[grey]'>Swiggy One</p>
            <p className='text-[20px] mb-2 text-[grey]'>Swiggy Instamart</p>
            <p className='text-[20px] mb-2 text-[grey]'>Swiggy Genie</p>
          </div>

          <div>
            <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Contact us</h2>
            <p className='text-[20px] mb-2 text-[grey]'>Help & Support</p>
            <p  className='text-[20px] mb-2 text-[grey]'>Partner with us</p>
            <p className='text-[20px] mb-2 text-[grey]'>Ride with us</p>

            <h2 className='font-bold mb-3 text-[20px] md:text-[25px] mt-11'>Legal</h2>
            <p className='text-[20px] mb-2 text-[grey]'>Term & Condition</p>
            <p className='text-[20px] mb-2 text-[grey]'>Cookies Policy</p>
            <p className='text-[20px] mb-2 text-[grey]'>Privacy Policy</p>
          </div>
          <div>
            <h2 className='font-bold mb-3 text-[20px] md:text-[25px] flex'>  <FaLocationDot size={30}/>We Deliever To:</h2>
            <p className='text-[20px] mb-2 text-[grey]'>Pakistan</p>
            <p  className='text-[20px] mb-2 text-[grey]'>China</p>
            <p className='text-[20px] mb-2 text-[grey]'>India</p>
            <p className='text-[20px] mb-2 text-[grey]'>Dera Ghazi khan</p>
            <p className='text-[20px] mb-2 text-[grey]'>Canada </p>
            <p className='text-[20px] mb-2 text-[grey]'>Canada</p>
          </div>
        </div>
      
      </div>
    </>
  
  )
}
