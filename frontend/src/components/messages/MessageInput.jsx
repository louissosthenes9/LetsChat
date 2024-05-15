import React from 'react'
import { FaAd, FaAddressCard} from 'react-icons/fa'

export default function MessageInput() {
    return (
        <form action="" className='px-4 my-3'>
            <div className="w-full relative">
                <input
                    type="text" 
                    name="" 
                    id=""
                    placeholder='send a message'
                    className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
                />
                <button type="submit" className="pe-3 absolute inset-y-0 end-0 flex items-center">
                  <FaAd className='text-white'/>
                </button>
            </div>
        </form>
    )
}
