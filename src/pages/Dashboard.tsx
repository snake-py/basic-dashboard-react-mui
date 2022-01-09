import React from 'react';
import TopNavigation from '../components/navigation/TopNavigation';
import SideNavigation from '../components/navigation/SideNavigation';
import { Snackbar } from '@mui/material';
import { useSelector } from '@state';

export default function Dashboard() {
  const app = useSelector((state) => state.app);
  return (
    <>
      <TopNavigation />
      <SideNavigation />
      {app.toasts.length > 0
        ? app.toasts.map((toast, index) => {
            <Snackbar
              open={true}
              autoHideDuration={toast.duration ? toast.duration : 5000}
            //   onClose={handleClose}
              message={toast.message}
              action={toast.type}
            />;
          })
        : null}
    </>
  );
}
