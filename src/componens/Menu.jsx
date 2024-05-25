import React from 'react'
import {mealData} from './Data/Data.jsx'

export default function Menu() {
  return (
    <div className= "w-[90%] mx-auto ">
        <div>
      <h1 className='flex justify-center text-[#fbc511] font-bold text-3xl text-[50px] py-10'>Our Food</h1>
      </div>
      <div className=' grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4'>
          {
            mealData.map((product)=>(
                <>
                 <div className='flex justify-center flex-col items-center py-2 px-3'>
                    <div>
                    <img src={product.image}  className= "w-[200px] h-[200px] object-cover rounded "/>
                    </div>
                 <div className='flex flex-col '>
                    <p className='font-bold py-2 text-2xl'>{product.price}</p>
                    <p className='font-bold text-2xl '>{product.category}</p>
                 </div>
                 <button className='bg-black w-[150px] text-white rounded-md my-6 py-[15px] text-[20px] hover:text-[#fbc531] font-semibold ml-4 ahsan'>Add to cart</button>

                 </div>
                    </>
                
            ))
          }
          </div>
          </div>
  )
}
