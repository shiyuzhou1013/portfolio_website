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
import { useState } from "react";

const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [buttonText, setButtonText] = useState("Resume");

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      padding={5}
      position="fixed"
      top="0"
      zIndex="1000"
      bg="black"
      width="100%"
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
        <HStack justifyContent="end" spacing={100}>
          <Button
            variant="link"
            fontSize="xl"
            color="white"
            onClick={scrollToTop}
          >
            Home
          </Button>
          <Link href="#about">
            <Button variant="link" fontSize="xl" color="white">
              About
            </Button>
          </Link>
          <Link href="#project">
            <Button variant="link" fontSize="xl" color="white">
              Projects
            </Button>
          </Link>
          <Button
            as="a"
            href="/Resume.pdf"
            download="Resume.pdf"
            color="white"
            fontSize="lg"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            _hover={{
              bgGradient: "linear(to-l, #6c22b6, #e60074)",
            }}
            onMouseEnter={() => setButtonText("Download")}
            onMouseLeave={() => setButtonText("Resume")}
          >
            {buttonText}
          </Button>
        </HStack>
      </GridItem>

      <GridItem
        display={{ base: "block", lg: "none" }}
        justifySelf="flex-end"
        alignContent="center"
      >
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
              <Link href="#project">Projects</Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Button
          as="a"
          href="/Resume.pdf"
          download="Resume.pdf"
          color="white"
          fontSize="lg"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          _hover={{
            bgGradient: "linear(to-l, #6c22b6, #e60074)",
          }}
          onMouseEnter={() => setButtonText("Download")}
          onMouseLeave={() => setButtonText("Resume")}
        >
          {buttonText}
        </Button>
      </GridItem>
    </Grid>
  );
};

export default NavBar;
