import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
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

const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      padding={5}
      bg="black"
      width="100%"
      maxWidth="100vw"
      overflow="hidden"
    >
      <GridItem>
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={{ base: "3xl", lg: "4xl" }}
          fontWeight="extrabold"
        >
          Sherry's Portfolio
        </Heading>
      </GridItem>

      <GridItem alignContent="center" display={{ base: "none", lg: "block" }}>
        <HStack justifyContent="end" spacing={10}>
          <Button
            as="a"
            variant="link"
            fontSize="xl"
            color="white"
            onClick={scrollToTop}
          >
            Home
          </Button>
          <Link href="#about">
            <Button as="a" variant="link" fontSize="xl" color="white">
              About
            </Button>
          </Link>
          <Link href="#skills">
            <Button as="a" variant="link" fontSize="xl" color="white">
              Skills
            </Button>
          </Link>
          <Link href="#skills">
            <Button
              as="a"
              href="#project"
              variant="link"
              fontSize="xl"
              color="white"
            >
              Projects
            </Button>
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
                <Link href="#about">Skills</Link>
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
