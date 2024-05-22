import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'
import {getRandomEmoji} from '../../utils/emojis'
export default function Conversations() {
  const {loading, conversations} = useGetConversation()
  
  return (
    <div className="flex flex-col">
      {loading?<span className='loading loading-spinner mx-auto'></span>:null} 
      {conversations.map((convo)=>(
        <Conversation
        key={convo._id}
        conversation = {convo}
        emoji = {getRandomEmoji()}
        />

        
      ))}    
    </div>
  )
}
