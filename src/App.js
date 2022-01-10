import React from "react";
import { useMoralis } from "react-moralis";
import Signup from "./components/signup";
import Message from "./Messages";
import GetBalance from "./components/GetBalance";
import User from "./components/User";
import "./App.css";
import { Button } from "@chakra-ui/react";
const App = () => {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  if (isAuthenticated) {
    return (
      <>
        <GetBalance />
        <button onClick={() => logout()}>LOGOUT</button>
        <h2>MESSAGES</h2>
        <User />
        <Message />
      </>
    );
  }

  return (
    <>
      <div className="App">
        <h1
          style={{
            fontSize: 30,
          }}
        >
          CONNECT TO THE METAVERSE
        </h1>

        <button className="button" onClick={() => authenticate()}>
          Click
        </button>
        <Signup />
      </div>
    </>
  );
};

export default App;
