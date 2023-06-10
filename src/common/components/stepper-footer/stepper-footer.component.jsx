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
            className="btn-cancel"
            text="Back"
            onClick={() => {if (handleTabClick) handleTabClick(back)}}
          />
        )}
      </div>
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
    </div>
  );
}

StepperFooter.propTypes = {
  handleTabClick: PropTypes.func,
  back: PropTypes.string,
  setIsSubmit: PropTypes.func,
  submitText: PropTypes.string
};
