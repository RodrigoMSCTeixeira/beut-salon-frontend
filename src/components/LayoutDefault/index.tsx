import React, { JSXElementConstructor, ReactElement } from "react";
import styles from "./layoutDefault.module.css";
import Container from "../Container";

interface ILayoutDefaultProps {
  children: React.ReactElement;
}

export default function LayoutDefault({ children }: ILayoutDefaultProps) {
  return (
    <>
      <main>
        <section>
          <Container>{children}</Container>
        </section>
      </main>
    </>
  );
}
