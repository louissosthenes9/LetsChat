import { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../../skeletons/MessageSkeleton';
import Message from './Message';
import useListenMessage from '../../hooks/useListenMessage';

export default function Messages() {
  const { messages, loading } = useGetMessages();
  useListenMessage()
  const lastMessageRef = useRef(null);

  useEffect(() => {
   
    if (lastMessageRef.current) {
      setTimeout(()=>{
        lastMessageRef.current.scrollIntoView({ behavior: 'smooth' })
      }
        ,100
      ,)
      
    }
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-y-auto'>
      {/* Print a loading skeleton three times */}
      {loading && [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}

      {/* Load the texts after the loading */}
      {!loading && messages.length > 0 && (
        messages.map((message, index) => (
          <Message
            key={message._id}
            message={message}
            ref={index === messages.length - 1 ? lastMessageRef : null} // Attach the ref to the last message only
          />
        ))
      )}

      {/* Prompt a user to start chatting */}
      {!loading && messages.length === 0 && (
        <p className='text-center text-white'>Send a message to start the conversation</p>
      )}
    </div>
  );
}
