import { Button, Flex, Image, Box, Text } from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import css from "../assets/skills/css.svg";
import html from "../assets/skills/html.svg";
import javascript from "../assets/skills/js.svg";
import mongodb from "../assets/skills/mongodb.svg";
import nextjs from "../assets/skills/nextjs.svg";
import nodejs from "../assets/skills/nodejs.svg";
import prisma from "../assets/skills/prisma.svg";
import react from "../assets/skills/react.svg";
import python from "../assets/skills/python.svg";
import java from "../assets/skills/java.svg";
import sql from "../assets/skills/sql.svg";
import tailwind from "../assets/skills/tailwind.svg";
import express from "../assets/skills/express.svg";

const skills = [
  { image: react, name: "React.js" },
  { image: nodejs, name: "Node.js" },
  { image: express, name: "Express.js" },
  { image: mongodb, name: "MongoDB" },
  { image: nextjs, name: "Next.js" },
  { image: prisma, name: "Prisma" },
  { image: tailwind, name: "Tailwind CSS" },
  { image: css, name: "CSS" },
  { image: html, name: "HTML" },
  { image: javascript, name: "JavaScript" },
  { image: java, name: "Java" },
  { image: python, name: "Python" },
  { image: sql, name: "SQL" },
];

const SkillSlider = () => {
  const [showArrow, setShowArrow] = useState(false);
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleMouseEnter = () => {
    setShowArrow(true);
  };

  const handleMouseLeave = () => {
    setShowArrow(false);
  };

  return (
    <Box
      position="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      width="100%"
    >
      <Flex
        ref={sliderRef}
        overflowX="scroll"
        alignItems="center"
        paddingX="50px"
        width="100%"
        mx="auto"
        className="no-scrollbar"
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            flex="0 0 auto"
            textAlign="center"
            justifyContent="center"
            alignItems="center"
            mr={{ base: 2, md: 8 }}
          >
            <Image
              src={skill.image}
              alt={`Skill ${index + 1}`}
              width="100px"
              boxSize="100px"
              objectFit="cover"
              mb={2}
            />
            <Text fontSize="sm" fontWeight="bold" color="gray.600">
              {skill.name}
            </Text>
          </Box>
        ))}
      </Flex>
      {showArrow && (
        <>
          <Button
            onClick={scrollLeft}
            position="absolute"
            left="10px"
            top="50%"
            borderRadius="50%"
            transform="translateY(-50%)"
            zIndex={2}
            bgColor={"gray.300"}
          >
            {"<"}
          </Button>
          <Button
            onClick={scrollRight}
            position="absolute"
            right="2px"
            top="50%"
            borderRadius="50%"
            transform="translateY(-50%)"
            zIndex={2}
            bgColor={"gray.300"}
          >
            {">"}
          </Button>
        </>
      )}
    </Box>
  );
};

export default SkillSlider;
