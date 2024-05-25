import { useEffect } from "react"
import { useAuthContext } from "../context/AuthContext"
import useConversation from "../zustand/store"
import notification from "../assets/notification.mp3"
const useListenMessage = () => {
    const {socket} = useAuthContext()
    const {messages,setMessages}= useConversation()


  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        newMessage.shouldShake = true
        const sound = new Audio(notification)
        sound.play()
        setMessages([...messages,newMessage])
    })

    return ()=>socket?.off("newMessage")

  },[socket,setMessages,messages])
}

export default useListenMessage