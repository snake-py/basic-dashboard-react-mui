import { styled, Box, useTheme } from '@mui/system';
import React from 'react';

export default function Wrapper({ children, shouldHover = true, styles = {} }: { children: any; shouldHover: boolean; styles: any }) {
  const theme = useTheme();
  let hoverStyles = shouldHover
    ? {
        '&:hover': {
          backgroundColor: theme.palette.background.dark,
        },
      }
    : {};
  const WrapperBox = styled('div')(({ theme }) => ({
    borderRadius: '0.5rem',
    margin: '0.5rem',
    padding: '1rem',
    backgroundColor: theme.palette.background.light,
    transition: 'all .2s ease-in-out',
    '@media (max-width: 768px)': {
      width: '100%',
    },
    ...hoverStyles,
    ...styles,
  }));

  return <WrapperBox>{children}</WrapperBox>;
}
