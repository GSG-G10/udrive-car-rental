import React from 'react';
import Stack from '@mui/material/Stack';
import MuiButton from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import PropTypes from 'prop-types';

function Button({
  loading, handelClick, text, width,
}) {
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
      ) : <MuiButton sx={{ width: `${width}%` }} variant="contained" onClick={handelClick}>{text}</MuiButton>}

    </Stack>
  );
}
Button.defaultProps = {
  loading: false,
  width: '',

};
Button.propTypes = {
  loading: PropTypes.bool,
  handelClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
};
export default Button;
