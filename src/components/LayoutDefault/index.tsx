import React from "react";
import Header from "../Header";
import Container from "../Container";
import Footer from "../Footer";

interface ILayoutDefaultProps {
  children: React.ReactElement;
}

export default function LayoutDefault({ children }: ILayoutDefaultProps) {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container>{children}</Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
