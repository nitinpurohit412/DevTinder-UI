import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";

const Chat = () => {
  const { targetUserId } = useParams();
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  useEffect(() => {
    if (!userId) {
      return;
    }
    const socket = createSocketConnection();
    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });

    socket.on("messageRecieved", ({ firstName, text }) => {
      console.log(firstName + " : " + text);
      setMessage((message) => [...message, { firstName, text }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: user.firstName,
      userId,
      targetUserId,
      text: newMessage,
    });
    setNewMessage("");
  };

  return (

<div className="mx-auto my-8 flex h-[75vh] min-h-[420px] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-[#0b0b0c] text-white shadow-2xl shadow-black/40">

  <h1 className="border-b border-neutral-800 bg-[#111112] px-6 py-5 text-lg font-semibold tracking-tight sm:px-7">
    Chat
  </h1>

  <div className="min-h-0 flex-1 space-y-6 overflow-y-auto bg-[#0b0b0c] p-5 sm:p-7">
    {message.map((msg, index) => {
      return (
        <div key={index} className="chat chat-start">
          <div className="chat-header mb-2 px-1 text-xs font-medium tracking-wide text-neutral-500">
            {msg.firstName}
          </div>
          <div className="chat-bubble max-w-[85%] rounded-2xl rounded-tl-md border border-neutral-800 bg-gradient-to-br from-[#202022] to-[#151516] px-5 py-3.5 text-sm leading-6 text-neutral-100 shadow-md shadow-black/20 before:hidden sm:max-w-[75%]">
            {msg.text}
          </div>
        </div>
      );
    })}
  </div>

  <div className="flex items-center gap-3 border-t border-neutral-800 bg-[#111112] p-4 sm:px-6 sm:py-5">
    <input
      type="text"
      value={newMessage}
      onChange={(e) => setNewMessage(e.target.value)}
      className="min-w-0 flex-1 rounded-xl border border-neutral-800 bg-[#1a1a1c] px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-neutral-600 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-700"
    />
    <button
      onClick={sendMessage}
      className="btn h-11 min-h-0 rounded-xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-200 px-6 text-sm font-semibold text-black shadow-md shadow-white/[0.03] transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:from-white hover:to-white hover:shadow-lg active:translate-y-0 active:scale-[0.97]"
    >
      Send
    </button>
  </div>
</div>
  );
};

export default Chat;
