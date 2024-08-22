import { Box, Flex } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import "./global.css";
import Footage from "./components/Footage";

function App() {
  return (
    <>
      <Box bg="black">
        <NavBar />
        <Banner />
      </Box>
      <Flex direction="column" gap={10} mb={20}>
        <About />
        <Projects />
      </Flex>
      <Footage />
    </>
  );
}

export default App;
