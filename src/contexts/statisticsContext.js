import { createContext, useState, useMemo } from "react";

export const StatisticsContext = createContext( {} );

export const StatisticsContextProvider = ({ children }) => {
  const [ statistics, setStatistics ] = useState( [
    {
      id: "stat-0",
      title: "Уникальные визиты",
      user: 12,
      anonymous: 33,
      all: 60,
    },
    {
      id: "stat-1",
      title: "Просмотров контактов",
      user: 2,
      anonymous: 0,
      all: 7,
    },
    {
      id: "stat-2",
      title: "Добавлений в избранное",
      user: 3,
      anonymous: 0,
      all: 13,
    },
    {
      id: "stat-3",
      title: "Просмотров портфолио",
      user: 22,
      anonymous: 87,
      all: 156,
    },
  ] );

  const value = useMemo( () => ( {
    statistics, setStatistics
  } ), [ statistics, setStatistics ] );

  return <StatisticsContext.Provider value={ value }>{ children }</StatisticsContext.Provider>;
};