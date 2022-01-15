import React, { useEffect } from 'react';
import HorizontalStepper from '@components/stepper/HorizontalStepper';
import { JobActionCreators, State, useSelector } from '@state';
import ChooseData from './ChooseData';
import ChooseDateRange from './ChooseDateRange';
import SummaryJob from './SummaryJob';
import SummaryChosenJobData from '@components/SummaryChosenJobData';
import ChooseGroup from './ChooseGroup';
import { useDispatch } from 'react-redux';
import SummaryChosenJobGroups from '@components/SummaryChosenJobGroups';

export default function CreateJob() {
  const job = useSelector((state: State) => state.job);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(JobActionCreators.loadJobGroups());
  }, []);

  const choseJobGroupClickHandler = (
    data: { name: string; value: number },
    action: string
  ) => {
    if (action === 'ADD') {
      dispatch(
        JobActionCreators.chooseJobGroup(
          job.jobGroups.find((group) => group.group === data.name)!
        )
      );
    } else if (action === 'REMOVE') {
      dispatch(
        JobActionCreators.removeJobGroup(
          job.jobGroups.find((group) => group.group === data.name)!
        )
      );
    }
  };
  return (
    <div className="main-container">
      <HorizontalStepper
        steps={[
          'Choose Group',
          'Choose Data',
          'Set Date Range',
          'Summary&Create',
        ]}
      >
        <div className="stepper-inner-container">
          {job.activeJobCreateStep === 0 && (
            <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <ChooseGroup
              clickHandler={choseJobGroupClickHandler}
              jobGroups={job.jobGroups}
              chosenJobGroups={job.chosenJobGroups}
              />
              <SummaryChosenJobGroups chosenJobGroups={job.chosenJobGroups} />
              </div>
          )}
          {job.activeJobCreateStep === 1 && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <ChooseData jobCreationData={job.jobCreationData} />
              <SummaryChosenJobData
                chosenJobCreationData={job.chosenJobCreationData}
              />
            </div>
          )}
          {job.activeJobCreateStep === 2 && <ChooseDateRange />}
          {job.activeJobCreateStep === 3 && <SummaryJob />}
        </div>
      </HorizontalStepper>
    </div>
  );
}
