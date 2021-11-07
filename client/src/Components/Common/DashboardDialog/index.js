/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';

const Transition = React.forwardRef((props, ref) => <Slide direction="down" ref={ref} {...props} />);

function DashboardDialog({
  title, content, open, handleClose, cancelButton, saveButton,
}) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        scroll="paper"
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {content}
        </DialogContent>
        <DialogActions>
          {cancelButton}
          {saveButton}
        </DialogActions>
      </Dialog>
    </div>
  );
}

DashboardDialog.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  cancelButton: PropTypes.node.isRequired,
  saveButton: PropTypes.node.isRequired,
};

export default DashboardDialog;
