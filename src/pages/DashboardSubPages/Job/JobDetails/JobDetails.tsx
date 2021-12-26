import React from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from '@components/wrapper';

export default function JobDetails() {
  const { id } = useParams();
  
  return (
    <div className='main-container'>
      <h1>Job Details {id}</h1>
        <Wrapper styles={{ width: '100%' }}>
        
        </Wrapper>
    </div>
  );
}
