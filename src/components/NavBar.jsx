import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import ResumeButton from "./ResumeButton";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
};

const NavBar = () => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      padding={5}
      bg="black"
      position="fixed"
      top="0"
      zIndex="100"
      width="100%"
      maxWidth="100vw"
    >
      <GridItem>
        <Link onClick={scrollToTop}>
          <Heading
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize={{ base: "3xl", lg: "4xl" }}
            fontWeight="extrabold"
          >
            Sherry's Portfolio
          </Heading>
        </Link>
      </GridItem>

      <GridItem alignContent="center" display={{ base: "none", lg: "block" }}>
        <HStack justifyContent="end" spacing={10}>
          <Link onClick={scrollToTop} fontSize="xl" color="white">
            Home
          </Link>
          <Link
            onClick={() => scrollToSection("about")}
            fontSize="xl"
            color="white"
          >
            About
          </Link>
          <Link
            onClick={() => scrollToSection("skills")}
            fontSize="xl"
            color="white"
          >
            Skills
          </Link>
          <Link
            onClick={() => scrollToSection("projects")}
            fontSize="xl"
            color="white"
          >
            Projects
          </Link>
          <ResumeButton />
        </HStack>
      </GridItem>

      <GridItem
        display={{ base: "block", lg: "none" }}
        justifySelf="flex-end"
        alignContent="center"
      >
        <HStack spacing={4}>
          <ResumeButton />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon color="white" />}
              variant="outline"
              mr={2}
            />
            <MenuList minWidth="150px">
              <MenuItem fontWeight="bold">
                <Link onClick={scrollToTop}>Home</Link>
              </MenuItem>
              <MenuItem fontWeight="bold">
                <Link href="#about">About</Link>
              </MenuItem>
              <MenuItem fontWeight="bold">
                <Link href="#skills">Skills</Link>
              </MenuItem>
              <MenuItem fontWeight="bold">
                <Link href="#project">Projects</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default NavBar;
