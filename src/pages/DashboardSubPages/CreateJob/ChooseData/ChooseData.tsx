import { useRef, useEffect, useState } from 'react';
import { State, useSelector } from '@state';
import BarChart from '@charts/BarChart';
import Wrapper from '@components/Wrapper';
import DataPicker from '@components/DataPicker';

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
  const app = useSelector((state: State) => state.app);
  const job = useSelector((state: State) => state.job);
  const [test, setTest] = useState([]);
  // console.log('ChooseData', job.jobCreationData);
  // useEffect(() => {
  //   setTest(
  //     job.jobCreationData.map((data) => ({
  //       name: data.id,
  //       value: data.totalReviews,
  //     }))
  //   );
  //   console.log('test', test);

  // }, [job.jobCreationData]);

  return (
    <div className="">
      <h1>Choose your data</h1>
      <DataPicker />

      {/* <Wrapper  styles={{width: "fit-content"}} shouldHover={false}>
        <BarChart chartId={"test"} data={data} options={options} />
      </Wrapper> */}
    </div>
  );
}
