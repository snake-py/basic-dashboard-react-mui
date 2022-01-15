import Wrapper from '@components/Wrapper';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { createStyles, makeStyles } from '@material-ui/core/styles';
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
          overflowY: 'auto',
          '@media (max-height: 731px)': {
            height: '60vh',
          },
        }}
      >
        {chosenJobGroups.length > 0 ? (
          <>
            <div
              style={{
                height: 'fit-content',
                display: 'flex',
                justifyContent: 'space-around',
                fontSize: '1.5rem',
              }}
            >
              <h2>Total Reviews: {sumOfReviews()}</h2>
            </div>
          </>
        ) : (
          <div
            style={{
              textAlign: 'center',
              marginTop: '5vh',
            }}
          >
            <h2>No Data Chosen</h2>
            <p>Chose Date on the left hand sight</p>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default SummaryChosenJobGroups;
