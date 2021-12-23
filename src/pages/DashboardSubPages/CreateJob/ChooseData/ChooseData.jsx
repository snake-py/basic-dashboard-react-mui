import { useSelector } from '@redux/hooks';
import * as d3 from 'd3';
import Plot from 'react-plotly.js';
import { darkTheme, lightTheme } from '../../../../styler';

// https://plotly.com/javascript/reference/#layout
// https://github.com/plotly/react-plotly.js/blob/master/README.md
export default function ChooseData() {
  const app = useSelector(state => state.app);
  return (
    <div className='alignCenter w-100'>

      <Plot
        data={[{ type: 'bar', x: [1, 2, 3, 4, 5, 6, 7, 8], y: [2, 5, 3, 1, 7, 6, 10, 4] }]}

        layout={{
          width: 1100,
          height: 500,
          title: 'A Fancy Plot',
          plot_bgcolor: app.darkMode ? darkTheme.palette.background.default : lightTheme.palette.background.default,
          paper_bgcolor: app.darkMode ? darkTheme.palette.background.default : lightTheme.palette.background.default,
          font: {
            color:  app.darkMode ? darkTheme.palette.text.primary : lightTheme.palette.background.secondary
          },
        }}
          showLegend={false}
      />
    </div>
  );
}
