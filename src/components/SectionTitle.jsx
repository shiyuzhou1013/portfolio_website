import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const SectionTitle = ({ title, text }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="column"
      gap={3}
      marginX={5}
      mb={10}
    >
      <Heading mt={5}>{title}</Heading>
      <Divider borderColor="#FF0080" borderWidth={2} w="2%" borderRadius={50} />
      <Text textAlign="center">{text}</Text>
    </Flex>
  );
};

export default SectionTitle;
