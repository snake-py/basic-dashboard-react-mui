import ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard';
import Overview from './pages/DashboardSubPages/Overview';
import CreateJob from './pages/DashboardSubPages/CreateJob';
import Upload from './pages/DashboardSubPages/Upload';
import JobList from './pages/DashboardSubPages/Job/JobList';
import { Routes, Route } from 'react-router-dom';
import { styled } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector,  } from 'react-redux';

import { darkTheme, lightTheme } from './styler';
import JobDetails from '@pages/DashboardSubPages/Job/JobDetails';

const ColorWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
  color: theme.palette.text.primary,
}));

function App() {
  //@ts-ignore
  const app = useSelector(state => state.app);
  return (
    <ThemeProvider theme={app.darkMode ? darkTheme : lightTheme}>

    <ColorWrapper>
      <Dashboard />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/create" element={<CreateJob />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
    </ColorWrapper>
    </ThemeProvider>

  );
}

export default App;
