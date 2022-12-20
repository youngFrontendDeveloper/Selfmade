import "./Main.scss";
import React from "react";
import Statistics from "../Statistics/Statistics";
import Respect from "../Respect/Respect";
import Chart from "../Chart/Chart";
import Container from "../Container/Container";

function Main() {
  const containerClasses = "container container--wrap main__container";

  return (
    <main className="main">
      <Container containerClasses={ containerClasses }>
        <Respect/>
        <Chart/>
        <Statistics/>
      </Container>
    </main>
  );
}

export default Main;
