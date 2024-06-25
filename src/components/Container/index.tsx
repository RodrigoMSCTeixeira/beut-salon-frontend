import { ReactNode } from "react";
import { Box, BoxProps, useTheme } from "@chakra-ui/react";

interface ContainerProps extends BoxProps {
  children: ReactNode;
}

export default function Container({ children, ...rest }: ContainerProps) {
  const theme = useTheme();

  return (
    <Box
      width="100%"
      maxWidth={theme.sizes.container.lg}
      mx="auto"
      px={{ base: "4", md: "8" }}
      {...rest}
    >
      {children}
    </Box>
  );
}
