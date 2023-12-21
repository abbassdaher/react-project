import React ,{useState} from "react";
import "./App.css";
import { Cards } from "../cards/Cards";

function App() {
  const [state, setState] = useState([
    { name: "Abbass Daher", address: "beirut-Lebanon", phone: "70782818" },
    { name: "Houssen Daher", address: "beirut", phone: "70123456" },
    { name: "Mahdi Daher", address: "beirut", phone: "70111111" },
    { name: "Ali Daher", address: "beirut", phone: "702222" },
  ])
  // const male = ;
  const female = [
    { name: "Nadin Daher", address: "beirut-Lebanon", phone: "70782818" },
    { name: "elena Daher", address: "beirut", phone: "70123456" },
  ];

  return (
    <div className="container">
      <Cards list={state} color="aqua" />
      <Cards list={female} color="pink" />
    </div>
  );
}

export default App;
