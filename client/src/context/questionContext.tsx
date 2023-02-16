import { createContext, useState, PropsWithChildren, useCallback } from "react";
import { DisplayEnum } from "../constants/enums";

type ContextProps = {
  display: DisplayEnum;
  handleClick: (option: DisplayEnum) => void | null;
};

export const QuestionContext = createContext<ContextProps>({
  display: DisplayEnum.NONE,
  handleClick: (option) => {},
});

const QuestionProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [display, setDisplay] = useState<DisplayEnum>(DisplayEnum.NONE);

  const handleClick = useCallback(
    (option: DisplayEnum) => {
      setDisplay(option);
    },
    [display]
  );

  // const handleSubmit = useCallback(() => {}, []);
  // const postQuestion = useCallback(() => {

  // }, [])

  return (
    <QuestionContext.Provider value={{ display, handleClick }}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
