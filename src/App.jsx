import { Box, Flex } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import "./global.css";
import Footage from "./components/Footage";

function App() {
  return (
    <Flex direction="column" width="100%" maxWidth="100vw" overflowX="hidden">
      <NavBar />
      <Banner />
      <About />
      <Projects />
      <Footage />
    </Flex>
  );
}
// function App() {
//   return (
//     <>
//       <Box>
//         <Flex bg="black" direction="column">
//           <NavBar />
//           <Banner />
//         </Flex>
//         <Flex direction="column" gap={10} mb={20}>
//           <About />
//           <Projects />
//           <Footage />
//         </Flex>
//       </Box>
//     </>
//   );
// }

export default App;
