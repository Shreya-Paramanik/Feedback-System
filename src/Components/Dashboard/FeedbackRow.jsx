import React from 'react';
import './FeedbackRow.css';

const FeedbackRow = ({ user, email, type, rating, message, status, date }) => {
  const typeColor = {
    suggestion: 'darkblue',
    complaint: 'orange',
    praise: 'green',
    bug: 'coral'
  };

  return (
    <tr>
      <td>
        <strong>{user}</strong><br />
        <span className="email">{email}</span>
      </td>
      <td>
        <span className="tag" style={{ background: typeColor[type] }}>
          {type}
        </span>
      </td>
      <td>
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)} ({rating})
      </td>
      <td>{message}</td>
      <td><span className="status">{status}</span></td>
      <td>{date}</td>
      <td>
        <select defaultValue={status}>
          <option>Pending</option>
          <option>Reviewed</option>
        </select>
      </td>
    </tr>
  );
};

export default FeedbackRow;