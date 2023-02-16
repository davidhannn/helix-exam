import { PropsWithChildren } from "react";
import "../../styles/block.scss";

const BlockWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 24,
        borderRadius: 25,
        marginBottom: 24,
      }}
      // className={styles.block}
    >
      {children}
    </div>
  );
};

export default BlockWrapper;
