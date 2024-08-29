import React from "react";
import { useState } from "react";
import { Button, Image } from "@chakra-ui/react";
import download from "../assets/download.png";

const ResumeButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Button
      as="a"
      href="/Resume-SherryZHOU.pdf"
      download="Resume-SherryZHOU.pdf"
      color="white"
      fontSize="lg"
      width="90px"
      padding={0}
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      _hover={{
        bgGradient: "linear(to-l, #6c22b6, #e60074)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      justifyContent="center"
      alignItems="center"
    >
      {hovered ? <Image src={download} boxSize="25px" /> : "Resume"}
    </Button>
  );
};

export default ResumeButton;
