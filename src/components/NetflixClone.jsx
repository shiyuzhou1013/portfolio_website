import React from "react";
import ProjectCard from "./ProjectCard";
import netflixClone from "../assets/images/netflixClone.png";

const NetflixClone = () => {
  return (
    <ProjectCard
      title="Netflix Clone"
      description="The Netflix Clone is a feature-rich web application that emulates the core functionalities of Netflix. It allows users to browse movies, watch trailers, and manage their search history, offering an immersive streaming experience. The application is built to handle user authentication, video streaming, and dynamic content rendering."
      imageUrl={netflixClone}
      techStack={[
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "Tailwind CSS",
      ]}
      projectLink="https://netflix-clone-ggk3.onrender.com/"
      codeLink="https://github.com/shiyuzhou1013/netflix_clone"
    />
  );
};
export default NetflixClone;
