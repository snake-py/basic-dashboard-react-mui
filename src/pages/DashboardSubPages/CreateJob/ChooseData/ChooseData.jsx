import { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function ChooseData({ width = 300, height = 400, data = [10, 30, 40, 20] }) {
  const ref = useRef();

  useEffect(() => {
    //@ts-ignore
    const svg = d3
      //@ts-ignore
      .select(ref.current)
      //@ts-ignore
      .attr('width', width)
      //@ts-ignore
      .attr('height', height)
      .style('border', '1px solid black');
  }, []);

  useEffect(() => {
    draw();
  }, [data]);

  const draw = () => {
    //@ts-ignore
    const svg = d3.select(ref.current);
    var selection = svg.selectAll('rect').data(data);
    var yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, height - 100]);

    selection
      .transition()
      .duration(300)
      .attr('height', (d) => yScale(d))
      .attr('y', (d) => height - yScale(d));

    selection
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 45)
      .attr('y', (d) => height)
      .attr('width', 40)
      .attr('height', 0)
      .attr('fill', 'orange')
      .transition()
      .duration(300)
      .attr('height', (d) => yScale(d))
      .attr('y', (d) => height - yScale(d));

    selection
      .exit()
      .transition()
      .duration(300)
      .attr('y', (d) => height)
      .attr('height', 0)
      .remove();
  };

  return (
    <div className="chart">
      <svg ref={ref}></svg>
    </div>
  );
}
