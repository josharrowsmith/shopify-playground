import React, { useContext } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { IconContext } from 'react-icons';
import { FaTimes } from 'react-icons/fa';
import GameScreen from "../GameScreen"
import { AuthContext } from "../context"
import { useHistory } from "react-router-dom";

const variants = {
  open: { x: 0 },
  closed: { x: "-100%" }
};

const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 50vw;
  height: 100vh;
  background: linear-gradient(rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62));
  padding: 40px;
`;



export const Nav = ({ isNavOpen, setIsNavOpen }) => {
  const authContext = useContext(AuthContext);
  const history = useHistory();


  const CloseNav = () => {
    authContext.setUserId("");
    authContext.updateAuthStatus();
    setIsNavOpen(false)
    history.push("/");
  }

  return (
    <MenuNav
      variants={variants}
      initial="closed"
      animate={isNavOpen ? "open" : "closed"}
      transition={{ damping: 300 }}
    >
        <IconContext.Provider value={{ color: 'white', size: '50px' }}>
          <FaTimes onClick={CloseNav} />
        </IconContext.Provider>
        <GameScreen/>
    </MenuNav>
  );
};


export default Nav;
