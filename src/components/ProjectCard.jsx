import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import MotionBoxContainer from "./MotionBoxContainer";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  techStack,
  projectLink,
  imagePosition = "left",
}) => {
  return (
    <Flex
      direction={{ sm: "column", md: "row" }}
      alignItems="center"
      padding="10px"
      width="100%"
    >
      <MotionBoxContainer
        margin={5}
        order={imagePosition === "left" ? 1 : 2}
        flex="1"
      >
        <Image src={imageUrl} alt={title} />
      </MotionBoxContainer>

      <MotionBoxContainer
        margin={5}
        order={imagePosition === "left" ? 2 : 1}
        direction="right"
        flex="1"
      >
        <Heading size="lg" mb={5}>
          {title}
        </Heading>
        <Flex direction="column" gap={5}>
          <Text>{description}</Text>
          <Stack>
            <Text fontSize="lg" fontWeight="bold">
              Tech Stack
            </Text>
            <Stack direction="row" flexWrap="wrap">
              {techStack.map((tech) => (
                <Badge colorScheme="pink" fontSize={15} key={tech}>
                  {tech}
                </Badge>
              ))}
            </Stack>
          </Stack>
        </Flex>
        <Link href={projectLink} isExternal>
          <Button
            color="white"
            fontSize="lg"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            mt={8}
            _hover={{
              bgGradient: "linear(to-l, #6c22b6, #e60074)",
            }}
          >
            View Website
          </Button>
        </Link>
      </MotionBoxContainer>
    </Flex>
  );
};

export default ProjectCard;
