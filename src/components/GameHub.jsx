import React from "react";
import gamehub from "../assets/images/gamehub.png";
import ProjectCard from "./ProjectCard";

const GameHub = () => {
  return (
    <ProjectCard
      title="Game Hub"
      description="Game Hub is a dynamic web application designed to create an engaging
        and informative experience for video game enthusiasts. This platform
        allows users to explore a vast database of video games, offering
        detailed insights and up-to-date information tailored to their
        gaming preferences."
      imageUrl={gamehub}
      techStack={["React.js", "TypeScript", "Axios", "Chakra UI", "Vercel"]}
      projectLink="https://game-hub-jade-six.vercel.app/"
      codeLink="https://github.com/shiyuzhou1013/game-hub-intermediate"
    />
  );
};

export default GameHub;
