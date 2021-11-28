import { Box, Link, Text, Stack, Flex, IconButton } from "@chakra-ui/react";
import { FunctionComponent, MouseEventHandler, useState } from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./logo";

// Inspired by https://raptis.wtf/blog/create-a-navbar-with-chakra-ui-react

export const MenuToggle: FunctionComponent<{
  toggle: MouseEventHandler;
  isOpen: boolean;
}> = ({ toggle, isOpen }) => {
  return (
    <>
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        <IconButton
          aria-label="Toggle Menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        />
      </Box>
    </>
  );
};

export const MenuItem: FunctionComponent<{
  isLast?: boolean;
  to?: string;
}> = ({ children, isLast = false, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest} fontSize="xl">
        {children}
      </Text>
    </Link>
  );
};

export const ShogiMenu: FunctionComponent = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Box boxShadow="md" p="1">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        padding="1rem 3rem"
        {...props}
      >
        <Logo
          w="150px"
          onClick={() => {
            window.location.assign("/");
          }}
          _hover={{ cursor: "pointer" }}
        />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Stack
            spacing={8}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
            <MenuItem>Home</MenuItem>
            <MenuItem to="/tutorial/about">About Shogi</MenuItem>
            <MenuItem to="/tutorial/board">Board</MenuItem>
            <MenuItem to="/tutorial/pieces">Pieces</MenuItem>
            <MenuItem to="/tutorial/pieces/promotion">Promotion rules</MenuItem>
            <MenuItem to="/tutorial/board/endgame">Endgame</MenuItem>
            <MenuItem to="/analysis">Analysis</MenuItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};
