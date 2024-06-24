import type { AppProps } from "next/app";
import LayoutDefault from "@/components/LayoutDefault";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutDefault>
      <Component {...pageProps} />
    </LayoutDefault>
  );
}
