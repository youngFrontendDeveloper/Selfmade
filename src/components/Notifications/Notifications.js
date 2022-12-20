import "./Notifications.scss";
import React, { useState, useContext, useEffect } from "react";
import { ReactComponent as NotificationsIcon } from "./img/notifications.svg";
import { NotificationContext } from "../../contexts/notificationContext";

function Notifications() {
  const [ isNotification, setNotification ] = useState( false );
  const [ isClicked, setClicked ] = useState( false );
  const notifications = useContext( NotificationContext );

  useEffect( () => {
    if( notifications.length > 0 ) {
      setNotification( true );
    }
  }, [ notifications ] );

  const handleClick = () => {
    setClicked( !isClicked );
    setNotification( false );
  };

  const handleClickClose = () => {
    setClicked( false );
  };

  return (
    <section className="notification__wrap">
      <div className="notification__icon" onClick={ handleClick }>
        <NotificationsIcon className="notification__img"/>
        { isNotification && <div className="notification__point"/> }
      </div>
      {
        isClicked ?
          <div className="notification__text-block">
            <ul className="notification__list">
              {
                notifications.map( item => {

                    return (
                      <li className="notification__item" key={ item.id }>
                        <p className="notification__text">{ item.text }</p>
                        <time dateTime={ item.time } className="notification__date">{ item.time }</time>
                      </li>
                    );
                  }
                )
              }
            </ul>
            <div className="notification__close" onClick={ handleClickClose }/>

          </div>
          : null
      }
    </section>
  );
}

export default Notifications;