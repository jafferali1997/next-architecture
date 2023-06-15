import PropTypes from 'prop-types';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import DownloadDropdownBtn from '../download-dropdown-button/download-dropdown-button.component';

export default function StepperFooter({
  handleTabClick,
  back = null,
  setIsSubmit = null,
  submitText = null,
  finish = false
}) {
  const dropdownoptions = [
    { id: 1, name: 'option1', link: '/option1' },
    { id: 2, name: 'option2', link: '/option2' },
    { id: 3, name: 'option3', link: '/option3' }
  ];
  return (
    <div className="footer-buttons">
      <div className="back-button">
        {back && (
          <CustomButton
            className="btn-cancel"
            text="Back"
            onClick={() => {
              if (handleTabClick) handleTabClick(back);
            }}
          />
        )}
      </div>
      {finish ? (
        <div className="next-button">
          <DownloadDropdownBtn
            className="btn-primary"
            text="Download Orders"
            dropdownoptions={dropdownoptions}
          />
        </div>
      ) : (
        <div className="next-button">
          <CustomButton
            type="submit"
            className="btn-primary"
            onClick={() => {
              if (setIsSubmit) {
                setIsSubmit(true);
              }
            }}
            text={submitText ?? 'Save and Next'}
          />
        </div>
      )}
    </div>
  );
}

StepperFooter.propTypes = {
  handleTabClick: PropTypes.func,
  back: PropTypes.string,
  finish: PropTypes.bool,
  setIsSubmit: PropTypes.func,
  submitText: PropTypes.string
};
