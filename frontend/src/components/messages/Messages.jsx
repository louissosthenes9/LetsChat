
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../../skeletons/MessageSkeleton';
import Message from './Message'

export default function Messages() {

  const {messages,loading} = useGetMessages()
  console.log(messages);
  return (
    
    <div className='px-4 flex-1 overflow-auto'>
   {/* print a loading skeleton three times */}
    {loading && [...Array(3)].map((_,index)=><MessageSkeleton  key={index}/>)}
   
    {/*Load the texts after the loading  */}

    {!loading && messages.length>0 && (
      messages.map((message)=>(
        <Message key={message._id}  message={message}/>
      ))
    )}
  
    {/* Prompt a user to start chatting */}
    {!loading && messages.length===0 && (
      <p className='text-center text-white'>Send a message to start the conversation</p>
    )}
   
    </div>
  )
}
