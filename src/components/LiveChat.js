import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateComment, generateName } from "../utils/helper";

const LiveChat = () => {


  const [liveMessageChat , setLiveMessageChat] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("API POLLING every  sec");
      dispatch(
        addMessage({
          name: generateName(),
          message:generateComment(6)+ "🚀",
        })
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="ml-5 p-2 h-[600px]  border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((chatMessage, index) => {
        return (
          <ChatMessage
            key={index}
            name={chatMessage.name}
            message={chatMessage.message}
          />
        );
      })}
    </div>
    <form className = "w-full p-2 ml-2 border rounded-lg"onSubmit={(e)=>{
      e.preventDefault();

      dispatch(addMessage({
        name : "Monash Chhetri",
        message : liveMessageChat
      }));

      setLiveMessageChat("");

    }}>
      <input className="px-2 w-96 bg-gray-200" type="text" value={liveMessageChat} onChange={(e)=>setLiveMessageChat(e.target.value)} />
      <button className="px-2 bg-green-100 rounded-lg ml-2">Send</button>
    </form>
    </div>

  );
};

export default LiveChat;
