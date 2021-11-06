import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';

import Button from '../Common/Button/index';

function Confirm({
  handelClick, carName, price, open, setOpen,
}) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button loading={false} handelClick={handleClickOpen} text="Rent Now" />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Confirm Massage
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure that you want to rent
            {carName}
            with total price
            {price}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button loading={false} handelClick={handleClose} text="Cancel" />
          <Button loading={false} handelClick={handelClick} text="Agree" />
        </DialogActions>
      </Dialog>
    </div>
  );
}
Confirm.propTypes = {
  handelClick: PropTypes.func.isRequired,
  carName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,

};
export default Confirm;
