import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../custom-button/custom-button.component';

export default function Modal({
  title,
  children,
  cancelButtonText = 'Cancel',
  submitButtonText,
  onSubmit
}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <CustomButton className="btn-secondary" onClick={handleClose}>
          {cancelButtonText}
        </CustomButton>
        {}
        <CustomButton className="btn-primary" onClick={onSubmit}>
          {}
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  cancelButtonText: PropTypes.string,
  submitButtonText: PropTypes.string,
  onSubmit: PropTypes.func
};
