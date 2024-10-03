import React, { useState } from 'react';
import moment from 'moment';

function DateRange({ onFilter }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilter = (e) => {
    e.preventDefault();

    // Ensure endDate is not before startDate
    if (moment(endDate).isBefore(moment(startDate))) {
      alert("End date cannot be before start date");
      return;
    }
    onFilter(startDate, endDate);
  };

  return (
    <form onSubmit={handleFilter}>
      <label>Start Date: 
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>End Date: 
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <button type="submit">Filter by Date</button>
    </form>
  );
}

export default DateRange;
