import React from 'react'
import {FaSearch} from "react-icons/fa"
export default function SearchInput() {
  return (
    <form action="" className='flex items-center gap-2'>
        <input type="text" name="" id="" placeholder='search...' className='input input-bordered rounded-full'/>  
         <button type='submit' className='btn btn-circle bg-sky-400 text-white'>
               <FaSearch className='w-6 h-6 outline-none' />
         </button>
    </form>
  )
}
