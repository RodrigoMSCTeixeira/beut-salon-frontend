import React, { ReactElement } from "react";
import styles from "./Container.module.css";

interface IContainerProps {
  children: React.ReactElement;
}

export default function Container({ children }: IContainerProps) {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
}
