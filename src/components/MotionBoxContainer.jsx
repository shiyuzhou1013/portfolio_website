import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const MotionBoxContainer = ({
  children,
  initial = { opacity: 0, x: -100 },
  animate = { opacity: 1, x: 0 },
  transition = { duration: 1, delay: 0 },
  direction = "left",
  ...rest
}) => {
  const initialX = direction === "right" ? 100 : -100;

  return (
    <MotionBox
      initial={{ opacity: 0, x: initialX }}
      whileInView={animate}
      transition={transition}
      {...rest}
    >
      {children}
    </MotionBox>
  );
};

export default MotionBoxContainer;
