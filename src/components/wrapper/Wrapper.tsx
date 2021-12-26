import { styled, Box } from '@mui/system';
import React from 'react';

export default function Wrapper({ children, styles = {} }: { children: any; styles: any }) {
  const WrapperBox = styled('nav')(({ theme }) => ({
    borderRadius: '0.5rem',
    margin: '0.5rem',
    padding: '1rem',
    backgroundColor: theme.palette.background.light,
    transition: 'all .2s ease-in-out',
    '&:hover': {
      backgroundColor: theme.palette.background.dark,
    },
    '@media (max-width: 768px)': {
      width: '100%',
    },

    ...styles,
  }));
  return <WrapperBox>{children}</WrapperBox>;
}
