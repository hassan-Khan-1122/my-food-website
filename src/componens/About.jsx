import React from 'react'
import images from './images/khan2.avif'

export default function About() {
  return (
    <div className='w-80% mx-auto text-[grey] h-[95vh]'>
        <div className='px-[14px]'> 
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-grey-900 mt-8'>Driving the force of <span className='text-[red]'>assortment</span></h1>
        <p className='mb-8 leading-relaxed text-[20px]'> For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries. By putting together meticulous information for our customers, we enable them to make an informed choice.</p>
        </div>
         <div className='container mx-auto px-5 py-24 md:flex-row flex-col items-center'>
            <div className='lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:item-start md:text-left mb-16 text-center'>
                <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-grey-900'>
                    Who are you?
                </h2>
<p>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
            </div>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img className='object-cover object-center rounded absolute top-[59%] right-7 w-[500px]' src={images}/>
              
            </div>

            
         </div>
    </div>
  ) 
}
