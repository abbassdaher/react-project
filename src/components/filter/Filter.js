import React, { useState } from "react";
import "./Filter.css";

const Filter = ({filterName}) => {
  const [itemsFiltered, setItemsFiltered] = useState("");

  const filterHandler = (e) => {
    setItemsFiltered(e.target.value)
    // console.log(itemsFiltered);
    filterName(e.target.value)
  };

  return (
    <div className="mb">
      <input
        type="text"
        placeholder="enter the name"
        value={itemsFiltered}
        onChange={filterHandler}
      />
    </div>
  );
};

export default Filter;
