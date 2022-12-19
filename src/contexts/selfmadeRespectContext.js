import { createContext, useMemo, useState } from "react";

export const SelfmadeRespectContext = createContext( {} );

export const SelfmadeRespectContextProvider = ({ children }) => {
  const [ selfmadeRespect, setSelfmadeRespect ] = useState( [
    {
      title: "Профиль",
      color: "#A5A6F6",
      meaning: 100,
      index: 0,
    },
    {
      title: "Портфолио",
      color: "#F178B6",
      meaning: 50,
      index: 1,
    },
    {
      title: "SR ФРЕШ",
      color: "#3AC49F",
      meaning: 100,
      index: 2,
    },
    {
      title: "SR ПРО",
      color: "#5D5FEF",
      meaning: 100,
      index: 3,
    },
    {
      title: "SR ТОП",
      color: "#EF5DA8",
      meaning: 10,
      index: 4,
    },

  ] );

  const srData = {
    total: 134,
    filled: 74,
    forDay: 10,
    forMonth: 935,
    forYear: 17849,
  };

  const value = useMemo( () => ( {
    selfmadeRespect,
    setSelfmadeRespect,
    srData
  } ), [ selfmadeRespect, srData ] );


  return <SelfmadeRespectContext.Provider value={ value }>{ children }</SelfmadeRespectContext.Provider>;
};