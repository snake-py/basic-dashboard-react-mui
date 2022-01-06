import { JobActionTypes } from '@state/action-types';
import { JobActions } from '@state/actions';
import { IJob, IJobState, JobStatus } from '@state/reducer-types';
import faker from 'faker';



const jobs: IJob[] = [
  {
    id: 1,
    title: faker.lorem.word(),
    author: faker.name.firstName(),
    creationDate: faker.date.past(),
    status: JobStatus.PENDING,
    descriptionShort: faker.lorem.sentence(),
  },
  {
    id: 2,
    title: faker.lorem.word(),
    author: faker.name.firstName(),
    creationDate: faker.date.past(),
    status: JobStatus.PENDING,
    descriptionShort: faker.lorem.sentence(),
  },
  {
    id: 3,
    title: faker.lorem.word(),
    author: faker.name.firstName(),
    creationDate: faker.date.past(),
    status: JobStatus.PENDING,
    descriptionShort: faker.lorem.sentence(),
  },
  {
    id: 4,
    title: faker.lorem.word(),
    author: faker.name.firstName(),
    creationDate: faker.date.past(),
    status: JobStatus.PENDING,
    descriptionShort: faker.lorem.sentence(),
  },
  {
    id: 6,
    title: faker.lorem.word(),
    author: faker.name.firstName(),
    creationDate: faker.date.past(),
    status: JobStatus.PENDING,
    descriptionShort: faker.lorem.sentence(),
  },
];

const initialState: IJobState = {
  jobs,
  activeJobCreateStep: 0,
  smallBarChartCurrentValue: 0,
  jobCreationData: []

}

export function jobReducer(state = initialState, action: JobActions) {
  console.log('type: ' + action.type);
  switch (action.type) {
    case JobActionTypes.SET_ACTIVE_JOB_CREATE_STEP:
      return {
        ...state,
        ...action.payload,
      };
    case JobActionTypes.CHANGE_CURRENT_SMALL_BAR_CHART_VALUE:
      return {
        ...state,
        smallBarChartCurrentValue: action.payload,
      };
    default:
      return state;
  }
}
