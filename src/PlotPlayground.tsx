// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// export default function PlotPlayground() {
//   const barChartRef = useRef(null);
//   const data = [
//     {
//       name: 'Simon',
//       score: 50,
//     },
//     {
//       name: 'John',
//       score: 80,
//     },
//     {
//       name: 'Dave',
//       score: 100,
//     },
//     {
//       name: 'Tim',
//       score: 60,
//     },
//   ];
//   const barChartWidth = 800;
//   const barChartHeight = 400;
//   const barChartMargin = { top: 20, right: 20, bottom: 30, left: 40 };

//   const x = d3
//     .scaleBand()
//     //@ts-ignore
//     .domain(d3.range(data.length))
//     .range([barChartMargin.left, barChartWidth - barChartMargin.right])
//     .padding(0.1);

//   const y = d3
//     .scaleLinear()
//     //@ts-ignore
//     .domain([0, 100])
//     .range([barChartHeight - barChartMargin.bottom, barChartMargin.top]);

//     const xAxis = (g: any) => {
//         g.attr('transform', `translate(0,${barChartHeight - barChartMargin.bottom})`)
//         .call(d3.axisBottom(x).tickFormat((i: any) => data[i].name))
//         .attr('font-size', '20px');
//     };
//     const yAxis = (g: any) => {
//       //@ts-ignore
//     g.attr('transform', `translate(${barChartMargin.left},0)`).call(d3.axisLeft(y).ticks(null, data.format)).attr('font-size', '20px');
//   };

//   useEffect(() => {
//     const svg = d3
//       .select(barChartRef.current)
//       .append('svg')
//       .attr('width', barChartWidth - barChartMargin.left - barChartMargin.right)
//       .attr('height', barChartHeight - barChartMargin.top - barChartMargin.bottom)
//       .attr('viewBox', `0 0 ${barChartWidth} ${barChartHeight}`);

//     svg
//       .append('g')
//       .attr('fill', '#fff')
//       .selectAll('rect')
//       .data(data.sort((a, b) => d3.descending(a.score, b.score)))
//       .join('rect')
//       .attr('class', 'bar-chart__bar')
//       //@ts-ignore
//       .attr('x', (d, i) => x(i))
//       .attr('y', (d) => y(d.score))
//       .attr('height', (d) => y(0) - y(d.score))
//       .attr('width', x.bandwidth());

//     svg.append('g').call(xAxis);
//     svg.append('g').call(yAxis);
//   });
//   return (
//     <div className="main-container">
//       <h1>Simple Bar Chart</h1>
//       <div ref={barChartRef}></div>
//     </div>
//   );
// }

const data_line_chart = [
  { x: 0, y: 0 },
  { x: 150, y: 150 },
  { x: 300, y: 100 },
  { x: 450, y: 20 },
  { x: 600, y: 130 },
];
const data_bar_chart = [
  {
    name: 'Simon',
    value: 50,
  },
  {
    name: 'John',
    value: 80,
  },
  {
    name: 'Dave',
    value: 100,
  },
  {
    name: 'Tim',
    value: 60,
  },
  {
    name: 'Ti',
    value: 80,
  },
  {
    name: 'Mark',
    value: 40,
  },
];
const data_path_chart = [
  { word_1: 10, word_2: 1, word_3: 1 },
  { word_1: 20, word_2: 33, word_3: 5 },
  { word_1: 30, word_2: 13, word_3: 10 },
  { word_1: 25, word_2: 15, word_3: 35 },
  { word_1: 50, word_2: 23, word_3: 22 },
  { word_1: 17, word_2: 43, word_3: 50 },
  { word_1: 39, word_2: 44, word_3: 17 },
  { word_1: 45, word_2: 50, word_3: 44 },
  { word_1: 6, word_2: 20, word_3: 48 },
];

const data_pie_chart = {
  python: 20,
  javascript: 30,
  c: 10,
  cpp: 40,
  java: 50,
};
const options = {
  chartWidth: 800,
  chartHeight: 400,
  chartMargin: { top: 20, right: 20, bottom: 30, left: 40 },
};
const optionsPathChart = {
  chartWidth: 1100,
  chartHeight: 800,
  chartMargin: { top: 20, right: 20, bottom: 30, left: 40 },
};
const optionsPieChart = {
  chartWidth: 800,
  chartHeight: 400,
  chartMargin: 20,
};
import React from 'react';
import LineChart from '@charts/LineChart';
import LineAreaChart from '@charts/LineAreaChart';
import BarChart from '@charts/BarChart';
import Wrapper from '@components/Wrapper';
import PieChart from '@charts/PieChart';
import ScatterChart from '@charts/ScatterChart';
import PathChart from '@charts/PathChart';
export default function PlotPlayground() {
  return (
    <div className="main-container">
      <Wrapper shouldHover={false}>
        <h1>Simple PathChart</h1>
        <PathChart
          chartId="pathChart"
          data={data_path_chart}
          options={optionsPathChart}
        />
      </Wrapper>
      <Wrapper shouldHover={false}>
        <h1>Simple ScatterChart</h1>
        <ScatterChart
          chartId="scatterChart"
          data={data_line_chart}
          options={options}
        />
      </Wrapper>
      <Wrapper shouldHover={false}>
        <h1>Simple LineAreaChart</h1>
        <LineAreaChart
          chartId="lineAreaChart"
          data={data_line_chart}
          options={options}
        />
      </Wrapper>
      <Wrapper shouldHover={false}>
        <h1>Simple PieChart</h1>
        <PieChart
          chartId="pieChart"
          data={data_pie_chart}
          options={optionsPieChart}
        />
      </Wrapper>
      <Wrapper shouldHover={false}>
        <h1>Simple LineChart</h1>
        <LineChart
          chartId="lineChart"
          data={data_line_chart}
          options={options}
        />
      </Wrapper>
      <Wrapper shouldHover={false}>
        <h1>Simple BarChart</h1>
        <BarChart chartId="arChart1" data={data_bar_chart} options={options} />
      </Wrapper>
    </div>
  );
}
