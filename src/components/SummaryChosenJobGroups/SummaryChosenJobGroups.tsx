import Wrapper from '@components/Wrapper';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { createStyles, makeStyles, styled } from '@material-ui/core/styles';
import React, { FC, useState, useEffect } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PieChart from '@charts/PieChart';
import { IJobGroup } from '@state/reducer-types';

interface IProps {
  chosenJobGroups: IJobGroup[];
}

const SummaryChosenJobGroups: FC<IProps> = ({ chosenJobGroups }) => {
  const theme = useTheme();

  const useStyles = makeStyles(() =>
    createStyles({
      dataLabel: {
        fontSize: '1.2rem',
        display: 'block',
      },
      dataOutput: {
        display: 'block',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: theme.palette.primary.main,
      },
    })
  );
  const classes = useStyles();

  const StyledDiv = styled('div')(() => ({
    height: 'fit-content',
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '1.5rem',
    
  }));
  const StyledDivNoContent = styled('div')(() => ({
    textAlign: 'center',
    marginTop: '4vh',
  }));

  const sumOfReviews = () => {
    return Object.values(chosenJobGroups).reduce(
      (sum, curr) => sum + curr.reviewCount,
      0
    );
  };
  return (
    <div>
      <Wrapper
        shouldHover={false}
        styles={{
          width: '70vw',
          height: '20vh',
          borderRadius: '1rem',
        }}
      >
        {chosenJobGroups.length > 0 ? (
          <>
            <StyledDiv>
              <h2>Total Reviews: {sumOfReviews()}</h2>
            </StyledDiv>
          </>
        ) : (
          <StyledDivNoContent>
            <h2>No Data Chosen</h2>
            <p>Chose Date on the left hand sight</p>
          </StyledDivNoContent>
        )}
      </Wrapper>
    </div>
  );
};

export default SummaryChosenJobGroups;
