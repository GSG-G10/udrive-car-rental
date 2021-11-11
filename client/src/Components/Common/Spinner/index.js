import React from 'react';
import { Box, CircularProgress } from '@mui/material';

function Spinner() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'canter' }}>
      <CircularProgress sx={{ margin: 'auto' }} />
    </Box>
  );
}

export default Spinner;
