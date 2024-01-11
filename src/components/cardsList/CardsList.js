import React from "react";
import Card from "../Card/Card";

const CardsList = ({ list, deleteHandeler }) => {
  const cards = list.map(({ ...otherProps }) => (
    <Card {...otherProps} deleteHandeler={deleteHandeler} />
  ));
  return <div>{cards}</div>;
};
export default CardsList;
