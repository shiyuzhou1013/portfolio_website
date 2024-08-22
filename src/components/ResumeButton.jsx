import React from "react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

const ResumeButton = () => {
  const [buttonText, setButtonText] = useState("Resume");

  return (
    <Button
      as="a"
      href="/Resume.pdf"
      download="Resume.pdf"
      color="white"
      fontSize="lg"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      _hover={{
        bgGradient: "linear(to-l, #6c22b6, #e60074)",
      }}
      onMouseEnter={() => setButtonText("Download")}
      onMouseLeave={() => setButtonText("Resume")}
    >
      {buttonText}
    </Button>
  );
};

export default ResumeButton;
