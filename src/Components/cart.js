import './cart.css';
import cartdata from './cartdatafile';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCartData(cartdata);
    calculateTotal(cartdata);
  }, []);

  const calculateTotal = (data) => {
    const totalAmount = data.reduce((acc, item) => acc + item.MRP * (item.quantity || 1), 0);
    setTotal(totalAmount);
  };

  const handleQuantityChange = (index, quantity) => {
    const newCartData = [...cartData];
    newCartData[index].quantity = quantity;
    setCartData(newCartData);
    calculateTotal(newCartData);
  };

  const handleDeleteItem = (index) => {
    const newCartData = cartData.filter((_, i) => i !== index);
    setCartData(newCartData);
    calculateTotal(newCartData);
  };
  const addressk=()=>{
    navigate('/ShippingAddress',{state:{total}})
}

  const returnToHome = () => {
    navigate('/Products');
  };

  return (
    <div className='cart-container'>
      <div className="cart-wrapper">
        <div className="cart-header">
          <center>
            <h1 style={{ color: "orange" }}>Shopping Cart</h1>
            <hr />
          </center>
        </div>

        {cartData.length === 0 ? (
          <center>
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png" alt="Empty Cart" />
          </center>
        ) : (
          cartData.map((item, index) => (
            <div key={index} className='cart-item'>
              <div className='cart-container'>
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th width="20%"></th>
                      <th width="26%">Product</th>
                      <th width="18%">Price</th>
                      <th width="18%">Quantity</th>
                      <th width="18%">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowSpan={2}><img className="cart-image" src={item.imgurl1} alt={item.name} /></td>
                      <td>{item.name}</td>
                      <td>₹{item.MRP}</td>
                      <td>
                        <input
                          style={{ width: "100%", textAlign: "center" }}
                          type="number"
                          min="1"
                          value={item.quantity || 1}
                          onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                        />
                      </td>
                      <td>₹{item.MRP * (item.quantity || 1)}</td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="update-button-cell">
                        <button className='update-cart-button' onClick={() => handleDeleteItem(index)}>Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-summary">
        <h2>Cart Total</h2>
        <div>
          <span className="cart-left-text">Subtotal:</span>
          <span className="cart-right-text">₹{total}</span>
        </div>
        <div className="shipping">
          <span className="cart-left-text">Shipping:</span>
          <span className="cart-right-text">Enter your address to view shipping options | Calculate shipping</span>
        </div>
        <br />
        <div className="total-final">
          <span className="cart-left-text">Total:</span>
          <span className="cart-right-text">₹{total}</span>
        </div>
        <center>
          <button onClick={returnToHome}>Back to Home</button><br></br><br></br>
          <button onClick={addressk}>Proceed to Checkout ({cartData.length}) </button>
        </center>
      </div>
    </div>
  );
}

export default Cart;
