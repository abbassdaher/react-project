import React, { useState, useRef } from "react";
import "./App.css";
import CardsList from "../cardsList/CardsList";
import Filter from "../filter/Filter";
import Modal from "../Modal/Modal";

function App() {
  const [showModal, setModal] = useState(false);
  const inputElement = useRef(null);
  const [toggleCard, setTogleCard] = useState(true);
  const [state, setState] = useState([
    {
      id: 0,
      name: "abbass daher",
      address: "beirut-Lebanon",
      phone: "70782818",
      gender: "male",
    },
    {
      id: 1,
      name: "houssen daher",
      address: "beirut",
      phone: "70123456",
      gender: "male",
    },
    {
      id: 2,
      name: "mahdi daher",
      address: "beirut",
      phone: "70111111",
      gender: "male",
    },
    {
      id: 3,
      name: "ali daher",
      address: "beirut",
      phone: "702222",
      gender: "male",
    },
    {
      id: 4,
      name: "Nadin Daher",
      address: "beirut-Lebanon",
      phone: "70782818",
      gender: "female",
    },
    {
      id: 5,
      name: "elena Daher",
      address: "beirut",
      phone: "70123456",
      gender: "female",
    },
  ]);
  const [filter, setFilter] = useState("");
  // const male = ;
  // const female = [
  //   { name: "Nadin Daher", address: "beirut-Lebanon", phone: "70782818", gender:"female" },
  //   { name: "elena Daher", address: "beirut", phone: "70123456", gender:"female" },
  // ];
  /**
   * The deleteHandler function removes an item from an array and updates the state.
   * @param e - The 'e' parameter is an event object that represents the event that triggered the
   * deleteHandler function. It can be used to access information about the event, such as the target
   * element that triggered the event.
   * @param indexOfDeletedItem - The `indexOfDeletedItem` parameter is the index of the item that needs
   * to be deleted from the `state` array.
   */
  // const deleteHandeler = (e, indexOfDeletedItem) => {
  //   // const listOfNames = state.filter(
  //   //   (element, index) => index !== indexOfDeletedItem
  //   // );
  //   // setState(listOfNames);

  //   /* The code `setState((prevState) => {
  //     return prevState.filter((elelment, idx) => idx !== indexOfDeletedItem);
  //   });` is using the `setState` function provided by the `useState` hook in React to update the
  //   state of the component. */
  //   setState((prevState) => {
  //     return prevState.filter((elelment, idx) => idx !== indexOfDeletedItem);
  //   });

  // };
  const deleteHandeler = (indexOfDeletedItem) => {
    setState((prevState) => {
      return prevState.filter((elelment) => elelment.id !== indexOfDeletedItem);
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

  /**
   * The function `filterName` sets a filter using the provided name.
   * @param name - The `name` parameter is a variable that represents the name that will be used for
   * filtering.
   */
  const filterName = (name) => {
    setFilter(name);
  };
  /**
   * The function filters an array of objects based on a given filter value.
   * @returns The function `namesHandler` returns a filtered array of objects from the `state` array
   * based on the `filter` value. If the `filter` value is not empty, it filters the `state` array
   * based on the `name` property of each object that includes the `filter` value. If the `filter`
   * value is empty, it returns the original `state` array.
   */
  const namesHandler = () => {
    if (filter.length != 0) {
      return state.filter((e) => e.name.includes(filter));
    }
    return state;
  };

  return (
    <div className="container">
      <div className="buttonContainer">
        <button className="toggleCardsBTN" onClick={toggleHandler}>
          {toggleCard ? "hide record" : "show record"}
        </button>
        <button className="createModalBTN" onClick={() => setModal(true)}>
          new record
        </button>
      </div>

      <div className={toggleCard ? "show" : "hide"}>
        <Filter filterName={filterName} />
        <CardsList list={namesHandler()} deleteHandeler={deleteHandeler} />
      </div>
      <Modal show={showModal} close={()=>setModal(false)}/>
    </div>
  );
}

export default App;
