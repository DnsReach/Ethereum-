import React, { useRef } from "react";
import SendMessage from "./Send";
import { useMoralisQuery, useMoralis } from "react-moralis";

const Message = () => {
  const EndOfMessage = useRef(null);
  const { user } = useMoralis();
  const { data } = useMoralisQuery(
    "Messages",
    (query) => query.ascending("createdAt").greaterThan(),
    [],
    {
      live: true,
    }
  );

  return (
    <>
      <SendMessage EndOfMessage={EndOfMessage} />
      {data.map((messages) => {
        return (
          <div>
            <h2 key={messages.id}>
              {messages.get("message")} --- {user.getUsername()}
            </h2>
          </div>
        );
      })}
      <div ref={EndOfMessage}>You're here</div>
    </>
  );
};

export default Message;
