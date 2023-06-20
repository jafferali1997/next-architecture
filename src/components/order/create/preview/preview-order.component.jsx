import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import DownloadDropdownBtn from '@/common/components/download-dropdown-button/download-dropdown-button.component';
import StepperFooter from '@/common/components/stepper-footer/stepper-footer.component';

function PreviewOrder({ handleTabClick, handleTabCompleted }) {
  const dropdownoptions = [
    { id: 1, name: 'option1', link: '/option1' },
    { id: 2, name: 'option2', link: '/option2' },
    { id: 3, name: 'option3', link: '/option3' }
  ];
  return (
    <>
      <div className="tw-flex tw-flex-col tw-gap-8 tw-pr-5">
        <div className="tw-flex tw-justify-end">
          <DownloadDropdownBtn text="Download orders" dropdownoptions={dropdownoptions} />
        </div>
        <div className="tw-flex tw-items-center tw-justify-between">
          <h1 className="tw-text-2xl tw-font-bold tw-leading-[29px]">2023-200002</h1>
          <Link href="/">
            <img
              alt="null"
              src="/assets/images/logo.png"
              className="tw-h-[70.05px] tw-w-[216px]"
            />
          </Link>
        </div>
        <div className="tw-flex tw-items-center tw-justify-between">
          <h3 className="tw-text-lg tw-font-medium tw-not-italic tw-leading-[27px] tw-text-text-black">
            order To
          </h3>
          <h3 className="tw-text-lg tw-font-medium tw-not-italic tw-leading-[27px] tw-text-text-black">
            order From
          </h3>
        </div>

        <div className="tw-flex tw-items-center tw-justify-between">
          <div className="tw-flex tw-flex-col tw-items-start tw-gap-4">
            <div className="tw-flex tw-gap-2">
              <p className="tw-text-sm tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
                Company Name:
              </p>
              <p className="tw-text-sm tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-dark-gray">
                Zapta Technology
              </p>
            </div>
            <div className="tw-flex tw-gap-2">
              <p className="tw-text-sm tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
                Contact Person:
              </p>
              <p className="tw-text-sm tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-dark-gray">
                MR. Nasir Joiya
              </p>
            </div>
            <div className="tw-flex tw-gap-2">
              <p className="tw-text-sm tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
                Customer No:
              </p>
              <p className="tw-text-sm tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-dark-gray">
                10002
              </p>
            </div>
            <div className="tw-flex tw-gap-2">
              <p className="tw-text-sm tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
                Delivery Date:
              </p>
              <p className="tw-text-sm tw-font-medium tw-not-italic tw-leading-[18px] tw-text-text-dark-gray">
                26.01.2023
              </p>
            </div>
          </div>
          <div className="tw-flex tw-flex-col tw-items-end tw-gap-4">
            <div>
              <p className="tw-text-sm tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
                Quicksteps
              </p>
            </div>
            <div>
              <p className="tw-text-sm tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
                quicksteps12@gmail.com
              </p>
            </div>
            <div>
              <p className="tw-text-sm tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
                12.03.2023
              </p>
            </div>
            <div>
              <p className="tw-text-sm tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-light-gray">
                Street 21 Berlin, Germany
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="tw-text-base tw-font-medium tw-leading-6 tw-text-black">
            Dear Sir or Madam,
          </div>
          <div className="tw-text-base tw-font-medium tw-leading-[22px] tw-text-text-black">
            we would be happy to confirm your order.
          </div>
        </div>

        <section className=" tw-bg-[#FFFFFF tw-h-[378px] tw-w-full tw-gap-4 tw-rounded-[20px] tw-border tw-border-solid tw-border-[#E2E2E2] tw-p-6">
          <div>
            <table class="... tw-w-full tw-border-collapse tw-rounded-[20px_0px_0px_0px] ">
              <thead>
                <tr>
                  <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4 tw-text-center tw-text-sm tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-black">
                    Position
                  </th>
                  <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4 tw-text-center tw-text-sm tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-black">
                    Designation
                  </th>
                  <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4 tw-text-center tw-text-sm tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-black">
                    Quantity
                  </th>
                  <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4 tw-text-center tw-text-sm tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-black">
                    Unit
                  </th>
                  <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4 tw-text-center tw-text-sm tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-black">
                    Price
                  </th>
                  <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4 tw-text-center tw-text-sm tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-black">
                    Tax
                  </th>
                  <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4 tw-text-center tw-text-sm tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-black">
                    Discount
                  </th>
                  <th className="... rounded-t-lg tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#FAFAFA] tw-px-2 tw-py-4 tw-text-center tw-text-sm tw-font-normal tw-not-italic tw-leading-[18px] tw-text-text-black">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    21
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    Jane Cooper
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    23
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    pc
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    300
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    0.401
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    10 %
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    2300
                  </td>
                </tr>
                <tr>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    21
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    Jane Cooper
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    23
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    pc
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    300
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    0.401
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    10 %
                  </td>
                  <td className="... tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-px-2 tw-py-4 tw-text-center">
                    2300
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" tw-mt-[15px] tw-flex tw-flex-row tw-items-start tw-justify-between tw-rounded-[20px] tw-bg-[#fafafa] tw-px-6 tw-py-4">
            <div className="tw-flex tw-flex-col tw-justify-between tw-gap-4">
              <div className="tw-text-base tw-font-medium tw-leading-[19px] tw-text-[#646464]">
                Net Amount
              </div>
              <div className="tw-text-base tw-font-medium tw-leading-[19px] tw-text-[#646464]">
                Plus VAT
              </div>
              <div className="tw-text-base tw-font-semibold tw-leading-[19px] tw-text-text-black">
                Invoice Amount
              </div>
            </div>

            <div className="tw-flex tw-flex-col tw-justify-between tw-gap-4 tw-text-right">
              <div className="tw-text-base tw-font-medium tw-leading-[19px] tw-text-[#646464]">
                6555.0
              </div>
              <div className="tw-text-base tw-font-medium tw-leading-[19px] tw-text-[#646464]">
                12.40{' '}
              </div>
              <div className="tw-text-base tw-font-semibold tw-leading-[19px] tw-text-text-black">
                7919.40
              </div>
            </div>
          </div>
        </section>

        <div>
          <div className="tw-text-base tw-font-medium tw-leading-6 tw-text-black">
            Dear Sir or Madam,
          </div>
          <div className="tw-text-base tw-font-medium tw-leading-[22px] tw-text-text-black">
            we would be happy to confirm your order.
          </div>
        </div>
      </div>
      <div className="tw-mt-6 tw-text-sm tw-font-normal tw-leading-[21px] tw-text-[#646464]">
        I hereby confirm the above order:
      </div>

      <div className="tw-mt-[22px] tw-flex tw-items-center tw-gap-[50px]">
        <div className=" tw-text-sm tw-font-medium tw-leading-[21px] tw-text-black">
          Date, Signature:
        </div>
        <div>QR Code</div>
      </div>
      <StepperFooter
        submitText="save"
        handleTabClick={handleTabClick}
        back="chooseTemplate"
      />
    </>
  );
}

export default PreviewOrder;
PreviewOrder.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
