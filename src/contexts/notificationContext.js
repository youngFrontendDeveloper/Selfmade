import { createContext } from "react";

export const NotificationContext = createContext( {} );

export const NotificationContextProvider = ({ children }) => {
  const notifications = [
    {
      id: "not-0",
      time: "15.12.2022",
      text: "Вход в профиль с другого устройства",
    },
    {
      id: "not-1",
      time: "16.12.2022",
      text: "Скидки 10% при покупке Премиум-аккаунта",
    },
  ];

  return <NotificationContext.Provider value={ notifications }>{ children }</NotificationContext.Provider>;
};