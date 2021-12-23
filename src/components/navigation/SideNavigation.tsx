import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const SideBar = styled('aside')(({ theme }) => ({
  backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
}));

const StyledNavigation = styled('nav')(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const ListItem = styled('li')(({ theme }) => ({}));

const CustomHr = styled('hr')(({ theme }) => ({
  border: `1px solid ${theme.palette.divider.secondary}`,
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

export default function SideNavigation() {
  return (
    <SideBar className="sideNavigation">
      <Link to="/">
        <HomeIcon
          sx={{
            color: 'text.secondary',
            fontSize: '4rem',
          }}
        />
      </Link>
      <CustomHr />
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
            <StyledLink to="/Jobs" className="sideNavigation__link">
              Jobs
            </StyledLink>
          </ListItem>
        </ul>
      </StyledNavigation>
    </SideBar>
  );
}
