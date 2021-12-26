import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function PlotPlayground() {
  const barChartRef = useRef(null);
  const data = [
    {
      name: 'Simon',
      score: 50,
    },
    {
      name: 'John',
      score: 80,
    },
    {
      name: 'Dave',
      score: 100,
    },
    {
      name: 'Tim',
      score: 60,
    },
  ];
  const barChartWidth = 800;
  const barChartHeight = 400;
  const barChartMargin = { top: 20, right: 20, bottom: 30, left: 40 };

  const x = d3
    .scaleBand()
    //@ts-ignore
    .domain(d3.range(data.length))
    .range([barChartMargin.left, barChartWidth - barChartMargin.right])
    .padding(0.1);

  const y = d3
    .scaleLinear()
    //@ts-ignore
    .domain([0, 100])
    .range([barChartHeight - barChartMargin.bottom, barChartMargin.top]);
    
    const xAxis = (g: any) => {
        g.attr('transform', `translate(0,${barChartHeight - barChartMargin.bottom})`)
        .call(d3.axisBottom(x).tickFormat((i: any) => data[i].name))
        .attr('font-size', '20px');
    };
    const yAxis = (g: any) => {
      //@ts-ignore
    g.attr('transform', `translate(${barChartMargin.left},0)`).call(d3.axisLeft(y).ticks(null, data.format)).attr('font-size', '20px');
  };

  useEffect(() => {
    const svg = d3
      .select(barChartRef.current)
      .append('svg')
      .attr('width', barChartWidth - barChartMargin.left - barChartMargin.right)
      .attr('height', barChartHeight - barChartMargin.top - barChartMargin.bottom)
      .attr('viewBox', `0 0 ${barChartWidth} ${barChartHeight}`);

    svg
      .append('g')
      .attr('fill', '#fff')
      .selectAll('rect')
      .data(data.sort((a, b) => d3.descending(a.score, b.score)))
      .join('rect')
      .attr('class', 'bar-chart__bar')
      //@ts-ignore
      .attr('x', (d, i) => x(i))
      .attr('y', (d) => y(d.score))
      .attr('height', (d) => y(0) - y(d.score))
      .attr('width', x.bandwidth());

    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);
  });
  return (
    <div className="main-container">
      <h1>Simple Bar Chart</h1>
      <div ref={barChartRef}></div>
    </div>
  );
}
