import Wrapper from '@components/Wrapper';
import { Input } from '@mui/material';
import React from 'react';
import { useSelector, State } from '@state';

export default function DataPicker() {
  const job = useSelector((state: State) => state.job);
  console.log('job', job);

  return (
    <Wrapper shouldHover={false} styles={WrapperStyles}>
      <Input />
      <br />

      {job.jobCreationData.length > 1 ? (
        job.jobCreationData.map((data) => {
          return (
            <div className="data-list__container">
                #{data.id} {data.origin}

            </div>
          );
        })
      ) : (
        <div>No Data Yet</div>
      )}
    </Wrapper>
  );
}

const WrapperStyles = {
  width: '50%',
  height: '55vh',
  overflowY: 'auto',
};
