import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import banner from "../assets/images/banner.png";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import MotionBoxContainer from "./MotionBoxContainer";

const Banner = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2 }}
      spacing={6}
      padding="10px"
      bgColor="black"
    >
      <MotionBoxContainer padding={10}>
        <Heading
          color="white"
          fontSize={{ base: "3xl", lg: "5xl" }}
          fontWeight="bold"
          marginY={5}
        >
          Hi! I'm Sherry <br />
          Future Full-Stack Developer
        </Heading>
        <Link href="#project">
          <Button
            color="white"
            fontSize="lg"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            marginBottom={5}
            _hover={{
              bgGradient: "linear(to-l, #6c22b6, #e60074)",
            }}
          >
            View My Projects
          </Button>
        </Link>
        <Flex gap={2}>
          <Link href="https://github.com/shiyuzhou1013" isExternal>
            <Image src={github} width={8} height={8}></Image>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sherry-zhou-96a6302b7/"
            isExternal
          >
            <Image src={linkedin} width={8} height={8}></Image>
          </Link>
        </Flex>
      </MotionBoxContainer>

      <MotionBoxContainer
        paddingBottom={10}
        direction="right"
        display={{ base: "none", md: "block" }}
      >
        <Image src={banner} width={500}></Image>
      </MotionBoxContainer>
    </SimpleGrid>
  );
};

export default Banner;
