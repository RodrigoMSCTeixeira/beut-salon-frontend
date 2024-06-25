import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" bg="teal.500" color="white" py={4} textAlign="center">
      <Text>&copy; {currentYear} BeutSalon. Todos os direitos reservados.</Text>
    </Box>
  );
}
