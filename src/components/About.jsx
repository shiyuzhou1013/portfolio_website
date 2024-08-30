import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import MotionBoxContainer from "./MotionBoxContainer";
import SectionTitle from "./SectionTitle";

const About = () => {
  const title = "ABOUT ME";

  return (
    <Box
      id="about"
      paddingTop="80px"
      bgGradient="linear(to-b, white, gray.200)"
    >
      <SectionTitle title={title} />

      <MotionBoxContainer
        margin={{ base: 2, md: 10 }}
        padding={{ base: 2, md: 10 }}
      >
        <VStack spacing={4} align="left">
          <Heading size="lg" mb={5} color="pink.500">
            Hey there! 👋
          </Heading>
          <Text fontSize={{ base: "md", sm: "md", md: "lg" }}>
            I'm an enthusiastic{" "}
            <Box as="span" color="pink.500" fontWeight="bold">
              Problem-Solver
            </Box>{" "}
            with a strong background in{" "}
            <Box as="span" color="pink.500" fontWeight="bold">
              Data Analysis
            </Box>
            , which has given me a solid foundation in logical thinking and a
            keen eye for detail. Recently, I transitioned into{" "}
            <Box as="span" color="pink.500" fontWeight="bold">
              Software Development
            </Box>
            , where I now blend my analytical skills with a passion for coding
            to create efficient, innovative solutions.
          </Text>
          <Text fontSize={{ base: "md", sm: "md", md: "lg" }}>
            Whether it’s front-end development, where I bring designs to life,
            or back-end programming, where I ensure everything runs smoothly
            behind the scenes, I’m dedicated to{" "}
            <Box as="span" color="pink.500" fontWeight="bold">
              Continuously Learning
            </Box>{" "}
            and applying new technologies to solve real-world challenges.
          </Text>
          <Text fontSize={{ base: "md", sm: "md", md: "lg" }}>
            I’m actively seeking job opportunities where I can contribute, grow,
            and make an impact. If you’re looking for someone who’s eager to
            take on new challenges and deliver results, download my{" "}
            <Link
              href="/Resume-SherryZHOU.pdf"
              download
              color="pink.500"
              fontWeight="bold"
            >
              RESUME
            </Link>{" "}
            and let’s connect. Together, we can build something amazing! 🚀
          </Text>
          <br />
          <Text fontSize={{ base: "md", sm: "md", md: "lg" }}>
            When I’m not coding, you can find me in the kitchen experimenting
            with new baking recipes 🍰, exploring my creativity through painting
            🎨, or analyzing the latest trends in the stock market and reading
            financial reports 📈. These hobbies allow me to relax, express
            creativity, and keep a sharp eye on emerging opportunities.
          </Text>
        </VStack>
      </MotionBoxContainer>
    </Box>
  );
};

export default About;
