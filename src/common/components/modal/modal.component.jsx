import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
import useModal from './use-modal.hook';

export default function Modal({ show = false, title, children, onClose }) {
  const { open, register, handleSubmit, setValue, errors, handleClose } = useModal(show);

  return (
    <Dialog open={show} onClose={onClose} className='custom_modal_design'>
      <DialogTitle className='tw-bg-skyblue tw-py-[14px] tw-px-4 tw-rounded-tl-[20px] tw-rounded-tr-[20px] tw-font-dm tw-font-bold tw-text-xl tw-leading-8 tw-text-text-dark-gray'>{title}</DialogTitle>
      <DialogContent className='tw-px-4 !tw-pt-7 tw-pb-6'>{children}</DialogContent>
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
