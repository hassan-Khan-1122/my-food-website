import React from 'react'
import Slider from "react-slick";
import {topPicks} from './Data/Data.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slidres() {

     const  settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>

    <div className='w-[90%] mx-auto'>
   <h1 className='font-bold text-3xl'>What's On your Mind?</h1>
   <div className='py-20'>
   <Slider {...settings}>
    {
        topPicks.map((items)=>(
            <div className='bg=[white] rounded-md'>
            <div className='flex justify-center items-center rounded-t-xl'>
                <img src={items.img}  className='w-[200px] rounded-full h-[200px] object-cover'/>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                    <p className='text-xl font-semibold uppercase'>{items.title}</p>
                     </div>
            </div>
        ))
}
</Slider>
   </div>  
    </div>
         
    </>
    
  )
}
