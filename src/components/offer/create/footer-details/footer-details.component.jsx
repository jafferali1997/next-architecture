'use client';

import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import TextArea from '@/common/components/text-area/text-area.component';
import PlusIcon from '@/common/icons/plus.icon';
import useFooterDetails from './use-footer-details.hook';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';

export default function FooterDetails({ handleTabClick, handleTabCompleted }) {
  const { isSubmit, setIsSubmit, onSubmit } = useFooterDetails(
    handleTabClick,
    handleTabCompleted
  );
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="tw-flex tw-items-center tw-justify-between">
          <div className="tw-flex tw-h-9 tw-w-[257px] tw-flex-row tw-items-center tw-justify-between tw-gap-[46px] tw-rounded tw-bg-[#bbbbbb26] tw-py-2  tw-pl-2 tw-pr-2 ">
            <p className="tw-text-xs tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-black">
              Disclaimer Text
            </p>
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.51302 0.833306C1.18763 0.507919 0.660076 0.50792 0.334689 0.833307C0.00930119 1.15869 0.00930119 1.68625 0.334688 2.01164L2.61591 4.29287C3.00644 4.68339 3.00644 5.31656 2.61592 5.70708L0.33469 7.98831C0.00930166 8.31369 0.00930071 8.84125 0.334688 9.16664C0.660076 9.49203 1.18763 9.49203 1.51302 9.16664L4.97258 5.70708C5.36311 5.31656 5.36311 4.68339 4.97258 4.29287L1.51302 0.833306Z"
                fill="#46474F"
              />
            </svg>
          </div>
          <CustomButton
            text="Add Disclaimer Text"
            className="btn-secondary"
            startIcon={<PlusIcon />}
          />
        </div>
        <div className="tw-mt-[18px]">
          <TextArea placeholder="This offer is valid for 30 days from the date of issue and is subject to change without prior notice." />
          <p className="tw-text-right tw-text-[10px] tw-font-normal tw-not-italic tw-leading-[15px] tw-text-text-medium-gray">
            Max: 575
          </p>
        </div>
        <div className="tw-mt-[18px]">
          <TextArea
            label="Terms and Conditions"
            placeholder="This offer is valid for 30 days from the date of issue and is subject to change without prior notice."
          />
        </div>
        <div className="tw-mt-[18px]">
          <TextArea
            label="Copy Right"
            placeholder="This offer is valid for 30 days from the date of issue and is subject to change without prior notice."
          />
          <p className="tw-text-right tw-text-[10px] tw-font-normal tw-not-italic tw-leading-[15px] tw-text-text-medium-gray">
            Max: 575
          </p>
        </div>
        <StepperFooter
          back="lineItems"
          handleTabClick={handleTabClick}
          setIsSubmit={setIsSubmit}
        />
      </form>
    </div>
  );
}
FooterDetails.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
