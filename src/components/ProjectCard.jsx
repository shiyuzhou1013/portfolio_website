import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Badge,
  Box,
} from "@chakra-ui/react";
import React from "react";
import MotionBoxContainer from "./MotionBoxContainer";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  techStack,
  projectLink,
  codeLink,
  imagePosition = "left",
}) => {
  return (
    <Flex
      direction={{
        base: "column",
        md: imagePosition === "left" ? "row" : "row-reverse",
      }}
      alignItems="center"
      width="100%"
      maxWidth="100%"
      boxSizing="border-box"
      overflow="hidden"
      p={5}
      borderRadius="md"
      boxShadow="lg"
      gap={5}
      bg="white"
    >
      <MotionBoxContainer
        flex="1"
        direction={imagePosition === "left" ? "left" : "right"}
        transition={{ duration: 0.8, delay: 0.2 }}
        borderRadius="md"
        overflow="hidden"
      >
        <Image
          src={imageUrl}
          alt={title}
          width="100%"
          height="auto"
          objectFit="cover"
        />
      </MotionBoxContainer>

      <MotionBoxContainer
        flex="2"
        direction={imagePosition === "left" ? "right" : "left"}
        transition={{ duration: 0.8, delay: 0.4 }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Heading size="lg" mb={3} color="gray.800">
          {title}
        </Heading>
        <Text mb={4} color="gray.600">
          {description}
        </Text>
        <Box mb={4}>
          <Text fontSize="lg" fontWeight="bold" color="gray.800" mb={2}>
            Tech Stack
          </Text>
          <Stack
            direction="row"
            flexWrap="wrap"
            justify={{ base: "center", md: "flex-start" }}
          >
            {techStack.map((tech) => (
              <Badge colorScheme="pink" fontSize={15} key={tech} mr={2} mb={2}>
                {tech}
              </Badge>
            ))}
          </Stack>
        </Box>

        <Flex
          gap={5}
          justifyContent={{ base: "center", md: "flex-start" }}
          mt={4}
          wrap="wrap"
        >
          <Link href={projectLink} isExternal>
            <Button
              color="white"
              fontSize="lg"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              _hover={{
                bgGradient: "linear(to-l, #6c22b6, #e60074)",
              }}
            >
              View Website
            </Button>
          </Link>

          <Link href={codeLink} isExternal>
            <Button
              color="white"
              fontSize="lg"
              bgGradient="linear(to-l, #00c6ff, #0072ff)"
              _hover={{
                bgGradient: "linear(to-l, #0099cc, #005bb5)",
              }}
            >
              View Code
            </Button>
          </Link>
        </Flex>
      </MotionBoxContainer>
    </Flex>
  );
};

export default ProjectCard;
