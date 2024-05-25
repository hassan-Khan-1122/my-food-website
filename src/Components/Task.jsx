import React from 'react'
import { CiSquareCheck } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export default function Task({task}) {
  return (
    <div>
      <ul>
        {task.map(()=>(
   <li className='flex justify-between border-b-2 px-2 py-1 items-center'>
   <div className='flex gap-3'>
       <span className='cursor-pointer'>
       <CiSquareCheck  size={30}/>
       </span>
       <span>{task}</span>
   </div>
   <span className='flex gap-3'>
       <span className='cursor-pointer'>
       <FaEdit  size={25}/>
       </span>
       <span className='cursor-pointer'>
       <MdDelete  size={25}/>
       </span>
   </span>
</li>
        ))}
     
       
      </ul>
    </div>
  )
}
