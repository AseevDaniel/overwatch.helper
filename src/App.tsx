import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";

function App() {
  // console.log(
  //   heroes.map((h) => {
  //     return {
  //       ...h,
  //       goodAgainst: heroes
  //         .filter((hero) => {
  //           return hero.counteredBy.includes(h.id);
  //         })
  //         .map((hero) => hero.id),
  //     };
  //   })
  // );
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
