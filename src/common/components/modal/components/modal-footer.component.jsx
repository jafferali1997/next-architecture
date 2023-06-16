import { DialogActions } from '@mui/material/node';
import PropTypes from 'prop-types';
import CustomButton from '../../custom-button/custom-button.component';

export default function ModalFooter({
  cancelButtonText = 'Cancel',
  submitButtonText,
  onClose
}) {
  return (
    <DialogActions className="tw-pt-4 tw-gap-4">
      <CustomButton className="tw-px-4 tw-opacity-100 !tw-h-fit tw-py-[10px] tw-rounded-md tw-bg-lightest-gray tw-text-white tw-font-dm tw-font-semibold tw-text-sm tw-leading-4" onClick={onClose} text={cancelButtonText} />
      {submitButtonText && (
        <CustomButton type="submit" className="tw-px-4 tw-opacity-100 !tw-h-fit tw-py-[10px] tw-rounded-md tw-bg-primary tw-text-white tw-font-dm tw-font-semibold tw-text-sm tw-leading-4" text={submitButtonText} />
      )}
    </DialogActions>
  );
}

ModalFooter.propTypes = {
  cancelButtonText: PropTypes.string,
  submitButtonText: PropTypes.string,
  onClose: PropTypes.func
};
