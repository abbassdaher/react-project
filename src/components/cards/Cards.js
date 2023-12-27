import React from "react";
import "./Cards.css"
 const Cards = ({ list, deleteHandeler}) => {
  const cards = list.map(({id, name, address, phone, gender }, index) => (
    <div className="card" key={index} style = {{ backgroundColor: gender == "male"? "aqua":"pink" }} >
      <div className="name">Name:{name}</div>
      <div>Address: {address}</div>
      <div>Phone: {phone} </div>
      <div className="deleteBTN" onClick={()=>deleteHandeler(id)}>x</div>
    </div>
  ));
  return <div >{cards}</div>;
};
export default Cards;
// 
