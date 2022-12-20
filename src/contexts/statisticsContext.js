import { createContext, useState, useMemo } from "react";

export const StatisticsContext = createContext( {} );

export const StatisticsContextProvider = ({ children }) => {
  const [ statistics, setStatistics ] = useState( [
    {
      title: "Уникальные визиты",
      user: 12,
      anonymous: 33,
      all: 60,
    },
    {
      title: "Просмотров контактов",
      user: 2,
      anonymous: 0,
      all: 7,
    },
    {
      title: "Добавлений в избранное",
      user: 3,
      anonymous: 0,
      all: 13,
    },
    {
      title: "Просмотров портфолио",
      user: 22,
      anonymous: 87,
      all: 156,
    },
  ] );

  const value = useMemo( () => ( {
    statistics, setStatistics
  } ) );

  return <StatisticsContext.Provider value={ value }>{ children }</StatisticsContext.Provider>;
};