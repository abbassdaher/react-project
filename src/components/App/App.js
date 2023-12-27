import React, { useState, useRef } from "react";
import "./App.css";
import { Cards } from "../cards/Cards";
import Filter from "../filter/Filter";

function App() {
  const inputElement = useRef(null);
  const [toggleCard, setTogleCard] = useState(true);
  const [state, setState] = useState([
    { name: "abbass daher", address: "beirut-Lebanon", phone: "70782818" },
    { name: "houssen daher", address: "beirut", phone: "70123456" },
    { name: "mahdi daher", address: "beirut", phone: "70111111" },
    { name: "ali daher", address: "beirut", phone: "702222" },
  ]);
  const [filter, setFilter] = useState('')
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
  /**
   * The toggleHandler function toggles the value of the togleCard state variable.
   */
  const toggleHandler = () => {
    setTogleCard((prevState) => {
      return !prevState;
    });
  };
  const changeHandler = () => {
    inputElement.current.focus();
    console.log(inputElement.current.value);
  };

  const filterName = (name) => {
  setFilter(name)
  
    // console.log(state.filter(() => state.name == name));
    // console.log(state.filter(()=>state.indexOf(name)));
    // console.log(state.filter(()=>state.indexOf(name)))
    // state.map((e)=>{
    //   if(e.indexOf(name))
  };
  const namesHandler = () => {
    if(filter.length!=0){
    return state.filter((e)=>e.name.includes(filter) );
  }
   return state  
  };

  return (
    <div className="container">
      <button className="toggleCardsBTN" onClick={toggleHandler}>
        {toggleCard ? "hide" : "show"}
      </button>
      <div className={toggleCard ? "show" : "hide"}>
        <Filter filterName={filterName} />
        <Cards list={namesHandler()} color="aqua" deleteHandeler={deleteHandeler} />
      </div>

      <Cards list={female} color="pink" />
    </div>
  );
}

export default App;
