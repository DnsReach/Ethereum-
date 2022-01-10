import React, { useState } from "react";
import { useMoralis } from "react-moralis";

const User = () => {
  const { user, setUserData } = useMoralis();
  const [state, setState] = useState("");

  return (
    <>
      <div>WELCOME TO THE METAVERSE</div>
      <input
        onChange={(evu) => {
          setState(evu.target.value);
        }}
      />
      <button
        onClick={() =>
          setUserData({
            username: state,
          })
        }
      >
        Click
      </button>
      <h2>USER: {user.get("username")}</h2>
    </>
  );
};

export default User;
