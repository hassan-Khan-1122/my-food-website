import React from 'react'
import pizza6 from './images/download.jpg'
import pizza7 from './images/ahsan.png'
import pizza8 from './images/hassan12.webp'


export default function Main() {
  return (
    <div className='w-full py-10 '>
       <div className= "">
        <h1  className='text-[#fbc531] font-bold text-4xl text-center'>Food Qelievery</h1>
        <div className='grid grid-cols-2 w-[80%] mx-auto my-5 gap-10'>
            <img src={pizza8} className='mt-10' />
            <div className='flex flex-col justify-center'>
                <p className='font-bold ml-11 text-[green] text-[28px]'>Get the App</p>
                <p className='text-4xl font-bold ml-11 my-5'>THE FASTEST FOOD DELIEVERY IN PAKISTAN</p>
                <div className='ahsan'>
                <button className='bg-black w-[150px] text-white rounded-md my-6 py-[15px] text-[20px] hover:text-[#fbc531] font-semibold ml-4 ahsan'>Shop Now</button>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}
