import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { JobActionCreators } from '@state';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { useViewport } from '@hooks';

interface IProp {
  children: React.ReactNode;
  steps: string[];
}

const HorizontalStepper: React.FC<IProp> = ({ children, steps }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(JobActionCreators.createJobStepper(activeStep));
  }, [activeStep]);

  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  const StepperFooter = styled('div')(({ theme }) => ({
    position: 'absolute',
    bottom: 20,
    width: '83vw',
    '@media (max-width: 1119px)': {
      width: '94vw',
    },
    '@media (max-width: 637px)': {
      position: 'unset',
      display: 'block',
    },
  }));

  const StepperLabel = styled('span')(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: '1.5rem',
    '@media (max-width: 886px)': {
      fontSize: '1rem',
    },
    '@media (max-width: 682px)': {
      fontSize: '.8rem',
    },
  }));

  const { width } = useViewport();
  const breakpoint = 495;

  return (
    <Box sx={{ width: '100%', height: '80%' }}>
      <Stepper activeStep={activeStep}>
        {width < breakpoint
          ? steps.map((label, index) => {
              if (activeStep === index) {
                return (
                  <Step key={label}>
                    <StepLabel>
                      <StepperLabel>{label}</StepperLabel>
                    </StepLabel>
                  </Step>
                );
              }
            })
          : steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepLabel>
                    <StepperLabel>{label}</StepperLabel>
                  </StepLabel>
                </Step>
              );
            })}
      </Stepper>
      {children}
      <StepperFooter>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ fontSize: '1.5rem' }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ fontSize: '1.5rem' }}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </StepperFooter>
    </Box>
  );
};

export default HorizontalStepper;
