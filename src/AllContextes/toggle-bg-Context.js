import React, { useContext, useState } from "react";

//creating a context
const ToogleContext = React.createContext();

//creating a Component for context
const ToogleProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState({
    isHome: true,
    isAdd: false,
    isInfo: false,
  });
  const AddIsHome = () => {
    return setBgColor({ isHome: true, isAdd: false, isInfo: false });
  };
  const AddIsAdd = () => {
    return setBgColor({ isHome: false, isAdd: true, isInfo: false });
  };
  const AddIsInfo = () => {
    return setBgColor({ isHome: false, isAdd: false, isInfo: true });
  };

  return (
    <ToogleContext.Provider value={{ bgColor, AddIsAdd, AddIsHome, AddIsInfo }}>
      {children}
    </ToogleContext.Provider>
  );
};

//using custom hook for the reducing the code
export const useToogleContext = () => {
  return useContext(ToogleContext);
};

export { ToogleContext, ToogleProvider };
