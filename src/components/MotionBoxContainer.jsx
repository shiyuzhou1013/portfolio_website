import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const MotionBoxContainer = ({
  children,
  initial = { opacity: 0, scale: 0.8 },
  animate = { opacity: 1, scale: 1, x: 0, y: 0 },
  transition = { duration: 0.5, delay: 0 },
  direction = "none",
  ...rest
}) => {
  let initialPosition = { opacity: 0, scale: 0.8 }; 

  switch (direction) {
    case "right":
      initialPosition.x = 100;
      break;
    case "left":
      initialPosition.x = -100;
      break;
    case "top":
      initialPosition.y = -100;
      break;
    case "bottom":
      initialPosition.y = 100;
      break;
    case "none":
      initialPosition.x = 0;
      initialPosition.y = 0;
      break;
    default:
      initialPosition.x = 0;
      initialPosition.y = 0;
  }

  return (
    <MotionBox
      initial={initialPosition}
      whileInView={animate}
      transition={transition}
      {...rest}
    >
      {children}
    </MotionBox>
  );
};

export default MotionBoxContainer;
