import React, { useContext } from "react";
import "./OurFlowersCard.scss"
import { BasketContext } from "../../../context/BasketContext";
function OurFlowersCard({ image, title, price,item }) {
  const {addBasket}=useContext(BasketContext)
  return (
    <div className="cardsClass">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="info">
      <div className="title">{title}</div>
      <div className="price">{price}</div>
      <i onClick={()=>addBasket(item)} className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
}

export default OurFlowersCard;
