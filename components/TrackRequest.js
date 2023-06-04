import React from 'react';
import './TrackRequestPage.css';
import history_img from '../images/Document 1.svg';
const TrackRequest = () => {
  const requestData = [
    {
      id: 1,
      fullName: 'John Doe',
      date: '2023-05-10',
      amount: 100,
      division: 'Division 1',
      chapter: 'Chapter A',
      payment: 'Credit Card',
      status: 'Processing',
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      date: '2023-05-12',
      amount: 200,
      division: 'Division 2',
      chapter: 'Chapter B',
      payment: 'PayPal',
      status: 'Pending',
    },
    // Add more request objects as needed
  ];

  const renderTableRows = () => {
    return requestData.map((request) => (
      <tr key={request.id}>
        <td>{request.fullName}</td>
        <td>{request.date}</td>
        <td>{request.amount}</td>
        <td>{request.division}</td>
        <td>{request.chapter}</td>
        <td>{request.payment}</td>
        <td>{request.status}</td>
      </tr>
    ));
  };

  return (
    <div className='container'>
        <div className='bar'>
      <h2>Track Your Request</h2>
      <a href="/request-history">
      <img src={history_img} />
        View Request History 
      </a>
      </div>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Division</th>
            <th>Chapter</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
    </div>
  );
};

export default TrackRequest;
