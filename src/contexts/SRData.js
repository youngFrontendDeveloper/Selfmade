import { createContext,  } from "react";

export const SRDataContext = createContext( {} );

export const SRDataContextProvider = ({ children }) => {
  const srData = {
    total: 134,
    filled: 74,
    forDay: 10,
    forMonth: 935,
    forYear: 17849,
  };


  return <SRDataContext.Provider value={ srData }>{ children }</SRDataContext.Provider>;
};