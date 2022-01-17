import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { Button, Drawer, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { useViewport } from '@hooks';

const SideNavigation = () => {
  const { width } = useViewport();
  const breakpoint = 1120;
  return width < breakpoint ? (
    <MobileSideNavigation />
  ) : (
    <DesktopSideNavigation />
  );
};

const MobileSideNavigation = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const theme = useTheme();

  type Anchor = 'top' | 'left' | 'bottom' | 'right';
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const anchor = 'left';
  return (
    <>
      <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        PaperProps={{
          style: {
            backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          },
        }}
      >
        <NavList withTopHR={false} />
      </Drawer>
    </>
  );
};

const DesktopSideNavigation = () => {
  const SideBar = styled('aside')(({ theme }) => ({
    backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  }));
  return (
    <SideBar className="sideNavigation">
      <NavList />
    </SideBar>
  );
};

const NavList = ({ withTopHR = true }) => {
  const theme = useTheme();

  const StyledNavigation = styled('nav')(({ theme }) => ({
    color: theme.palette.text.secondary,
  }));

  const ListItem = styled('li')(({ theme }) => ({}));

  const CustomHr = styled('hr')(({}) => ({
    border: `1px solid ${theme.palette.text.secondary}`,
  }));

  const StyledLink = styled(Link)(({ theme }) => ({
    display: 'block',
    padding: '0.5rem 1rem',
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    transition: 'all 0.1s ease-in-out',
    textAlign: 'left',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.secondary,
      fontWeight: 'bold',
    },
  }));
  return (
    <>
      <Link to="/">
        <HomeIcon
          sx={{
            color: 'text.secondary',
            fontSize: '4rem',
          }}
        />
      </Link>
      {withTopHR && <CustomHr />}
      <StyledNavigation className="sideNavigation__nav">
        <ul className="sideNavigation__list">
          <ListItem>
            <StyledLink to="/create" className="sideNavigation__link">
              Make Job
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/upload" className="sideNavigation__link">
              Upload
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/jobs" className="sideNavigation__link">
              Jobs
            </StyledLink>
            <StyledLink to="/plot-playground" className="sideNavigation__link">
              Plot Playground
            </StyledLink>
          </ListItem>
        </ul>
      </StyledNavigation>
    </>
  );
};

export default SideNavigation;
