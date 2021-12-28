import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useTheme } from '@emotion/react';

export default function PathChart({ data, chartId, options }) {
  const barChartRef = useRef(null);
  const { chartHeight, chartWidth, chartMargin } = options;
  const theme = useTheme();
  const dimensions = Object.keys(data[0]);

  const y = {};
  for (let i in dimensions) {
    const name = dimensions[i];
    y[name] = d3
      .scaleLinear()
      .domain(
        d3.extent(data, function (d) {
          return +d[name];
        })
      )
      .range([chartHeight, 0]);
  }

  const x = d3
    .scalePoint()
    .range([0, chartWidth])
    .padding(1)
    .domain(dimensions);

  function path(d) {
    return d3.line()(
      dimensions.map(function (p) {
        return [x(p), y[p](d[p])];
      })
    );
  }

  useEffect(() => {
    d3.select(`#${chartId}`).remove();
    const svg = d3
      .select(barChartRef.current)
      .append('svg')
      .style('height', chartHeight + chartMargin.top + chartMargin.bottom + 25)
      .style('padding', `${chartMargin.top}px ${chartMargin.right}px ${chartMargin.bottom}px ${chartMargin.left}px`)
      .attr('id', `${chartId}`)
      .attr('width', chartWidth - chartMargin.left - chartMargin.right)
      .attr('height', chartHeight - chartMargin.top - chartMargin.bottom)
      .attr('viewBox', `0 0 ${chartWidth} ${chartHeight}`);

    // Draw the lines
    svg
      .selectAll('path')
      .data(data)
      .join('path')
      .attr('d', path)
      .style('fill', 'none')
      .style('stroke', theme.palette.primary.main)
      .style('opacity', 0.3)
      .style('stroke-width', '10px')
      .style('transition', 'all 0.1s ease-in-out')
      .on('mouseover', function (e, d, i) {
        d3.select(e.srcElement).style('opacity', 0.8);
      })
      .on('mouseout', function (e, d) {
        d3.select(e.srcElement).style('opacity', 0.3);
      });
    // Draw the axis:
    svg
      .selectAll('myAxis')
      // For each dimension of the dataset I add a 'g' element:
      .data(dimensions)
      .enter()
      .append('g')

      // I translate this element to its right position on the x axis
      .attr('transform', function (d) {
        return 'translate(' + x(d) + ')';
      })
      // And I build the axis with the call function
      .each(function (d) {
        d3.select(this).call(d3.axisLeft().scale(y[d]));
      })
      .attr('font-size', '20px')
      // Add axis title
      .append('text')
      .style('text-anchor', 'middle')
      .attr('y', -25)
      .text(function (d) {
        return d;
      })
      .style('fill', theme.palette.text.primary)
      .attr('font-size', '25px');
  });
  return <div ref={barChartRef}></div>;
}
