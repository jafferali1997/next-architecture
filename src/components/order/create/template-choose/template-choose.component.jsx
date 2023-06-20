import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import SearchIcon from '@/common/icons/search-icon';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import useTemplateChooseOrder from './use-template-choose.hook';

export default function TemplateChooseOrder({ handleTabClick, handleTabCompleted }) {
  const { isSubmit, setIsSubmit, onSubmit } = useTemplateChooseOrder(
    handleTabClick,
    handleTabCompleted
  );
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="tw-rounded-[1px] tw-bg-[#fbfbfb] tw-px-5 tw-py-4">
          <div className="tw-bg-white">
            <CustomInput
              startIcon={<SearchIcon />}
              placeholder="Search template by name"
              className="tw-h-[38px]"
            />
          </div>
          <div className="tw-mt-5 tw-flex tw-flex-wrap tw-items-center tw-gap-6">
            <div className="tw-text-xs tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-dark-gray">
              All Templates
            </div>
            <div>
              <CustomButton
                className="btn-primary tw-flex tw-flex-row tw-items-center tw-rounded-[18px] tw-bg-[#1d4ed8] tw-px-2 tw-py-1"
                text="Standard Template"
              />
            </div>
          </div>
        </div>
        <div className="tw-mt-4 tw-flex tw-items-center tw-gap-4">
          <div className="tw-text-sm tw-font-medium tw-leading-[21px] tw-text-text-dark-gray">
            Standard Template
          </div>
          <div className="tw-rounded-3xl tw-border tw-border-solid tw-border-disabled-input tw-bg-[#fbfbfb] tw-px-[0.7rem] tw-py-px">
            1
          </div>
        </div>

        <div className="tw-mt-4 tw-h-auto tw-w-[257px] tw-rounded-[5px] tw-border tw-border-solid tw-border-primary tw-px-1.5 tw-py-[11px] hover:tw-cursor-pointer">
          <div>
            <img src="/assets/images/PDF-invoice.png" alt="" />
          </div>
          <div className="tw-mb-4 tw-mt-4 tw-text-[11px] tw-font-normal tw-leading-[13px] tw-text-text-dark-gray">
            Standard Template
          </div>
        </div>
        <StepperFooter
          back="footerDetails"
          handleTabClick={handleTabClick}
          setIsSubmit={setIsSubmit}
        />
      </form>
    </div>
  );
}
TemplateChooseOrder.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
