import {useAuthContext} from '../../context/AuthContext'
import useConversation from '../../zustand/store'
export default function Message({message}) {
  
  const {auth} = useAuthContext()

  const {selectedConversation} = useConversation()
  
   const fromMe = message.senderId === auth._id
  
  const chatClassName = fromMe ? "chat-end" : "chat-start"
  const profilePic = fromMe ? auth.profilePic:selectedConversation?.profilePic
  const bubbleBgColor = fromMe ? "bg-blue-500" : " "

  
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
             <div className="w-10 rounded-full">
                 <img src={profilePic || "/vite.svg"} alt="Profile" />
             </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor}`}>
          {message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>

    </div> 
  )
}

