import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cancel.css';
import Cancel_form from './cancel_form';

function Home() {
  const navigate = useNavigate();

  const nav = () => {
    navigate('/Cancel_form');
  };

  return (
    <div>
      <h1 className="header">Your Orders</h1>
      <div className='order_container'>
        <img className='img_order' src='https://m.media-amazon.com/images/I/61+pdg8CfmL._AC_UL480_FMwebp_QL65_.jpg' alt='Order 1'/>
        <div className='order_details'>
          <p><strong>Order Name:</strong> Example Order 1</p>
          <p><strong>Order Date:</strong> 2024-05-01</p>
          <p><strong>Amount:</strong> $100</p>
          <p><strong>Shipping ID:</strong> 123456</p>
        </div>
        <div>
          <button className="cancel_button">Tracking ID</button><br></br>
          <button className="cancel_button">Delivered</button>
          <button className='cancel_button' onClick={nav}>Cancel Order</button>
        </div>
      </div>
      <br /><br />
      <div className='order_container'>
        <img className='img_order' src='https://m.media-amazon.com/images/I/51rI+jSqx5L._AC_UL480_FMwebp_QL65_.jpg' alt='Order 2'/>
        <div className='order_details'>
          <p><strong>Order Name:</strong> Example Order 2</p>
          <p><strong>Order Date:</strong> 2024-05-02</p>
          <p><strong>Amount:</strong> $200</p>
          <p><strong>Shipping ID:</strong> 789012</p>
        </div>
        <div>
          <button className="cancel_button">Tracking ID</button><br></br>
          <button className="cancel_button">Delivered</button>
          <button className='cancel_button' onClick={nav}>Cancel Order</button>
        </div>
      </div>
      <br /><br />
      <div className='order_container'>
        <img className='img_order' src='https://m.media-amazon.com/images/I/71Q46li47mL._AC_UL480_FMwebp_QL65_.jpg' alt='Order 3'/>
        <div className='order_details'>
          <p><strong>Order Name:</strong> Example Order 3</p>
          <p><strong>Order Date:</strong> 2024-05-02</p>
          <p><strong>Amount:</strong> $300</p>
          <p><strong>Shipping ID:</strong> 789013</p>
        </div>
        <div>
          <button className="cancel_button">Tracking ID</button><br></br>
          <button className="cancel_button">Delivered</button>
          <button className='cancel_button' onClick={nav}>Cancel Order</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
