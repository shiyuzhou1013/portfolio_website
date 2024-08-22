import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Badge,
} from "@chakra-ui/react";
import React from "react";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  techStack,
  projectLink,
}) => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2 }}
      spacing={6}
      padding="10px"
      width="100%"
      alignItems="center"
    >
      <Box margin={5}>
        <Image src={imageUrl} alt={title} />
      </Box>

      <Box margin={5}>
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
      </Box>
    </SimpleGrid>
  );
};

export default ProjectCard;
