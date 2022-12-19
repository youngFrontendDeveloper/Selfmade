import "./Main.scss";
import React from "react";
import Statistics from "../Statistics/Statistics";
import Respect from "../Respect/Respect";
import Chart from "../Chart/Chart";

function Main() {
  return (
    <main className="main">
      <div className="container container--wrap main__container">
        <Respect/>
        <Chart />
        <Statistics/>
      </div>
    </main>
  );
}

export default Main;
