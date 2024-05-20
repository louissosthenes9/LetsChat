import React from 'react';
import useConversation from '../../zustand/store'; // Ensure the path is correct

export default function Conversation({ conversation, emoji }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation._id === conversation._id; 
  console.log(isSelected);
  console.log(selectedConversation._id);
  console.log(conversation._id);

  return (
    <div
      onClick={() => setSelectedConversation(conversation)}
      className={`${isSelected ? "bg-sky-500" : ""} flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer`}
    >
      {/* Avatar goes here */}
      <div className='avatar-online'>
        <div className="w-12 h-12 rounded-full">
          <img src={conversation.profilePic} alt="image" />
        </div>
      </div>

      {/* Name and mood emoji */}
      <div className='flex gap-4 justify-between'>
        <p className='font-bold text-white'>{conversation.fullName}</p>
        <span className='text-xl'>{emoji}</span>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
}
