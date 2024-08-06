import React, { useState } from 'react';
import '../styles/Payment.css';
import Footer from '../components/Footer';

const Checkout = () => {
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [paymentDetails, setPaymentDetails] = useState({
    upiId: '',
    netBankingBank: '',
    cardNumber: '',
    cardHolder: '',
    expDate: '',
    cardCVV: '', // Added field for CVV
  });

  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePayClick = async () => {
    if (paymentMethod === 'Card') {
      const response = await fetch('/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 49900, // Amount in smallest currency unit (499.00 INR)
        }),
      });

      const order = await response.json();

      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key ID
        amount: order.amount, // Amount in smallest currency unit
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: order.id,
        handler: function (response) {
          setIsPaymentSuccessful(true);
          console.log(response);
        },
        prefill: {
          name: fullName,
          email: contactInfo.email,
          contact: contactInfo.phoneNumber,
        },
        notes: {
          address: 'Your Company Address',
        },
        theme: {
          color: '#3399cc',
        },
      };
      
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
      // Handle other payment methods
      setIsPaymentSuccessful(true);
    }
  };
  
  const handleClosePopup = () => {
    setIsPaymentSuccessful(false);
  };

  const fullName = `${contactInfo.firstName} ${contactInfo.lastName}`.trim();
  
  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h2>Checkout</h2>
        <p>A checkout is a counter where you pay for things you are buying</p>
        
        <section className="section">
          <h3>Contact Information</h3>
          <div className="contact-info">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={contactInfo.firstName}
              onChange={handleContactChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={contactInfo.lastName}
              onChange={handleContactChange}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              value={contactInfo.phoneNumber}
              onChange={handleContactChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={contactInfo.email}
              onChange={handleContactChange}
            />
          </div>
        </section>

        <section className="section">
          <h3>Payment Method</h3>
          <div className="payment-method">
            {['UPI', 'Netbanking', 'Card'].map((method) => (
              <button
              key={method}
              className={`payment-option ${paymentMethod === method ? 'selected' : ''}`}
              onClick={() => handlePaymentChange(method)}
              >
                {method}
              </button>
            ))}
          </div>
        </section>

        {paymentMethod === 'UPI' && (
          <section className="section payment-details">
            <h3>UPI Details</h3>
            <div>
              <input
                type="text"
                placeholder="UPI ID"
                name="upiId"
                value={paymentDetails.upiId}
                onChange={handlePaymentDetailsChange}
              />
            </div>
          </section>
        )}

        {paymentMethod === 'Netbanking' && (
          <section className="section payment-details">
            <h3>Netbanking Details</h3>
            <div>
              <input
                type="text"
                placeholder="Bank Name"
                name="netBankingBank"
                value={paymentDetails.netBankingBank}
                onChange={handlePaymentDetailsChange}
              />
            </div>
          </section>
        )}

        {paymentMethod === 'Card' && (
          <section className="section payment-details">
            <h3>Card Details</h3>
            <div>
              <input
                type="text"
                placeholder="Card Number"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handlePaymentDetailsChange}
              />
              <input
                type="text"
                placeholder="Card Holder Name"
                name="cardHolder"
                value={paymentDetails.cardHolder}
                onChange={handlePaymentDetailsChange}
              />
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                name="expDate"
                value={paymentDetails.expDate}
                onChange={handlePaymentDetailsChange}
              />
              <input
                type="text"
                placeholder="CVV"
                name="cardCVV"
                value={paymentDetails.cardCVV}
                onChange={handlePaymentDetailsChange}
              />
            </div>
          </section>
        )}
      </div>

      <div className="checkout-summary">
        <h2>Order Summary</h2>
        <p>D-Events</p>
        <div className="summary-line">
          <p>Subtotal</p>
          <p>Rs.12,000</p>
        </div>
        <div className="summary-line">
          <p>Discount</p>
          <p>Rs.500 (15%)</p>
        </div>
        <div className="summary-line">
          <p>Working Charge</p>
          <p>Rs. 2,000</p>
        </div>
        <div className="summary-line total">
          <p>Total</p>
          <p>Rs. 13,500</p>
        </div>
        <button className="pay-button" onClick={handlePayClick}>Pay →</button>
      </div>

      {isPaymentSuccessful && (
          
        <div className="payment-success-popup">
          <div className="popup-content">
            <h2>Payment Successful</h2>
            <p>Thank you for your payment!</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>

  );
};

export default Checkout;
