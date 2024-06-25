import type { AppProps } from "next/app";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { fonts } from "@/lib/fonts";
import LayoutDefault from "@/components/LayoutDefault";
import theme from "@/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-roboto: ${fonts.roboto.style.fontFamily};
          }
        `}
      </style>
      <ChakraBaseProvider theme={theme}>
        <LayoutDefault>
          <Component {...pageProps} />
        </LayoutDefault>
      </ChakraBaseProvider>
    </>
  );
}
