import React from "react";
import "./App.css";
import Navigation from "./Componets/Navigation/Navigation";
import Note from "./Componets/Note/Note";
import Footer from "./Componets/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />

      <div className="row">
        <Note
          title={"Alex and Wigman Treasure"}
          body={
            "This book is about a girl called Alex who learnt fencing the hard way"
          }
        />
        <Note
          title={"Davinci Code"}
          body={"This book is about conspiracies"}
          color="gold"
        />
        <Note title={"GoodTimes"} body={"This is like London Real"} />
        <Note title={"BadTimes"} body={"This is a forged book"} />
        <Note
          title={"Personal MBA"}
          body={"How to get your MBA without going to school"}
        />
        <Note
          title={"Software Architecture"}
          body={
            "Written by the person I look up to - Robert C Martin aka Uncle Bob"
          }
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
