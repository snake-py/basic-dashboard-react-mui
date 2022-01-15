import PieChart from '@charts/PieChart';
import React, { FC, useEffect, useState } from 'react';
import { JobActionCreators, useSelector } from '@state';
import { useDispatch } from 'react-redux';
import BarChart from '@charts/BarChart';
import { group } from 'console';
import { styled } from '@mui/system';
import { IJobGroup } from '@state/reducer-types';

interface IProps {
  jobGroups: IJobGroup[];
  chosenJobGroups: IJobGroup[];
  clickHandler: (data: any, action: string) => void;
}

const ChooseGroup: FC<IProps> = ({ jobGroups, chosenJobGroups, clickHandler }) => {
  return (
    <div style={{
      width: '100%',
    }}>
      <h1>Choose Group</h1>
      <BarChart
      yAxisLabel='Total Review'
        chartId="groupBarChart"
        data={jobGroups.map((group) => {
          return { name: group.group, value: group.reviewCount };
        })}
        chosenData={chosenJobGroups.map((group) => {
          return { name: group.group, value: group.reviewCount };
        })}
        clickHandler={clickHandler}
        styles={{
          svgStyles: {
            width: '100%',
            height: '50vh',
          },
          xAxisStyles: {
            fontSize: '.5rem',
          },
          yAxisStyles: {
            fontSize: '.5rem',
          },
        }}
        options={{
          chartWidth: 300,
          chartHeight: 200,
          chartMargin: { top: 20, right: 20, bottom: 30, left: 40 },
        }}
      />
    </div>
  );
};

export default ChooseGroup;
