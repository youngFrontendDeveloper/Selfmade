import { createContext } from "react";

export const DiskFullnessContext = createContext( {} );

export const DiskFullnessContextProvider = ({ children }) => {
  const diskFullnessContext = {
    totalDisk: 100,
    freeDisk: 40,
  };

  return <DiskFullnessContext.Provider value={ diskFullnessContext }>{ children }</DiskFullnessContext.Provider>;
};