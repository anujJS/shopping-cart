
import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';



const Cart = () => {
   const {handleRemove, cartItems} = useContext(CartContext);
   let initialValue = 0;
   const amout = cartItems.reduce((sum, currentValue) => sum + currentValue.price, initialValue
    
   )
    const amountFinal = +amout.toFixed(2)
    return (
        <div>
            <h3>Cart</h3>
            <div className='cardG'>
            <div className="cartWrapper">
                {cartItems.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img style={{width: "30px"}} src={product.image} alt="" />
                        <h5>{product.title}</h5>
                       <div>
                       <h5>{product.price}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                       </div>
                    </div>
                ))}
                  </div>
                <div className='priceDiv'>
                    <h1>Price Details</h1>
                    <hr />
                    <div className='pricePadding'>
                        <div className='infoPrice'>
                            <p>Price {cartItems.length} items</p>
                            <p>$ {amountFinal}</p>
                        </div>
                        <div className='infoPrice'>
                            <p>Discount</p>
                            <p>$ </p>
                        </div>
                        <div className='infoPrice'>
                            <p>Delivery Charge</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <h3>Total Amount- {amountFinal}</h3>
                    </div>
                </div>
          
            </div>
        </div>
    );
};

export default Cart;