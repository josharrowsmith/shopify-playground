//@ts-check
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

export const CartToolTip = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
    />
  )
}
