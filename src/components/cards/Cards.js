import React from "react";
import "./Cards.css"
export const Cards = ({ list, color}) => {
  const cards = list.map(({ name, address, phone }, index) => (
    <div className="card" key={index} style = {{ backgroundColor: color }} >
      <div>Name:{name}</div>
      <div>Address: {address}</div>
      <div>Phone: {phone} </div>
      <div className="deleteBTN">x</div>
    </div>
  ));
  return <div >{cards}</div>;
};
