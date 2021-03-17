import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context"


export const Start = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const startGame = async () => {
    authContext.setUserId("test");
    authContext.updateAuthStatus();
    history.push("/game");
  };

  return (
    <>
      <h1>start</h1>
      <button onClick={startGame}>Go</button>
    </>
  );
};
