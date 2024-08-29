import { Box, Stack } from "@chakra-ui/react";
import GameHub from "./GameHub";
import IssueTracker from "./IssueTracker";
import SectionTitle from "./SectionTitle";
import NetflixClone from "./NetflixClone";

const Projects = () => {
  const title = "PROJECTS";

  const text = "Here you will find some of my personal projects";

  return (
    <Box id="project" paddingTop="80px">
      <SectionTitle title={title} text={text} />
      <Stack gap={20}>
        <GameHub />
        <IssueTracker />
        <NetflixClone />
      </Stack>
    </Box>
  );
};

export default Projects;
