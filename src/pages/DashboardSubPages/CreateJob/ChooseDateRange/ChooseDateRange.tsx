import React from 'react';
import DatePicker from '@components/DatePicker';

export default function ChooseDateRange() {
  return (
    <div>
      <h1>Choose Date</h1>
      <div>
        <h3>Start Date</h3>
        <DatePicker label='Start Date'/>
      </div>
      <div>
        <h3>End Date</h3>
        <DatePicker label='End Date'/>
      </div>
    </div>
  );
}
