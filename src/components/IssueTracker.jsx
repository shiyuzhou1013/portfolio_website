import React from "react";
import issuetracker from "../assets/images/issuetracker.png";
import ProjectCard from "./ProjectCard";

const IssueTracker = () => {
  return (
    <ProjectCard
      title="Issue Tracker"
      description="The Issue Tracker is a robust web application designed to streamline
        project management and enhance team collaboration. It offers a
        comprehensive solution for tracking and managing issues within
        software development projects, improving productivity and project
        outcomes."
      imageUrl={issuetracker}
      techStack={[
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "Prisma",
        "NextAuth.js",
        "AWS",
      ]}
      projectLink="https://issue-tracker-inky-eight.vercel.app/"
      codeLink="https://github.com/shiyuzhou1013/next.js-issue-tracker"
      imagePosition="right"
    />
  );
};

export default IssueTracker;
