import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
    const location = useLocation();
    const { address } = location.state || {};
    
    const {total}=location.state || {};
    const [paymentType, setPaymentType] = useState('');
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardHolderName: '',
        expiryDate: '',
        cvv: ''
    });
    var gst=total*0.02;
    var famount=total+gst;
    if(total<500)
        {
            famount=famount+50;
        }
    const [upiId, setUpiId] = useState('');

    const handlePaymentTypeChange = (event) => {
        setPaymentType(event.target.value);
    };

    const handleCardDetailsChange = (event) => {
        const { name, value } = event.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    const handleUpiIdChange = (event) => {
        setUpiId(event.target.value);
    };

    const handlePay = () => {
        if (paymentType === 'card') {
            alert('Paying with Card: ' + JSON.stringify(cardDetails));
        } else if (paymentType === 'upi') {
            alert('Paying with UPI ID: ' + upiId);
        } else if (paymentType === 'cod') {
            alert('Cash on Delivery selected.');
        }
    };

    return (
        <div className="containerk">
            <div className="payment-container">
                <div className="payment-section">
                    <div className="address-section">
                        <h2>1.Selected Address</h2>
                        <p id="selected-address">{address.name}<br></br>{address.houseNumber}<br></br>{address.area}<br></br>{address.landmark}<br></br> {address.town},{address.state},{address.place}<br></br>{address.number}</p>
                    </div>
                    <h2>2.Select Payment Type</h2>
                    <div className="payment-options">
                        <label>
                            <input type="radio" name="payment-type" value="card" onChange={handlePaymentTypeChange} /> Card
                        </label>
                        <label>
                            <input type="radio" name="payment-type" value="upi" onChange={handlePaymentTypeChange} /> UPI
                        </label>
                        <label>
                            <input type="radio" name="payment-type" value="cod" onChange={handlePaymentTypeChange} /> Cash on Delivery
                        </label>
                    </div>
                    <div id="payment-details">
                        {paymentType === 'card' && (
                            <div className="card-details">
                                <input style={{width:"95%"}}
                                    type="text"
                                    name="cardNumber"
                                    placeholder="Card Number"
                                    value={cardDetails.cardNumber}
                                    onChange={handleCardDetailsChange}
                                />
                                <input style={{width:"95%"}}
                                    type="text"
                                    name="cardHolderName"
                                    placeholder="Card Holder Name"
                                    value={cardDetails.cardHolderName}
                                    onChange={handleCardDetailsChange}
                                />
                                <input style={{width:"95%"}}
                                    type="text"
                                    name="expiryDate"
                                    placeholder="Expiry Date (MM/YY)"
                                    value={cardDetails.expiryDate}
                                    onChange={handleCardDetailsChange}
                                />
                                <input style={{width:"95%"}}
                                    type="password"
                                    name="cvv"
                                    placeholder="CVV"
                                    value={cardDetails.cvv}
                                    onChange={handleCardDetailsChange}
                                />
                                <button onClick={handlePay} className="pay-button">Pay &#8377;{famount}</button>
                            </div>
                        )}
                        {paymentType === 'upi' && (
                            <div className="upi-details">
                                <input style={{width:"97%"}}
                                    type="text"
                                    name="upiId"
                                    placeholder="UPI ID"
                                    value={upiId}
                                    onChange={handleUpiIdChange}
                                />
                                <button onClick={handlePay} className="pay-button">Pay &#8377;{famount}</button>
                            </div>
                        )}
                        {paymentType === 'cod' && (
                            <div className="cod-details">
                                <button onClick={handlePay} className="pay-button">Pay &#8377;{famount}</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <p>Item_cost: &#8377;{total}</p>
                    <p>Shipping: &#8377;{total>=500 ? 0:50 }</p>
                    <p>GST: &#8377;{gst}</p>
                    <hr></hr>
                    <h3>Total:&nbsp;&nbsp;&nbsp; &#8377;{famount}</h3>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
