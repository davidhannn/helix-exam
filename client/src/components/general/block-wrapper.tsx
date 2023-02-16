import { PropsWithChildren } from "react";
import "../../styles/block.scss";

type Props = {
  styles?: {};
};

const BlockWrapper: React.FC<PropsWithChildren & Props> = ({
  children,
  styles,
}: PropsWithChildren & Props) => {
  return (
    <div
      style={
        styles ?? {
          backgroundColor: "white",
          padding: 24,
          borderRadius: 25,
          marginBottom: 24,
        }
      }
      // className={styles.block}
    >
      {children}
    </div>
  );
};

export default BlockWrapper;
