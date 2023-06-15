import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
import useModal from './use-modal.hook';

export default function Modal({ show = false, title, children, onClose }) {
  const { open, register, handleSubmit, setValue, errors, handleClose } = useModal(show);

  return (
    <Dialog open={show} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

Modal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired
  // onSubmit: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  // validationSchema: PropTypes.object
};
