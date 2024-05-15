import React from 'react'

export default function Message() {
  return (
    <div className='chat chat-end'>
        <div className="chat-image avatar">
             <div className="w-10 rounded-full">
                 <img src="/vite.svg" alt="/vite.svg" />
             </div>
        </div>
        <div className={`chat-bubble text-white text-bule-500`}>
          Hi? it's louis
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>

    </div>
  )
}
