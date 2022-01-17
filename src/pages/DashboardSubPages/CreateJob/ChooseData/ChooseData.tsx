import { useRef, useEffect, useState, useMemo } from 'react';
import { State, useSelector } from '@state';
import BarChart from '@charts/BarChart';
import Wrapper from '@components/Wrapper';
import DataPicker from '@components/DataPicker';
import { IDataPickerProps } from '@interfaces/Props';

const ChooseData: React.FC<IDataPickerProps> = ({jobCreationData}) => {
  const DataPickerMemo = useMemo(() => <DataPicker jobCreationData={jobCreationData} />, [jobCreationData]);
  return (
    <div className="">
      <h1>Choose your data</h1>
      {DataPickerMemo}
    </div>
  );
}

export default ChooseData;