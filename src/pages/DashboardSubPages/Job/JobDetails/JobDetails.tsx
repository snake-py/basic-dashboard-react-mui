import React from 'react';
import { useParams } from 'react-router-dom';
export default function JobDetails() {
  const { id } = useParams();
  return (
    <div className='main-container'>
      <h1>Job Details {id}</h1>
    </div>
  );
}
