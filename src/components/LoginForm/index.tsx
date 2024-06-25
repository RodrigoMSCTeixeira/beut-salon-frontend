import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const toast = useToast();

  function handleLogin() {
    toast({
      title: "Logged in.",
      description: "You have successfully logged in.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  }

  function handleClear() {
    setName("");
    setEmail("");
    setPhone("");
  }

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
    >
      <Box
        maxW={{ base: "90%", sm: "md" }}
        width="100%"
        mx="auto"
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
      >
        <Heading mb={6} textAlign="center">
          Acessar
        </Heading>
        <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Nome</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Telefone</FormLabel>
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="teal" width="full" onClick={handleLogin}>
            Acessar
          </Button>
          <Button width="full" onClick={handleClear}>
            Limpar
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}
