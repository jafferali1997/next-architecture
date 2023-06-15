'use client';

import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import CustomInput from '@/common/components/custom-input/custom-input.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';
import useHeaderBody from './use-header-body.hook';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import PlusIcon from '@/common/icons/plus.icon';

export default function HeaderBody() {
  const { isSubmit, setIsSubmit } = useHeaderBody();
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
        <form onSubmit="">
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
              <div className="tw-min-w-[250px] tw-bg-slate-400">select</div>
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

          <StepperFooter setIsSubmit={setIsSubmit} />
        </form>
      </div>
    </div>
  );
}
