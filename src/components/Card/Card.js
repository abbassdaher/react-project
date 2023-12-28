import React from 'react'
import "./Card.css"
const Card = ({id, name, address, phone, gender,deleteHandeler }) => {
  return (
    
    <div className="card"  style = {{ backgroundColor: gender == "male"? "aqua":"pink" }} >
    <div className="name">Name:{name}</div>
    <div>Address: {address}</div>
    <div>Phone: {phone} </div>
    <div className="deleteBTN" onClick={()=>deleteHandeler(id)}>x</div>
  </div>
    
  )
}

export default Card
