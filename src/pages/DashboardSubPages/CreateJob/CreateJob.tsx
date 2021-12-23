import React from 'react';
import HorizontalStepper from '../../../components/stepper/HorizontalStepper';
import { useDispatch, useSelector } from 'react-redux';
import ChooseData from './ChooseData';
import ChooseDateRange from './ChooseDateRange';
import SummaryJob from './SummaryJob';

export default function CreateJob() {
  const dispatch = useDispatch();
  //@ts-ignore
  const job = useSelector((state) => state.job);
  return (
    <div className="main-container">
      <HorizontalStepper steps={['Choose Data', 'Set Date Range', 'Summary&Create']}>
        <div className="stepper-inner-container">
          {job.activeJobCreateStep === 0 && <ChooseData />}
          {job.activeJobCreateStep === 1 && <ChooseDateRange />}
          {job.activeJobCreateStep === 2 && <SummaryJob />}
        </div>
      </HorizontalStepper>
    </div>
  );
}
