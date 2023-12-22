import React, { useState } from "react";
import "./App.css";
import { Cards } from "../cards/Cards";

function App() {
  const [toggleCard,setTogleCard] = useState(false)
  const [state, setState] = useState([
    { name: "Abbass Daher", address: "beirut-Lebanon", phone: "70782818" },
    { name: "Houssen Daher", address: "beirut", phone: "70123456" },
    { name: "Mahdi Daher", address: "beirut", phone: "70111111" },
    { name: "Ali Daher", address: "beirut", phone: "702222" },
  ]);
  // const male = ;
  const female = [
    { name: "Nadin Daher", address: "beirut-Lebanon", phone: "70782818" },
    { name: "elena Daher", address: "beirut", phone: "70123456" },
  ];
  /**
   * The deleteHandler function removes an item from an array and updates the state.
   * @param e - The 'e' parameter is an event object that represents the event that triggered the
   * deleteHandler function. It can be used to access information about the event, such as the target
   * element that triggered the event.
   * @param indexOfDeletedItem - The `indexOfDeletedItem` parameter is the index of the item that needs
   * to be deleted from the `state` array.
   */
  const deleteHandeler = (e, indexOfDeletedItem) => {
    // const listOfNames = state.filter(
    //   (element, index) => index !== indexOfDeletedItem
    // );
    // setState(listOfNames);
    
    
     /* The code `setState((prevState) => {
      return prevState.filter((elelment, idx) => idx !== indexOfDeletedItem);
    });` is using the `setState` function provided by the `useState` hook in React to update the
    state of the component. */
    setState((prevState) => {
      return prevState.filter((elelment, idx) => idx !== indexOfDeletedItem);
    });
  };

  return (
    <div className="container">
    <button className="toggleCardsBTN" onClick={setTogleCard}>{toggleCard ? "hide" : "show"}</button>
    <div className={toggleCard ? "show" : "hide"}>
    <Cards list={state} color="aqua" deleteHandeler={deleteHandeler} />
    </div>
      
      <Cards list={female} color="pink" />
    </div>
  );
}

export default App;
