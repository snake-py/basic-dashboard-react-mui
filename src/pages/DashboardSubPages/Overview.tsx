import React from 'react';
import Wrapper from '@components/Wrapper';

import faker from 'faker';

const test = [
  {
    id: 1,
    name: faker.name.findName(),
    text: 'Choose data to be used in the job',
  },
];

export default function Overview() {
  return (
    <div className="main-container">
      <div className="wrapper-container">
        <Wrapper styles={{width: "32%"}} >
          <div>
              <h1>This app is a data driven NLP platform to understand your customer better</h1>
          </div>
        </Wrapper>
        <Wrapper styles={{width: "32%"}} >
          <div>test</div>
        </Wrapper>
        <Wrapper styles={{width: "32%"}} >
          <div>test</div>
        </Wrapper>
        <Wrapper styles={{width: "32%"}} >
          <div>test</div>
        </Wrapper>
      </div>
    </div>
  );
}
