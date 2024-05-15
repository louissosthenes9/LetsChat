import React from 'react'

export default function Conversation() {
  return (
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>

      {/* Avatar goes here */}
      <div className='avatar-online'>
        <div className="w-12 h-12 rounded-full">
            <img src="/vite.svg" alt="image" />
        </div>
      </div>
      


      {/* Name and mood emoji */}
        <div className='flex gap-4 justify-between'>
          <p className='font-bold text-white'>John Doe</p>
          <span className='text-xl'>🙄</span>
      </div>
     <div className="divider my-0 py-0 h-1"  >

     </div>
    </div>
  )
}
