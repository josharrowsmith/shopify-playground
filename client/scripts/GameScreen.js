import React, { useState, useEffect } from "react";
import { AuthContext, GameContext } from "./context"
import Routes from "./routes"

export default function GameScreen() {
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState(null);

  const [coupon, setCoupon] = useState(null);
  const [prize, setPrize] = useState(null);
  const [result, setResult] = useState(null);

  const login = () => {
    setIsAuth(true);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          isAuth: isAuth,
          userId: userId,
          updateAuthStatus: login,
          setUserId,
        }}
      >
        <GameContext.Provider
          value={{
            coupon: coupon,
            prize: prize,
            result: result,
            setPrize: setPrize,
            setCoupon: setCoupon,
            setResult: setResult,
          }}
        >
          <Routes />
        </GameContext.Provider>
      </AuthContext.Provider>
    </>
  );
}
