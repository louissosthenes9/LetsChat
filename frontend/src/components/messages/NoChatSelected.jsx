import React from 'react'
import {FaTimes} from 'react-icons/fa'
const NoChatSelected = () => {
    return (
        <div className="flex items-center w-full justify-center h-full">
            <div className="px-2 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 🖐 John Doe 💥</p> 
                <p>Select Chat to start messaging</p>
                <FaTimes className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}

export default NoChatSelected