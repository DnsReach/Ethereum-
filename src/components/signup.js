import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import "../Signup.css";

const Form = () => {
  const { login } = useMoralis();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form className="form">
        <input
          id="input"
          placeholder="Name"
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          id="input"
          placeholder="Seu Nome"
          type="password"
          onChange={(eve) => setPassword(eve.target.value)}
        />
        <button
          className="button-signup"
          placeholder="Seu Nome"
          onClick={() => login(username, password)}
        >
          SIGNUP
        </button>
      </form>
    </>
  );
};

export default Form;
