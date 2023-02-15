import { PropsWithChildren } from "react";
import styles from "../../styles/blockWrapper.module.css";

const BlockWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.blockWrapperContainer}>{children}</div>;
};

export default BlockWrapper;
