import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const [allProduct, setAllProduct] = useState([]);
  const [singleItem, setSingleItem] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setAllProduct(data);
    };
    fetchProducts();
  }, []);

  // Adding cart items to localstorage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    if (items) {
      setCartItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // adding items to cart
  // const handleAdd = (item) => {
  //    const itemInCart = cartItems.find((cartitem) => cartitem.id === item.id);

  //   if (!itemInCart) {
  //     setCart((it) => [...it, item]);
  //     localStorage.setItem("items", JSON.stringify(cart));
  //     console.log(item);
  //   } else {
  //     return;
  //   }
  // };

  const handleAdd = (item) => {
    const itemInCart = cartItems.find((cartitem) => cartitem.id === item.id);

    if (!itemInCart) {
      setCartItems((pre) => [...pre, item]);
    } else {
      return;
    }

    console.log(itemInCart);
  };

  // removing item from cart
  const handleRemove = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  };

  const singleVeiw = (product) => {
    setSingleItem(allProduct.filter((item) => item.id === product.id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAdd,
        handleRemove,
        singleVeiw,
        allProduct,
        singleItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
