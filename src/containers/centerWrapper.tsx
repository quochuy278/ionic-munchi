import * as React from "react";
import styles from "./centerWrapper.module.css";

type Props = { children: React.ReactNode };

const CenterWrapper: React.FC<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default CenterWrapper;
