import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChatSelected from './NoChatSelected';

export default function MessageContainer() {
    const NoChat = true;
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {NoChat ? (
                <NoChatSelected/>
            ) : (
                <>
                    {/* Header to display the receiver's name */}
                    <div className="bg-slate-500 px-4 py-2 mb-2">
                        <span className="label-text">
                            To:
                        </span>
                        <span className="text-gray-900 fontbold">
                            John Doe
                        </span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}

        </div>
    )
}

