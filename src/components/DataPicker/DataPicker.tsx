import Wrapper from '@components/Wrapper';
import { Input, Box, alpha } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, State, JobActionCreators } from '@state';
import { IJobCreationData } from '@state/reducer-types';

import ListBox from '@components/ListBox';
import { IDataPickerProps } from '@interfaces/Props';

const DataPicker: React.FC<IDataPickerProps> = ({jobCreationData}) => {

  return (
    <div>
      <Wrapper
        shouldHover={false}
        styles={{
          width: '51vw',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          overflowY: 'scroll',
          height: '70vh',
        }}
      >
        {jobCreationData.length > 1 ? (
          jobCreationData.map((data: IJobCreationData) => {
            {console.log("execute");
            }
            return (
              <div key={data.id} className="data-list__container">
                <ListBox key={data.id} job={data} />
              </div>
            );
          })
        ) : (
          <div>No Data Yet</div>
        )}
      </Wrapper>
    </div>
  );
}

const WrapperStyles = {
  width: '50%',
  height: '55vh',
  overflowY: 'auto',
};

export default DataPicker;