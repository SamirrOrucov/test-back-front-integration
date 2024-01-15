import React, { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import "./BasketPage.scss"
import { Helmet } from "react-helmet-async";
function BasketPage() {
const {basket ,deleteBasket} = useContext(BasketContext)
  return (
    <>
    <div>  
        <Helmet>
        <title>Basket | New Flowers in Bag!</title>

        </Helmet>
        
        </div>
   <div className="basketContainer">
   {
        basket.map((x)=>
          <div className="card" key={x._id}>
      <div className="image">
        <img src={x.image} alt="" />
      </div>
      <div className="info">
      <div className="title">{x.title}</div>
      <div className="price">{x.price}</div>
      <div className="delete"> <i  onClick={()=>deleteBasket(x)} class="fa-solid fa-xmark"></i></div>
      </div>
      </div>
        )
    }
   </div>
    
    </>
  );
}

export default BasketPage;
