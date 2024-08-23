import { Box, Button, Heading, SimpleGrid, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "./SectionTitle";
import MotionBoxContainer from "./MotionBoxContainer";

const Banner = () => {
  const frontendSkills = ["React", "React Native", "Next.js", "HTML", "CSS"];

  const backendSkills = [
    "Node.js",
    "NextAuth.js",
    "Prisma",
    "MongoDB",
    "RESTful APIs",
  ];

  const programmingLanguages = [
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "SQL",
  ];

  const title = "ABOUT ME";

  const text =
    "Here you will find more information about me and my current skills in terms of programming and technology";
  return (
    <Box
      id="about"
      paddingTop="80px"
      bgGradient="linear(to-b, white, gray.200)"
    >
      <SectionTitle title={title} text={text} />
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        spacing={6}
        padding="10px"
        width="100%"
      >
        <MotionBoxContainer margin={5}>
          <Heading size="md" mb={5}>
            Get to know me
          </Heading>
          <Text fontSize="lg" mb={3}>
            I am an enthusiastic individual with a background in data analysis
            who has transitioned to pursue a career in software development,
            blending analytical skills with a passion for coding and
            problem-solving!
          </Text>
          <Text fontSize="lg">
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to download my RESUME and contact me!
          </Text>
        </MotionBoxContainer>

        <MotionBoxContainer margin={5} direction="right">
          <Heading size="md" mb={5}>
            My Skills
          </Heading>
          <Wrap gap={3} mb={3}>
            {frontendSkills.map((skill) => (
              <Button pointerEvents="none" bg="gray.300">
                {skill}
              </Button>
            ))}
          </Wrap>
          <Wrap gap={3} mb={3}>
            {backendSkills.map((skill) => (
              <Button pointerEvents="none" bg="gray.300">
                {skill}
              </Button>
            ))}
          </Wrap>
          <Wrap gap={3} mb={3}>
            {programmingLanguages.map((skill) => (
              <Button pointerEvents="none" bg="gray.300">
                {skill}
              </Button>
            ))}
          </Wrap>
        </MotionBoxContainer>
      </SimpleGrid>
    </Box>
  );
};

export default Banner;
