import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/Payment.css';

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const [amount, setAmount] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [eventDetails, setEventDetails] = useState({
    eventFor: '',
    eventType: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [bankDetails, setBankDetails] = useState({ bankName: '', ifscCode: '', accountNo: '' });
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', expiryDate: new Date(), cvv: '' });
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (location.state) {
      const { eventFor, eventType, name, phone, email } = location.state;
      setUserDetails({ name, phone, email });
      setEventDetails({ eventFor, eventType });
      
      // Calculate amount based on eventFor and eventType
      const amounts = {
        'organizer': {
          'personalized': 'Rs. 50000',
          'virtual': 'Rs. 10000',
          'exhibition': 'Rs. 300000'
        },
        'individual': {
          'personalized': 'Rs. 5000',
          'virtual': 'Rs. 3000',
          'exhibition': 'Rs. 6000'
        }
      };
      setAmount(amounts[eventFor]?.[eventType] || 'Rs. 0');
    }
  }, [location.state]);

  useEffect(() => {
    checkFormValidity();
  }, [paymentMethod, upiId, bankDetails, cardDetails]);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setUpiId('');
    setBankDetails({ bankName: '', ifscCode: '', accountNo: '' });
    setCardDetails({ cardNumber: '', expiryDate: new Date(), cvv: '' });
    setErrors({});
  };

  const handleUpiChange = (e) => {
    setUpiId(e.target.value);
  };

  const handleBankChange = (e) => {
    setBankDetails({
      ...bankDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleCardChange = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleExpiryDateChange = (date) => {
    if (date) {
      setCardDetails({
        ...cardDetails,
        expiryDate: date
      });
    }
  };

  const validateCardDetails = () => {
    const errors = {};
    const { cardNumber, cvv } = cardDetails;
    const expiryDate = cardDetails.expiryDate;
    const month = String(expiryDate.getMonth() + 1).padStart(2, '0'); // Ensure month is two digits
    const year = expiryDate.getFullYear();
    const expiryDateString = `${month}/${year}`;

    if (!/^\d{2}\/\d{4}$/.test(expiryDateString)) {
      errors.expiryDate = 'Expiry Date must be in MM/YYYY format.';
    }
    if (!/^\d{16}$/.test(cardNumber)) {
      errors.cardNumber = 'Card Number must be 16 digits.';
    }
    if (!/^\d{3}$/.test(cvv)) {
      errors.cvv = 'CVV must be 3 digits.';
    }
    return errors;
  };

  const validateBankDetails = () => {
    const errors = {};
    if (!/^\d{14}$/.test(bankDetails.accountNo)) {
      errors.accountNo = 'Account No must be numeric and up to 14 digits.';
    }
    return errors;
  };

  const checkFormValidity = () => {
    const errors = {};
    if (!paymentMethod) {
      errors.paymentMethod = 'Select a payment method.';
    } else if (paymentMethod === 'upi') {
      if (upiId.trim() === '') {
        errors.upiId = 'UPI ID is required.';
      }
    } else if (paymentMethod === 'netbanking') {
      const { bankName, ifscCode, accountNo } = bankDetails;
      if (bankName.trim() === '') errors.bankName = 'Bank Name is required.';
      if (ifscCode.trim() === '') errors.ifscCode = 'IFSC Code is required.';
      if (accountNo.trim() === '') errors.accountNo = 'Account No is required.';
      Object.assign(errors, validateBankDetails());
    } else if (paymentMethod === 'card') {
      const { cardNumber, cvv } = cardDetails;
      if (!/^\d{16}$/.test(cardNumber)) errors.cardNumber = 'Card Number must be 16 digits.';
      if (cvv.trim() === '') errors.cvv = 'CVV is required.';
      Object.assign(errors, validateCardDetails());
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handlePayment = () => {
    if (!isFormValid) {
      alert("Please complete the form correctly.");
      return;
    }
    alert("Payment Successful");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/home');
    }, 5000);
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you need to cancel the Transaction")) {
      navigate('/bookings');
    }
  };

  return (
    <div className="payment-page">
      {loading && <div className="overlay"><div className="loader"></div></div>}
      <div className={`payment-card ${loading ? 'blurred' : ''}`}>
        <div className="header">PAYMENT</div>
        <div className="payment-details">
          <div className="payment-user-details">
            <h2>User Details</h2>
            <p><strong>Name:</strong> {userDetails.name}</p>
            <p><strong>Phone No:</strong> {userDetails.phone}</p>
            <p><strong>Email:</strong> {userDetails.email}</p>
          </div>
          <div className="payment-info-card">
            <h2>Event Details</h2>
            <p><strong>Event For:</strong> {eventDetails.eventFor}</p>
            <p><strong>Event Type:</strong> {eventDetails.eventType}</p>
            <p><strong>Amount:</strong> {amount}</p>
          </div>
        </div>
        <div className="payment-methods">
          <h2>Select Payment Method</h2>
          <ul>
            <li><button onClick={() => handlePaymentMethodChange('upi')}>UPI</button></li>
            <li><button onClick={() => handlePaymentMethodChange('netbanking')}>Net Banking</button></li>
            <li><button onClick={() => handlePaymentMethodChange('card')}>Card</button></li>
          </ul>
          {errors.paymentMethod && <div className="error-message">{errors.paymentMethod}</div>}
        </div>

        {paymentMethod === 'upi' && (
          <div className="payment-details">
            <input
              type="text"
              placeholder="Enter UPI ID"
              value={upiId}
              onChange={handleUpiChange}
              className="payment-input"
            />
            {errors.upiId && <div className="error-message">{errors.upiId}</div>}
          </div>
        )}

        {paymentMethod === 'netbanking' && (
          <div className="payment-details">
            <input
              type="text"
              name="bankName"
              placeholder="Bank Name"
              value={bankDetails.bankName}
              onChange={handleBankChange}
              className="payment-input"
            />
            {errors.bankName && <div className="error-message">{errors.bankName}</div>}
            <input
              type="text"
              name="ifscCode"
              placeholder="IFSC Code"
              value={bankDetails.ifscCode}
              onChange={handleBankChange}
              className="payment-input"
            />
            {errors.ifscCode && <div className="error-message">{errors.ifscCode}</div>}
            <input
              type="number"
              name="accountNo"
              placeholder="Account No"
              value={bankDetails.accountNo}
              onChange={handleBankChange}
              className="payment-input"
              inputMode="numeric"
              pattern="\d*"
            />
            {errors.accountNo && <div className="error-message">{errors.accountNo}</div>}
          </div>
        )}

        {paymentMethod === 'card' && (
          <div className="payment-details">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={handleCardChange}
              className="payment-input"
              inputMode="numeric"
              pattern="\d*"
            />
            {errors.cardNumber && <div className="error-message">{errors.cardNumber}</div>}
            <DatePicker
              selected={cardDetails.expiryDate}
              onChange={handleExpiryDateChange}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              className="payment-input"
            />
            {errors.expiryDate && <div className="error-message">{errors.expiryDate}</div>}
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={handleCardChange}
              className="payment-input"
              inputMode="numeric"
              pattern="\d*"
            />
            {errors.cvv && <div className="error-message">{errors.cvv}</div>}
          </div>
        )}

        <div className="payment-actions">
          <button onClick={handlePayment} disabled={!isFormValid}>Pay Now</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
