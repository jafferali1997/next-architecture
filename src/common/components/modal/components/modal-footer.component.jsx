import { DialogActions } from '@mui/material/node';
import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../custom-button/custom-button.component';

export default function ModalFooter({
  cancelButtonText = 'Cancel',
  submitButtonText,
  onClose
}) {
  return (
    <DialogActions>
      <CustomButton className="btn-cancel" onClick={onClose} text={cancelButtonText} />
      {submitButtonText && (
        <CustomButton type="submit" className="btn-primary" text={submitButtonText} />
      )}
    </DialogActions>
  );
}

ModalFooter.propTypes = {
  cancelButtonText: PropTypes.string,
  submitButtonText: PropTypes.string,
  onClose: PropTypes.func
};
