import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '@/common/components/custom-button/custom-button.component';

export default function StepperFooter({
  handleTabClick,
  back = null,
  setIsSubmit = null,
  submitText = null
}) {
  return (
    <div className="footer-buttons">
      <div className="back-button">
        {back && (
          <CustomButton
            className="back-btn"
            text="Back"
            onClick={() => handleTabClick(back)}
          />
        )}
      </div>
      <div className="next-button">
        <CustomButton
          type="submit"
          className="submit-btn"
          onClick={() => {
            if (setIsSubmit) {
              setIsSubmit(true);
            }
          }}
          text={submitText ?? 'Save and Next'}
        />
      </div>
    </div>
  );
}

StepperFooter.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  back: PropTypes.string,
  setIsSubmit: PropTypes.func,
  submitText: PropTypes.string
};
