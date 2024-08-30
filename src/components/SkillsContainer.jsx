import { Box } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
import MotionBoxContainer from "./MotionBoxContainer";
import SkillSlider from "./SkillSlider";

const SkillsContainer = () => {
  const title = "MY SKILLS";
  const text =
    "Here you woll find a list of my skills in terms of programming and technology";

  return (
    <Box
      id="skills"
      paddingTop="80px"
      bgGradient="linear(to-b, white, gray.200)"
    >
      <SectionTitle title={title} text={text} />

      <MotionBoxContainer
        margin={{ base: 2, md: 10 }}
        padding={{ base: 2, md: 10 }}
      >
        <SkillSlider />
      </MotionBoxContainer>
    </Box>
  );
};

export default SkillsContainer;
