import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

export default function Header() {
  const [menu,setmenu] = useState(false);
  console.log(menu);
  return (
    <div className='flex justify-between py-[15px] px-[25px] text-[18px] items-center font-semibold drop-shadow-sm border-b'>
        <div>
      <p>Yummy<span className='text-[#fbc511]'>Food</span></p>
      </div>

      <div>
        <ul className='sm:flex gap-4 hidden cursor-pointer'>
         <Link to={'/'}><li className='hover:text-[#bdbd62]'>Home</li></Link> 
         <Link to={'/About'}><li className='hover:text-[#bdbd62]'>About us</li></Link> 

           <Link to={'/Menu'}><li className='hover:text-[#bdbd62]'>Order Now</li></Link>
          <Link to={'/Offer'}><li className='hover:text-[#bdbd62]'>Our Food</li></Link>
           <Link to ={'./Form'}><li className='hover:text-[#bdbd62]'>Sign IN</li></Link>
        </ul>
      </div>
      {menu? 
<div className='bg-[#f5f6fa] text-center w-[300px] absolute top-0 right-0 h-[100vh] flex items-center justify-center'>
        <ul className='flex gap-12 cursor-pointer flex-col '>
        <RxCross1  className='absolute top-3 right-3' onClick={()=>setmenu(!menu)}/>
            <li className='hover:text-[#bdbd62]'>Home</li>
            <li className='hover:text-[#bdbd62]' >About us</li>
            <li className='hover:text-[#bdbd62]'>Offers</li>
            <li className='hover:text-[#bdbd62]'>Page</li>
            <li className='hover:text-[#bdbd62]'>Sign IN</li>
        </ul>
      </div> : ""
      }
      <div className='flex gap-6'>
        <p><MdOutlineMenu size={"25px"} className='cursor-pointer block sm:hidden'
        onClick={()=>setmenu(!menu)}
        />
        
        </p>
        <p><FaCartShopping  size={"25px"} className='cursor-pointer'/></p>
      </div>
    </div>
  )
}




// <div className='bg-[#f5f6fa] text-center w-[300px] absolute top-0 right-0 h-[100vh] flex items-center justify-center'>
//         <ul className='sm:flex gap-12 cursor-pointer flex-col '>
//         <RxCross1  className='absolute top-3 right-3'/>
//             <li className='hover:text-[#bdbd62]'>Home</li>
//             <li className='hover:text-[#bdbd62]' >About us</li>
//             <li className='hover:text-[#bdbd62]'>Offers</li>
//             <li className='hover:text-[#bdbd62]'>Page</li>
//             <li className='hover:text-[#bdbd62]'>Sign IN</li>
//         </ul>
//       </div>