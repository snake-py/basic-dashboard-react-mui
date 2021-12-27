import { useRef, useEffect } from 'react';
import { useSelector } from '@redux/hooks';
import BarChart from '@charts/BarChart';
import Wrapper from '@components/Wrapper';


const data = [
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
const options = {
  chartWidth: 800,
  chartHeight: 400,
  chartMargin: { top: 20, right: 20, bottom: 30, left: 40 },
};
export default function ChooseData() {
  const app = useSelector((state) => state.app);

  return (
    <div className="main-container">
      <h1>Some Data</h1>
      <Wrapper  styles={{width: "fit-content"}} shouldHover={false}>
        <BarChart data={data} options={options} />
      </Wrapper>
    </div>
  );
}
