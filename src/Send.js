import React, { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ EndOfMessage }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessages] = useState("");

  const GiveMessage = (ev) => {
    ev.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then((e) => {
        console.log("ok");
      });
    EndOfMessage.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <form onSubmit={GiveMessage}>
      <input
        value={message}
        onChange={(evento) => setMessages(evento.target.value)}
      />
      <button type="submit">Click</button>
    </form>
  );
};

export default SendMessage;
