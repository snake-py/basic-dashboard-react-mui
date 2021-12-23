import { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import Plot from 'react-plotly.js';
// https://plotly.com/javascript/reference/#layout
// https://github.com/plotly/react-plotly.js/blob/master/README.md
export default function ChooseData() {
  return (
    <div className='alignCenter w-100'>
    
      <Plot
        data={[{ type: 'bar', x: [1, 2, 3, 4, 5, 6, 7, 8], y: [2, 5, 3, 1, 7, 6, 10, 4] }]}

        layout={{
          width: 1100,
          height: 500,
          title: 'A Fancy Plot',
          plot_bgcolor: '#222222',
          paper_bgcolor: '#222222',
          font: {
            color: '#ffffff'
          },
        }}
          showLegend={false}
      />
    </div>
  );
}
