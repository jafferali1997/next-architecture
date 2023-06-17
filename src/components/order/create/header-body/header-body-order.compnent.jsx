'use client';

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import PlusIcon from '@/common/icons/plus.icon';
import useHeaderBodyOrder from './use-header-body-order.hook';

export default function HeaderBodyOrder({ handleTabClick, handleTabCompleted }) {
  const { isSubmit, setIsSubmit, onSubmit } = useHeaderBodyOrder({
    handleTabClick,
    handleTabCompleted
  });
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className="personal-details-wrapper">
      <div className="content-header tw-flex tw-items-center tw-justify-between ">
        <h3 className="form-inner-heading">Header</h3>
      </div>
      <div className="content-body">
        {' '}
        <form onSubmit={onSubmit}>
          <div className="form-box-grid-2col">
            <CustomInput
              label="Company Name "
              name="Company Name "
              placeholder="Enter Company Name "
              type="text"
              isRequired={true}
            />
            <CustomInput
              label="Company Slogan  "
              name="Company Slogan  "
              placeholder="Enter Company Slogan  "
              type="text"
              isRequired={true}
            />
            <CustomInput
              label="Date  "
              name="Date  "
              placeholder="26.01.2023 "
              type="date"
              isRequired={true}
            />
            <CustomInput
              label="Company Email"
              name="Company Email"
              placeholder="Enter Company Email"
              type="text"
              isRequired={true}
            />
            <CustomInput
              label="Company Address"
              name="Company Address"
              placeholder="Enter Company Address"
              type="text"
              isRequired={true}
            />
            <div>
              <label className="tw-text-xs tw-font-medium tw-not-italic tw-leading-6 tw-text-text-black">
                Company Logo
              </label>
              <div className="tw-flex tw-h-[70.05px] tw-w-[216px] tw-flex-col tw-items-center tw-justify-center tw-rounded-[10px] tw-border tw-border-solid tw-border-text-ultra-light-gray tw-bg-white">
                <img
                  className="tw-w-full tw-p-5"
                  src="/assets/images/logo.png"
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="form-inner-heading">Body</h3>
            <div className="tw-flex tw-items-center tw-justify-between">
              <div className="tw-min-w-[250px]">
                {' '}
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
              </div>
              <CustomButton
                className="btn-secondary "
                text="Add Body Text"
                startIcon={<PlusIcon />}
              />
            </div>
            <div className="tw-mt-4">
              <Editor
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 235,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                  ],
                  toolbar:
                    'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  content_style:
                    'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
              />
            </div>
          </div>

          <StepperFooter
            back="customerDetails"
            handleTabClick={handleTabClick}
            setIsSubmit={setIsSubmit}
          />
        </form>
      </div>
    </div>
  );
}
HeaderBodyOrder.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
