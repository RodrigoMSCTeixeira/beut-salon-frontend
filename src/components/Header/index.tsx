import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Image from "next/image";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <NextLink href="/" passHref>
            <Image
              src={"/images/png/logo.png"}
              alt="Logomarca do beutSalon"
              width={100}
              height={100}
            />
          </NextLink>
        </Box>
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {/* <NextLink href="/" passHref>
              <Link color="white">Home</Link>
            </NextLink>
            <NextLink href="/about" passHref>
              <Link color="white">About</Link>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Link color="white">Contact</Link>
            </NextLink> */}
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <NextLink href="/" passHref>
              <Link>Home</Link>
            </NextLink>
            <NextLink href="/about" passHref>
              <Link>About</Link>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Link>Contact</Link>
            </NextLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
