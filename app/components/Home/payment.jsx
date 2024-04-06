import React from 'react';

const PaymentDetails = () => {
  return (
    <div className="payment-details font-sans w-96 mx-auto border border-gray-300 rounded-lg shadow-md p-5">
      <h2 className="text-center text-gray-700 text-lg font-bold mb-5">Payment Details</h2>
      <div className="recipient font-bold text-gray-700">Recipient: FlexiLoans</div>
      <div className="platform font-bold text-gray-700">Online Platform: FlexiLoans</div>
      <div className="loan-id font-bold text-gray-700">Loan ID: 2023-37-91</div>
      <div className="amount font-bold text-gray-700">Amount: $9,800</div>
      <div className="type text-gray-600">Type:</div>
      <div className="description text-gray-600">Description: Loan Products</div>
      <div className="qty text-gray-600">Qty: 1</div>
      <div className="amount font-bold text-gray-700">Amount: $5,550</div>
      <div className="service-fee text-gray-600">Service Fee: $1,250</div>
      <div className="service-charges text-gray-600">Service Charges: $1,250</div>
      <div className="deposit-amount text-gray-600">Deposit Amount: $3,000</div>
      <div className="deposit-charges text-gray-600">Deposit Charges: $3,000</div>
      <div className="total font-bold text-gray-700">Total: $9,800</div>
      <div className="payment-summary font-bold text-gray-700">Payment Summary: $9,800</div>
    </div>
  );
};

export default PaymentDetails;
