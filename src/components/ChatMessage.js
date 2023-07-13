import React from 'react'

const ChatMessage = ({name,message}) => {
    
  return (
    <div className="flex items-center mt-2">
        <img
          className="h-8"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        />
        <div className='flex  flex-auto'>
            <span className="font-bold px-2">{name}</span>
            <span>{message}</span>
        </div>

    </div>
  )
}

export default ChatMessage