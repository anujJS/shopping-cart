import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.js";

const Products = () => {
  const { handleAdd, singleVeiw, allProduct } = useContext(CartContext);

  console.log(allProduct, "All Product");

  return (
    <div className="productsWrapper">
      {allProduct.map((product) => (
        <div className="card" key={product.id}>
          <img style={{ height: "80px" }} src={product.image} alt="p-profile" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <div className="cardDiv">
            <button onClick={() => handleAdd(product)} className="btn">
              Add to cart
            </button>
            <Link
              to="/singleCart"
              onClick={() => singleVeiw(product)}
              className="btn"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
