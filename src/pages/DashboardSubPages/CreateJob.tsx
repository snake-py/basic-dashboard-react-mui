import React from 'react';
import HorizontalStepper from '../../components/stepper/HorizontalStepper';
import { useDispatch, useSelector } from 'react-redux';

export default function CreateJob() {
  const dispatch = useDispatch();
  //@ts-ignore
  const job = useSelector((state) => state.job);
  return (
    <div className="main-container">
      <HorizontalStepper steps={['Choose Data', 'Set Date Range', 'Summary&Create']}>
        <div className="stepper-inner-container">
          {job.activeJobCreateStep === 0 && '0'}
          {job.activeJobCreateStep === 1 && '1'}
          {job.activeJobCreateStep === 2 && '2'}
        </div>
      </HorizontalStepper>
    </div>
  );
}
