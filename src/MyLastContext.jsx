import React, { createContext } from "react";
export const MyLastFullContext = createContext();

const MyLastContextProCom = ({ children }) => {
  return (
    <MyLastFullContext.Provider value={"this is last context"}>
      {children}
    </MyLastFullContext.Provider>
  );
};

export default MyLastContextProCom;
