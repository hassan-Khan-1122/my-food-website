import React, { useState } from 'react'
// import hassan from '../assets/todo.webp'
import Task from './Task'

export default function Todo() {
  
const [activity,setactivity] = useState("");
const [task,settask] = useState([]);

const hanlder = (e)=>{
    setactivity(e.target.value);
}
const  taskhandler = ()=>{
    settask([...task,activity]);
    setactivity("");
}
  return (
    <div>
        <section className='text-gray-600 body-font overflow-hidden'>
            <div className='container px-5 py-24 mx-auto'>
                <div className='w-[80%] mx-auto flex flex-wrap'>
                    {/* <div className='lg:w-1/2'>
                        <img className=' lg:h-auto h-64 object-cover object-center rounded w-[400px]' src={hassan}/>
                    </div> */}
                    
 <div className='lg-w-[40%] md:w-1/2 bg-gray-100 rounded-lg p-8  flex flex-col md:ml-auto w-full'>
 <h2 className='text-gray-900 font-bold mb-5 text-center text-5xl'>Todo</h2>
 <div className='mb-2'>
 <input type='text' className='bg-white rounded border w-full border-gray-300 focus:border-indigo-500 focus:ring-2/ focus:ring-indigo-200 text-base outline-none text-grey-700 py-1 px-3 leading-8 transition-colors durations-200 ease-in-out'
   value={activity} onChange={hanlder}
 
 />
 </div>
 <button className='text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
 onClick={taskhandler}
 >Add</button>

 <Task task = {task}/>
 </div>
                </div>
            </div>
        </section>
    </div>
  )
}



