import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useTheme } from '@emotion/react';

export default function LineAreaChart({ data, chartId, options }) {
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
    d3.select(`#${chartId}`).remove();
    const svg = d3
      .select(lineChart.current)
      .append('svg')
      .attr('id', chartId)
      .attr('width', chartWidth - chartMargin.left - chartMargin.right)
      .attr('height', chartHeight - chartMargin.top - chartMargin.bottom)
      .classed("svg-content-responsive", true)
      .attr('viewBox', `0 0 ${chartWidth} ${chartHeight}`);
    const curveFunc = d3
      .line()
      .curve(d3.curveBasis)
      .x((d, i) => x(d.x))
      .y((d) => y(d.y));

    svg
      .append('path')
      .datum(data)
      .attr('d', d3.area().x(d=>x(d.x)).y1(d=>y(d.y)).y0(y(0)))
      .attr('stroke', theme.palette.primary.main)
      .attr('fill', theme.palette.primary.main)
      .attr('fill-opacity', 0.3)
      .attr('stroke-width', '2px');
      

    svg
      .append('g')
      .attr('transform', `translate(0,${chartHeight - chartMargin.bottom})`)
      .call(d3.axisBottom(x).tickValues(d3.range(0, 601, 100)))
      .attr('font-size', '20px');

    svg
      .append('g')
      .attr('transform', `translate(${chartMargin.left},0)`)
      .call(d3.axisLeft(y).tickValues(d3.range(0, 151, 50)))
      .attr('font-size', '20px');
  });
  return <div ref={lineChart}></div>;
}
