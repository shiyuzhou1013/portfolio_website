import { Box, Flex } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import "./global.css";
import Footage from "./components/Footage";
import SkillsContainer from "./components/SkillsContainer";

function App() {
  return (
    <Flex direction="column" width="100%" maxWidth="100vw" overflowX="hidden">
      <NavBar />
      <Banner />
      <About />
      <SkillsContainer />
      <Projects />
      <Footage />
    </Flex>
  );
}

export default App;
