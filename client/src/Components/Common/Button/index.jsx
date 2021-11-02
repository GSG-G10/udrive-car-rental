import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiButton from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import PropTypes from 'prop-types';

function Button({ loading, handelClick, text }) {
  return (
    <Stack spacing={2} direction="row">
      {loading ? (
        <LoadingButton
          disabled
          loading
          loadingPosition="start"
          variant="outlined"
        >
          {text}
        </LoadingButton>
      ) : <MuiButton variant="contained" onClick={handelClick}>{text}</MuiButton>}

    </Stack>
  );
}
Button.propTypes = {
  loading: PropTypes.bool.isRequired,
  handelClick: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,

};
export default Button;
