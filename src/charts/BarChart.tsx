import React, { FC, useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useTheme } from '@mui/material';
import { createStyles, makeStyles } from '@material-ui/core/styles';

interface IPropsBarChart {
  data: Array<{
    name: string;
    value: number;
  }>;
  chosenData?: Array<{
    name: string;
    value: number;
  }>;
  options: {
    chartHeight: number;
    chartWidth: number;
    chartMargin: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
  };
  styles?: {
    svgStyles?: any;
    xAxisStyles?: any;
    yAxisStyles?: any;
    barStyles?: any;
  };
  clickHandler?: (data: any, action: string) => void;
  chartId: string;
}
//create your forceUpdate hook
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const BarChart: FC<IPropsBarChart> = ({
  data,
  chartId,
  options,
  styles,
  clickHandler,
  chosenData,
}) => {
  const barChartRef = useRef(null);
  const forceUpdate = useForceUpdate();
  const { chartHeight, chartWidth, chartMargin } = options;
  const theme = useTheme();
  let classes: any;

  if (styles) {
    const useStyles = makeStyles(() =>
      createStyles({
        svg: {
          ...styles.svgStyles,
        },
        xAxis: {
          ...styles.xAxisStyles,
        },
        yAxis: {
          ...styles.xAxisStyles,
        },
      })
    );

    classes = useStyles();
  }

  const x = d3
    .scaleBand()
    //@ts-ignore
    .domain(d3.range(data.length))
    .range([chartMargin.left, chartWidth - chartMargin.right])
    .padding(0.1);

  const y = d3
    .scaleLinear()
    //@ts-ignore
    .domain([0, d3.max(data, (d) => d.value)])
    .range([chartHeight - chartMargin.bottom, chartMargin.top]);

  //@ts-ignore
  const xAxis = (g) => {
    g.attr('transform', `translate(0,${chartHeight - chartMargin.bottom})`)
      //@ts-ignore
      .call(d3.axisBottom(x).tickFormat((i) => data[i].name))
      .attr('font-size', '20px');
  };
  //@ts-ignore
  const yAxis = (g) => {
    g.attr('transform', `translate(${chartMargin.left},0)`)
      //@ts-ignore
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '20px');
  };

  useEffect(() => {
    d3.select(`#${chartId}`).remove();
    const svg = d3
      .select(barChartRef.current)
      .append('svg')
      .attr('id', `${chartId}`)
      .attr('width', chartWidth - chartMargin.left - chartMargin.right)
      .attr('height', chartHeight - chartMargin.top - chartMargin.bottom)
      .attr('viewBox', `0 0 ${chartWidth} ${chartHeight}`)
      .classed('svg-content-responsive', true);
    if (styles) {
      svg.attr('class', classes.svg);
    }
    svg
      .append('g')
      .attr('fill', theme.palette.primary.main)
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('class', 'bar-chart__bar')
      //@ts-ignore
      .attr('x', (d, i) => x(i))
      .attr('y', (d) => y(d.value))
      .attr('height', (d) => y(0) - y(d.value))
      .attr('width', x.bandwidth())
      .attr('fill-opacity', (d, i) => {
        if (chosenData) {
          return chosenData.filter((data) => data.name === d.name).length > 0
            ? 1
            : 0.2;
        }
        return 0.2;
      })
      .attr('stroke', theme.palette.primary.main)
      .attr('stroke-width', '2px')
      .on('mouseover', (e, d) => {
        d3.select(e.srcElement).attr('fill-opacity', 1);
      })
      .on('mouseout', (e, d) => {
        //@ts-ignore
        if (chosenData.filter((data) => data.name === d.name).length > 0) {
          return;
        }
        return d3.select(e.srcElement).attr('fill-opacity', 0.3);
      });

    if (clickHandler) {
      svg.selectAll('rect').on('click', (e, d) => {
        //@ts-ignore
        if (chosenData.filter((data) => data.name === d.name).length > 0) {
          clickHandler(d, 'REMOVE');
        } else {
          clickHandler(d, 'ADD');
        }
      });
    }

    if (styles) {
      svg.append('g').attr('class', classes.xAxis).call(xAxis);
      svg.append('g').attr('class', classes.yAxis).call(yAxis);
    }
  });
  return <div className="svg-container" ref={barChartRef}></div>;
};

export default BarChart;
