import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Footage = () => {
  return (
    <Box bg="black" width="100%" padding={10}>
      <Heading color="white" mb={5}>
        Sherry Zhou
      </Heading>
      <Text color="white">
        Motivated by my data analysis background and recent transition into
        software development, I am eager to embark on a career as a full-stack
        developer.
      </Text>
      <Divider
        borderColor="white"
        borderWidth={0.5}
        w="100%"
        marginTop={10}
        marginBottom={3}
      />
      <Text textAlign="center" color="white">
        © Copyright 2024 . Made by Sherry Zhou
      </Text>
    </Box>
  );
};

export default Footage;
