import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useTheme } from '@emotion/react';

export default function LineChart({ data, options }) {
  const lineChart = useRef(null);
  const { chartHeight, chartWidth, chartMargin } = options;
  const theme = useTheme();

  const x = d3
    .scaleLinear()
    .domain([0, 600])
    .range([chartMargin.left, chartWidth - chartMargin.right]);

  const y = d3
    .scaleLinear()
    .domain([0, 150])
    .range([chartHeight - chartMargin.bottom, chartMargin.top]);

  useEffect(() => {
    d3.select('#barChart').remove();
    const svg = d3
      .select(lineChart.current)
      .append('svg')
      .attr('id', 'barChart')
      .attr('width', chartWidth - chartMargin.left - chartMargin.right)
      .attr('height', chartHeight - chartMargin.top - chartMargin.bottom)
      .attr('viewBox', `0 0 ${chartWidth} ${chartHeight}`);
    const curveFunc = d3
      .line()
      .curve(d3.curveStep)
      .x((d, i) => d.x + chartMargin.left)
      .y((d) => d.y + chartMargin.bottom);

    svg
      .append('path')
      .attr('d', curveFunc(data))
      .attr('stroke', theme.palette.primary.main)
      .attr('transform-origin', '50% 50%')
      .attr('transform', `scale(1,-1)`)
      .attr('fill', 'none')
      .attr('stroke-width', '2px');

    svg
      .append('g')
      .attr('transform', `translate(0,${chartHeight - chartMargin.bottom})`)
      .call(d3.axisBottom(x).tickValues(d3.range(0, 601, 100)))
      .attr('font-size', '20px');

    svg
      .append('g')
      .attr('transform', `translate(${chartMargin.left},0)`)
      .call(d3.axisLeft(y).tickValues(d3.range(0, 150, 10)))
      .attr('font-size', '20px');
  });
  return <div ref={lineChart}></div>;
}
