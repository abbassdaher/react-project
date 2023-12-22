import React from "react";
import "./Cards.css"
export const Cards = ({ list, color, deleteHandeler}) => {
  const cards = list.map(({ name, address, phone }, index) => (
    <div className="card" key={index} style = {{ backgroundColor: color }} >
      <div>Name:{name}</div>
      <div>Address: {address}</div>
      <div>Phone: {phone} </div>
      <div className="deleteBTN" onClick={(event)=>deleteHandeler(event,index)}>x</div>
    </div>
  ));
  return <div >{cards}</div>;
};
