import ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard';
import Overview from './pages/DashboardSubPages/Overview';
import CreateJob from './pages/DashboardSubPages/CreateJob';
import Upload from './pages/DashboardSubPages/Upload';
import Jobs from './pages/DashboardSubPages/Jobs';
import { Routes, Route } from 'react-router-dom';
import { styled } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector,  } from 'react-redux';

import { darkTheme, lightTheme } from './styler';

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
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </ColorWrapper>
    </ThemeProvider>

  );
}

export default App;
