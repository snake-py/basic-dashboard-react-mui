import faker from 'faker';

const jobs = [
  {
    id: 1,
    title: faker.lorem.word(),
    author: faker.name.firstName(),
    creationDate: faker.date.past(),
    status: 'pending',
    descriptionShort: faker.lorem.sentence(),
  },
  {
    id: 2,
    title: faker.lorem.word(),
    author: faker.name.firstName(),
    creationDate: faker.date.past(),
    status: 'pending',
    descriptionShort: faker.lorem.sentence(),
  },
  {
    id: 3,
    title: faker.lorem.word(),
    author: faker.name.firstName(),
    creationDate: faker.date.past(),
    status: 'pending',
    descriptionShort: faker.lorem.sentence(),
  },
  {
    id: 4,
    title: faker.lorem.word(),
    author: faker.name.firstName(),
    creationDate: faker.date.past(),
    status: 'pending',
    descriptionShort: faker.lorem.sentence(),
  },
  {
    id: 6,
    title: faker.lorem.word(),
    author: faker.name.firstName(),
    creationDate: faker.date.past(),
    status: 'pending',
    descriptionShort: faker.lorem.sentence(),
  },
];

export function jobReducer(state = { jobs: [...jobs], activeJobCreateStep: 0, smallBarChart: {} }, action: { type: string; payload: any }) {
  console.log('type: ' + action.type);
  switch (action.type) {
    case 'SET_ACTIVE_JOB_CREATE_STEP':
      return {
        ...state,
        ...action.payload,
      };
    case 'CHANGE_CURRENT_SMALL_BAR_CHART_VALUE':
      return {
        ...state,
        smallBarChart: {
          ...state.smallBarChart,
          currentValue: action.payload.value,
        },
      };
    default:
      return state;
  }
}
