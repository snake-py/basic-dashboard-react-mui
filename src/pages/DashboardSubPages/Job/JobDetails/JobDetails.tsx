import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from '@components/wrapper';
import * as d3 from 'd3';
import { styled, useTheme} from '@mui/material';

export default function JobDetails() {
  const { id } = useParams();
  const refPlot = useRef(null);
  const [currentValue, setCurrentValue] = useState(0);
  const [data, setData] = useState([3, 2, 3, 10, 5, 2, 7, 1, 9, 8]);
  const theme = useTheme();


  const BarHolder = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    '& .bar-chart__bar': {
      borderRadius: '5px 5px 0 0',
      backgroundColor: theme.palette.primary.main,
      backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
      margin: '5px',
    },
  }));

  useEffect(() => {
    d3.select(refPlot.current)
      .selectAll('div')
      .data(data)
      .enter()
      .append('div')
      .style('width', (d) => 5 + 'px')
      .style('height', (d) => d * 10 + 'px')
      .attr('class', 'bar-chart__bar')
      .on('mouseover', (d, i) => {
        console.log(i);
        setCurrentValue(i);
      });
  }, );
  
  return (
    <div className="main-container">
      <h1>Job Details {id}</h1>
      <Wrapper shouldHover={false} styles={{ width: '20%' }}>
        <div className="small-bar-chart">
          <div className="flex-container">
            <div style={{
              backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            }}  className="small-bar-chart__number">{currentValue}</div>
          </div>
            <BarHolder>
              <div ref={refPlot} className="bar-chart"></div>
            </BarHolder>
        </div>
      </Wrapper>
    </div>
  );
}
