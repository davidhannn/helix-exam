import { createContext, useState, PropsWithChildren, useCallback } from "react";

type ContextProps = {
  display: boolean;
  handleClick: () => void | null;
};

export const QuestionContext = createContext<ContextProps>({
  display: false,
  handleClick: () => {},
});

const QuestionProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [display, setDisplay] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    // console.log("pressed?");
    setDisplay(!display);
  }, [display]);

  return (
    <QuestionContext.Provider value={{ display, handleClick }}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
