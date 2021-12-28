import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useTheme } from '@emotion/react';

export default function BarStackedChart({ data, chartId, options }) {
  const barChartRef = useRef(null);
  const { chartHeight, chartWidth, chartMargin } = options;
  const theme = useTheme();
  let subgroups;
  let groups;

  if (!options.mainGroup) {
    subgroups = Object.keys(data[0]).filter((d) => d !== options.mainGroup);
    groups = data.map((d) => d[options.mainGroup]);
  } else {
    subgroups = Object.keys(data[0]).slice(1);
    groups = data.map((d) => d[Object.keys(data[0])[0]]);
  }

  // Add X axis
  const x = d3.scaleBand().domain(groups).range([0, chartWidth]).padding([0.2]);

  // Add Y axis
  const y = d3.scaleLinear().domain([0, 120]).range([chartHeight, 0]);

  // color palette = one color per subgroup
  const color = d3.scaleOrdinal().domain(subgroups).range(d3.schemeSet2); // range can also take an array of colors ["gold", "blue", "green", "yellow", "black", "grey", "darkgreen", "pink", "brown", "slateblue", "grey1", "orange"]

  //stack the data? --> stack per subgroup
  const stackedData = d3.stack().keys(subgroups)(data);
console.log(stackedData);
  useEffect(() => {
    d3.select(`#${chartId}`).remove();
    const svg = d3
      .select(barChartRef.current)
      .append('svg')
      .attr('id', `${chartId}`)
      .attr('width', chartWidth + chartMargin.left + chartMargin.right)
      .classed("svg-content-responsive", true)
      .style(
        'margin',
        `${chartMargin.top}px ${chartMargin.right}px ${chartMargin.bottom}px ${chartMargin.left}px`
      )
      .style('height', chartHeight + chartMargin.top + chartMargin.bottom)
      .attr(
        'viewBox',
        `0 0 ${chartWidth + chartMargin.left + chartMargin.right} ${
          chartHeight + chartMargin.top + chartMargin.bottom
        }`
      )
      .append('g')
      .attr('transform', `translate(${chartMargin.left},${chartMargin.top})`)

    svg
      .append('g')
      .selectAll('g')
      // Enter in the stack data = loop key per key = group per group
      .data(stackedData)
      .join('g')
      .attr('fill', (d) => color(d.key))
      .attr('class', (d) => 'myRect ' + d.key) // Add a class to each subgroup: their name
      .selectAll('rect')
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data((d) => d)
      .join('rect')
      .attr('x', (d) => x(d.data.group))
      .attr('y', (d) => y(d[1]))
      .attr('height', (d) => y(d[0]) - y(d[1]))
      .attr('width', x.bandwidth())
      .attr('stroke', 'grey')
      .on('mouseover', function (event, d) {
        // What happens when user hover a bar

        // what subgroup are we hovering?
        const subGroupName = d3.select(this.parentNode).datum().key;

        // Reduce opacity of all rect to 0.2
        d3.selectAll('.myRect').style('opacity', 0.2);

        // Highlight all rects of this subgroup with opacity 1. It is possible to select them since they have a specific class = their name.
        d3.selectAll('.' + subGroupName).style('opacity', 1);
      })
      .on('mouseleave', function (event, d) {
        // When user do not hover anymore

        // Back to normal opacity: 1
        d3.selectAll('.myRect').style('opacity', 1);
      });
    svg
      .append('g')
      .attr('transform', `translate(0, ${chartHeight})`)
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .attr('font-size', '20px');
    svg.append('g').call(d3.axisLeft(y)).attr('font-size', '20px');
  });
  return <div ref={barChartRef}></div>;
}
