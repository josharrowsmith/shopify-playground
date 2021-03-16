import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { IconContext } from 'react-icons';
import { FaTimes } from 'react-icons/fa';
import Wheel from "./Wheel"

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  color: white;
`

const Form = styled.div`
  margin: 3em 1.5em;
  margin-right: 3em;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`
const SpinBtn = styled.button`
  width: 200px;
  height: 50px;
`

export const Nav = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <MenuNav
      variants={variants}
      initial="closed"
      animate={isNavOpen ? "open" : "closed"}
      transition={{ damping: 300 }}
    >
        <IconContext.Provider
        value={{ color: 'white', size: '50px' }}
        >
            <FaTimes onClick={() => setIsNavOpen(false)} />
        </IconContext.Provider>
        <Grid>
            <div>
                <Wheel/>
            </div>
            <Form>
              <h1>WE HAVE A BONUS FOR NEW VISITORS</h1>
              <p>You have a chance to win a discount for your webshop. Try your luck on our Coupon Wheel, click the button below</p>
              <SpinBtn onClick={() => console.log("hey")}>SPIN THE WHEEL</SpinBtn>
              <p>RULES</p>
              <ul>
                <li>- One spin per customer</li>
                <li>- can you not hack my shit</li>
                <li>- no fuck heads</li>
              </ul>
            </Form>
        </Grid>
    </MenuNav>
  );
};


export default Nav;
