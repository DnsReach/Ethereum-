import React from "react";
import { useMoralis, useNativeBalance } from "react-moralis";

const Balance = () => {
  const { user } = useMoralis();
  const { data: balance } = useNativeBalance({
    address: user.get("ethAddress"),
  });
  return <div>{balance.formatted}</div>;
};

export default Balance;
