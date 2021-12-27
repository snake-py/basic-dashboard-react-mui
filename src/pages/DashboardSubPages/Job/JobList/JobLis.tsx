import React from 'react';
import Wrapper from '@components/Wrapper';
import { useSelector } from '@redux/hooks';
import { styled, Box } from '@mui/system';
import { Link } from 'react-router-dom';

export default function JobList() {
  //@ts-ignore
  const jobState = useSelector((state) => state.job);
  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
  }));

  const StyledLink = styled(Link)(({ theme }) => ({
    color: 'unset',
    textDecoration: 'none',
    width: '100%',
    display: 'block',
  }));

  return (
    <div className="main-container">
      <div className="wrapper-container">
        {jobState.jobs
          ? jobState.jobs.map((job: any) => {
              return (
                <StyledLink key={job.id} to={`/job/${job.id}`}>
                  <Wrapper  shouldHover={true} styles={{ width: '100%' }}>
                    <div className="job-list__container">
                      <h1 className="job-list__title">
                        #{job.id} {job.title}
                      </h1>

                      <p className="job-list__paragraph">{job.descriptionShort}</p>
                      <p className="job-list__paragraph">{job.author}</p>
                      <div className="job-list__date">{new Date(job.creationDate).toLocaleDateString()}</div>
                      <div className="job-list__status">{job.status}</div>
                    </div>
                  </Wrapper>
                </StyledLink>
              );
            })
          : null}
      </div>
    </div>
  );
}
