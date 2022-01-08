import { JobActionCreators, State } from '@state';
import { IJobCreationData } from '@state/reducer-types';
import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '@state';
import { bindActionCreators } from 'redux';
import { styled } from '@mui/system';
import { Input, Box, alpha } from '@mui/material';

interface IProps {
  job: IJobCreationData;
}
const ListBox: FC<IProps> = ({ job }) => {
  const dispatch = useDispatch();
  const jobState = useSelector((state: State) => state.job);
  const [selected, setSelected] = useState(
    jobState.chosenJobCreationData.includes(job)
  );
  const { choseJobData, removeFromChosenJobData } = bindActionCreators(
    JobActionCreators,
    dispatch
  );

  return (
    <div>
      {jobState.chosenJobCreationData.filter(entry => entry.id === job.id).length ? (
        <StyledListItemActive
            onClick={() => dispatch(removeFromChosenJobData(job))}
        >
          <h3>
            #{job.id} {job.origin}
          </h3>
          <p>
            Uploaded by{job.uploadedBy} at {job.uploadDate.toLocaleDateString()}
          </p>
          <p>
            Origin: {job.origin} - data points: {job.totalReviews}
          </p>
        </StyledListItemActive>
      ) : (
        <StyledListItem
          onClick={() => dispatch(choseJobData(job))}
        >
          <h3>
            #{job.id} {job.origin}
          </h3>
          <p>
            Uploaded by{job.uploadedBy} at {job.uploadDate.toLocaleDateString()}
          </p>
          <p>
            Origin: {job.origin} - data points: {job.totalReviews}
          </p>
        </StyledListItem>
      )}
    </div>
  );
};

const StyledListItem = styled('div')(({ theme }) => ({
  border: `3px solid ${theme.palette.text.primary}`,
  borderRadius: '0.5rem',
  padding: '1rem',
  margin: '1rem',
  width: '15vw',
  height: '10vw',
  transition: 'all 0.3s ease',
  '&:hover': {
    border: `3px solid ${theme.palette.primary.main}`,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main,
  },
}));

const StyledListItemActive = styled('div')(({ theme }) => ({
  border: `3px solid ${theme.palette.primary.main}`,
  padding: '1rem',
  margin: '1rem',
  width: '15vw',
  height: '10vw',
  borderRadius: '0.5rem',
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
}));

export default ListBox;
