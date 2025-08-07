import React from 'react';
import './FeedbackRow.css';

const FeedbackRow = ({id, name, email, type, rate, message, status, date,onStatusChange }) => {
  const typeColor = {
    Suggestions: 'darkblue',
    Complaint: 'orange',
    Praise: 'green',
    Bug: 'coral',
  };

  return (
    <tr>
      <td>
        <strong>{name}</strong><br />
        <span className="email">{email}</span>
      </td>
      <td>
        <span className="tag" style={{ background: typeColor[type] }}>
          {type}
        </span>
      </td>
      <td>
        {'★'.repeat(rate)}
        {'☆'.repeat(5 - rate)} ({rate})
      </td>
      <td>{message}</td>
      <td><span className="status">{status}</span></td>
      <td>{date}</td>
      <td>
        <select defaultValue={status} onChange={(e) => onStatusChange(id, e.target.value)}>

          <option>Pending</option>
          <option>Reviewed</option>
        </select>
      </td>
    </tr>
  );
};

export default FeedbackRow;