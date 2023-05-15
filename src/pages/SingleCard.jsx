import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const SingleCard = () => {
  const { singleItem, handleAdd } = useContext(CartContext);
  console.log(singleItem, "Single Item");
  return (
    <div>
      {singleItem.map((item) => (
        <div className="mainSingleDiv" key={item.id}>
          <div>
            <img className="imgSty" src={item.image} alt="profile" />
          </div>

          <div
            style={{
              color: "#CAD5E2",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "30px",
            }}
          >
            <p>{item.title}</p>
            <h2>Price-${item.price}</h2>
            <p>{item.description}</p>

            <p className="btn">Rating-{item.rating?.rate}</p>
            <p onClick={() => handleAdd(item)} className="btn">
              Add to cart
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCard;
